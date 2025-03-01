"use client";

import { Button } from "antd";
import { useState } from "react";
import NewChatModal from "./MegModals/NewChatModal";

const DefaultUIChatBox = () => {
  const [newChat, setNewChat] = useState(false);

  const handleChatOpen = () => {
    setNewChat(true);
  };

  return (
    <>
      <NewChatModal
        isOpen={newChat}
        onConfirm={() => {
          setNewChat(false);
        }}
        onCancel={() => setNewChat(false)}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div
        className="flex-1 flex flex-col items-center justify-center p-5 "
        style={{ zIndex: "1" }}
      >
        <span>
          <svg
            width="333"
            height="291"
            viewBox="0 0 333 291"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224.102 97.7417C200.562 97.7417 176.658 96.7905 154.271 90.58C131.883 84.3694 112.333 72.5637 94.1585 59.0515C82.3609 50.1832 71.6868 43.1054 56.3779 44.1685C41.4364 44.9702 27.1485 50.5307 15.6197 60.0306C-3.84642 76.9838 -0.896996 108.344 6.85576 130.389C18.5411 163.596 54.1307 186.676 84.2429 201.699C119.158 219.072 157.501 229.171 195.984 234.962C229.691 240.082 272.978 243.774 302.191 221.841C329.045 201.699 336.404 155.707 329.831 124.654C328.227 115.477 323.312 107.2 316.011 101.379C297.163 87.6425 269.045 96.8185 247.865 97.2661C240.113 97.434 232.135 97.7417 224.102 97.7417Z"
              fill="#1c1c1c"
            />
            <path
              d="M265.442 229.645H77.8096V107.113L171.795 43.0371L265.442 107.113V229.645Z"
              fill="#1E222A"
            />
            <path
              d="M218.011 23.5307L83.191 60.1857C78.9422 61.3409 76.4343 65.7217 77.5894 69.9705L107.616 180.411C108.771 184.66 113.152 187.168 117.401 186.012L252.221 149.357C256.47 148.202 258.978 143.821 257.822 139.572L227.796 29.1322C226.641 24.8834 222.26 22.3755 218.011 23.5307Z"
              fill="#2E2E2F"
              stroke="#7D7D7D"
              stroke-miterlimit="10"
            />
            <path
              d="M265.442 229.645H77.8096V107.633L167.03 163.475L265.442 107.633V229.645Z"
              fill="#2E2E2F"
              stroke="#7D7D7D"
              stroke-miterlimit="10"
            />
            <path
              d="M77.8096 229.646L166.325 146.021C167.993 144.417 170.229 143.52 172.557 143.52C174.884 143.52 177.12 144.417 178.788 146.021L265.442 229.646H77.8096Z"
              fill="#2E2E2F"
              stroke="#7D7D7D"
              stroke-miterlimit="10"
            />
            <path
              d="M144.493 119.937C144.161 113.265 146.083 106.678 149.94 101.27C153.798 95.8614 159.359 91.9566 165.7 90.2037C172.041 88.4507 178.781 88.955 184.802 91.6328C190.822 94.3107 195.761 99.001 198.798 104.925"
              stroke="#7D7D7D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M192.132 71.7475C194.114 71.7475 195.721 70.1409 195.721 68.1589C195.721 66.177 194.114 64.5703 192.132 64.5703C190.15 64.5703 188.544 66.177 188.544 68.1589C188.544 70.1409 190.15 71.7475 192.132 71.7475Z"
              fill="#7D7D7D"
            />
            <path
              d="M131.64 89.1771C133.622 89.1771 135.228 87.1113 135.228 84.5631C135.228 82.0149 133.622 79.9492 131.64 79.9492C129.658 79.9492 128.051 82.0149 128.051 84.5631C128.051 87.1113 129.658 89.1771 131.64 89.1771Z"
              fill="#7D7D7D"
            />
            <path
              d="M261.854 65.5953C263.269 65.5953 264.417 64.2181 264.417 62.5193C264.417 60.8205 263.269 59.4434 261.854 59.4434C260.438 59.4434 259.291 60.8205 259.291 62.5193C259.291 64.2181 260.438 65.5953 261.854 65.5953Z"
              fill="#7D7D7D"
            />
            <path
              d="M64.4802 207.087C66.179 207.087 67.5562 205.71 67.5562 204.011C67.5562 202.313 66.179 200.936 64.4802 200.936C62.7814 200.936 61.4043 202.313 61.4043 204.011C61.4043 205.71 62.7814 207.087 64.4802 207.087Z"
              fill="#7D7D7D"
            />
            <path
              d="M307.481 61.4941V73.7979"
              stroke="#7D7D7D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M301.329 67.6445H313.633"
              stroke="#7D7D7D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M292.101 250.152V262.456"
              stroke="#7D7D7D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M285.95 256.303H296.203"
              stroke="#7D7D7D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M59.3555 1V13.3038"
              stroke="#7D7D7D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M53.2017 7.15234H65.5055"
              stroke="#7D7D7D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M167.525 290.14C224.435 290.14 270.57 287.385 270.57 283.988C270.57 280.59 224.435 277.836 167.525 277.836C110.616 277.836 64.4812 280.59 64.4812 283.988C64.4812 287.385 110.616 290.14 167.525 290.14Z"
              fill="#272933"
            />
          </svg>
        </span>
        <p className="text-2xl mt-4 text-white">Your Messages</p>
        <p className="text-gray-500 text-sm">Send a message to start a chat.</p>

        <Button
          type="primary"
          className="bg-purple-500 mt-7"
          onClick={handleChatOpen}
        >
          Send Message
        </Button>
      </div>
    </>
  );
};

export default DefaultUIChatBox;
