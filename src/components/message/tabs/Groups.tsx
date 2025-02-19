import { ColorPalette } from "@/theme/themes";
import { Avatar } from "antd";

const Groups = ({ group, handleOwnDetails }: any) => {
  return (
    <>
      <div className="space-y-4">
        {group?.map((msg: any) => (
          <div
            onClick={() => handleOwnDetails(msg)}
            key={msg.id}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#1E1E1E] cursor-pointer"
          >
            <Avatar src={msg.avatar} size={40} />
            <div className="flex-1">
              <p
                className="font-semibold text-base"
                style={{ color: `${ColorPalette?.colorPrimaryLight}` }}
              >
                {msg.name}, {msg.age}
              </p>
              <p className="text-gray-400 text-sm">{msg.text}</p>
            </div>
            <p className="text-gray-500 text-xs">{msg.time}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Groups;
