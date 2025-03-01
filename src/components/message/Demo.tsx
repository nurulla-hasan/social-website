// import { Button } from "antd";
// import { Mic, Send, StopCircle } from "lucide-react";
// import { useState } from "react";
// import { AudioRecorder } from "react-audio-voice-recorder";

// const VoiceRecorder = ({ onSend }) => {
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [audioUrl, setAudioUrl] = useState(null);

//   const handleRecordingComplete = (blob) => {
//     const url = URL.createObjectURL(blob);
//     setAudioBlob(blob);
//     setAudioUrl(url);
//   };

//   const handleSend = () => {
//     if (audioBlob && onSend) {
//       onSend(audioBlob);
//       setAudioBlob(null);
//       setAudioUrl(null);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-full max-w-sm">
//       <AudioRecorder
//         onRecordingComplete={handleRecordingComplete}
//         audioTrackConstraints={{
//           noiseSuppression: true,
//           echoCancellation: true,
//         }}
//         downloadOnSavePress={false}
//         downloadFileExtension="mp3"
//         render={({ startRecording, stopRecording }) => (
//           <div className="flex gap-4">
//             <Button onClick={startRecording} className="p-2 bg-blue-500">
//               <Mic className="w-6 h-6 text-white" />
//             </Button>
//             <Button onClick={stopRecording} className="p-2 bg-red-500">
//               <StopCircle className="w-6 h-6 text-white" />
//             </Button>
//           </div>
//         )}
//       />
//       {audioUrl && (
//         <div className="mt-4 flex gap-4 items-center">
//           <audio controls src={audioUrl} className="w-48" />
//           <Button onClick={handleSend} className="p-2 bg-green-500">
//             <Send className="w-6 h-6 text-white" />
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VoiceRecorder;
