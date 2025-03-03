"use client";

import {
  AudioOutlined,
  CloseOutlined,
  SendOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Input, Upload } from "antd";
import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  type: "text" | "image" | "audio";
  content: string;
};

const ChatBoxDesign = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  // Handle Text Messages
  const sendMessage = () => {
    if (text.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "text", content: text },
      ]);
      setText("");
    }
  };

  // Handle Image Upload
  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImages((prevImages) => [...prevImages, reader.result]);
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "image", content: reader.result },
        ]);
      }
    };
    reader.readAsDataURL(file);
    return false;
  };

  // Remove Image
  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Start Voice Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);

        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "audio", content: audioUrl },
        ]);

        stopStream();
      };

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Microphone access denied:", error);
      alert("Please allow microphone access to record audio.");
    }
  };

  // Stop Voice Recording
  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
  };

  // Stop the media stream to release resources
  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      stopStream();
    };
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-4 border rounded-lg shadow-md bg-white">
      {/* Message List */}
      <div className="h-64 overflow-auto border-b pb-4 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 rounded bg-gray-100 text-black">
            {msg.type === "text" && <p>{msg.content}</p>}
            {msg.type === "image" && (
              <img
                src={msg.content}
                alt="Uploaded"
                className="w-32 h-32 rounded"
              />
            )}
            {msg.type === "audio" && <audio controls src={msg.content} />}
          </div>
        ))}
      </div>

      {/* Image Previews */}
      <div className="flex flex-wrap gap-2 mb-2">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img src={img} alt="Preview" className="w-16 h-16 rounded border" />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
              onClick={() => removeImage(index)}
            >
              <CloseOutlined />
            </button>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-2 items-center">
        <Upload beforeUpload={handleUpload} showUploadList={false}>
          <Button icon={<UploadOutlined />} className="bg-blue-500 text-white">
            Upload
          </Button>
        </Upload>
        <Button
          onClick={recording ? stopRecording : startRecording}
          icon={<AudioOutlined />}
          className={`text-white ${recording ? "bg-red-500" : "bg-green-500"}`}
        >
          {recording ? "Recording..." : "Record"}
        </Button>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onPressEnter={sendMessage}
          placeholder="Type a message..."
        />
        <Button
          icon={<SendOutlined />}
          className="bg-blue-500 text-white"
          onClick={sendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatBoxDesign;
