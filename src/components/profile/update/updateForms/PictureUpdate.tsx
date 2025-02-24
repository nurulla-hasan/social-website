import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  addPhotos: (File | string)[];
}

const PictureUpdate = () => {
  const defaultImageUrls = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400?text=Image+2",
    "https://placehold.co/600x400?text=Image+1",
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { addPhotos: defaultImageUrls },
  });

  const [previewImages, setPreviewImages] =
    useState<(File | string)[]>(defaultImageUrls);

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Photos:", data.addPhotos);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-17">
      <div className="flex gap-4 items-center justify-center flex-col">
        <Controller
          name="addPhotos"
          control={control}
          rules={{
            required: "At least one photo is required",
            validate: (files) =>
              files.length <= 4 ? true : "Max 4 photos allowed",
          }}
          render={({ field }) => (
            <>
              <div className="xl:flex gap-7 mt-4">
                {field.value.map((photo, index) => (
                  <div key={index} className="relative w-full h-[450px]">
                    <img
                      src={
                        typeof photo === "string"
                          ? photo
                          : URL.createObjectURL(photo)
                      }
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <CloseCircleFilled
                      className="absolute bottom-[-8px] right-[-8px] bg-gray-400 rounded-full text-gray-800 cursor-pointer text-xl"
                      onClick={() => {
                        const newPhotos = field.value.filter(
                          (_, i) => i !== index
                        );
                        setPreviewImages(newPhotos);
                        field.onChange(newPhotos);
                      }}
                    />
                  </div>
                ))}

                {field.value.length < 4 && (
                  <Upload
                    beforeUpload={(file) => {
                      const updatedPhotos = [...field.value, file];
                      setPreviewImages(updatedPhotos);
                      field.onChange(updatedPhotos);
                      return false; // Prevent upload
                    }}
                    showUploadList={false}
                  >
                    <div className="w-[350px] h-[450px] border border-dashed border-gray-500 flex flex-col items-center justify-center rounded-lg cursor-pointer">
                      <PlusOutlined className="text-purple-500 text-3xl" />
                    </div>
                  </Upload>
                )}
              </div>

              {errors.addPhotos && (
                <p className="text-red-500">{errors.addPhotos.message}</p>
              )}
            </>
          )}
        />
      </div>
    </form>
  );
};

export default PictureUpdate;
