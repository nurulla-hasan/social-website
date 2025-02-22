import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step4Props {
  control: Control<FormValues>;
}

const Step4 = ({ control }: Step4Props) => (
  <div>
    <Controller
      name="addPhotos"
      control={control}
      rules={{ required: "Photos are required", max: 4 }}
      render={({ field, fieldState: { error } }) => (
        <>
          <Upload
            beforeUpload={(file) => {
              const newPhotos = [...field.value, file.name];
              field.onChange(newPhotos);
              return false; // Prevent upload
            }}
            onRemove={(file) => {
              const newPhotos = field.value.filter(
                (photo) => photo !== file.name
              );
              field.onChange(newPhotos);
            }}
            fileList={field.value.map((photo) => ({ uid: photo, name: photo }))}
          >
            <Button icon={<UploadOutlined />}>Upload Photos (Max 4)</Button>
          </Upload>
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </>
      )}
    />
  </div>
);

export default Step4;
