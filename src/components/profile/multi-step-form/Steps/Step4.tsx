import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step4Props {
  control: Control<FormValues>;
}

const Step4 = ({ control }: Step4Props) => (
  <div className="mt-17">
    <div>
      <h1 className="text-center text-2xl lg:text-5xl font-bold ">Add Photo</h1>
    </div>

    <div className="flex gap-4 mt-12 items-center justify-center">
      <Controller
        name="addPhotos"
        control={control}
        rules={{ required: "Photos are required", max: 4 }}
        render={({ field, fieldState: { error } }) => (
          <>
            {field.value.map((photo, index) => (
              <div key={index} className="relative w-[120px] h-[150px]">
                <img
                  // @ts-ignore
                  src={URL.createObjectURL(photo)}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
                <CloseCircleFilled
                  className="absolute bottom-[-8px] right-[-8px] bg-gray-400 rounded-full text-gray-800 cursor-pointer text-xl"
                  onClick={() => {
                    const newPhotos = field.value.filter((_, i) => i !== index);
                    field.onChange(newPhotos);
                  }}
                />
              </div>
            ))}

            {field.value.length < 4 && (
              <Upload
                beforeUpload={(file) => {
                  field.onChange([...field.value, file]);
                  return false; // Prevent upload
                }}
                showUploadList={false}
              >
                <div className="w-[120px] h-[150px] border border-dashed border-gray-500 flex flex-col items-center justify-center rounded-lg cursor-pointer">
                  <PlusOutlined className="text-purple-500 text-3xl" />
                </div>
              </Upload>
            )}

            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  </div>
);

export default Step4;
