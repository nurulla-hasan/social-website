"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "./Steps/Step1";
import Step10 from "./Steps/Step10";
import Step11 from "./Steps/Step11";
import Step12 from "./Steps/Step12";
import Step13 from "./Steps/Step13";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";
import Step9 from "./Steps/Step9";
import { validationSchemas } from "./multipleFormSchema";

interface FormValues {
  userName: string;
  birthDay: string;
  gender: string;
  addPhotos: string[];
  distance?: string;
  schoolName: string;
  graduationYear?: string;
  height?: string;
  lookingFor: string[];
  relationShip: string[];
  relationShipOther?: string;
  skinColor: string;
  interest?: {
    selfCare: string[];
    sports: string[];
    pets: string[];
    music: string[];
    traveling: string[];
  };
  hairColor: string;
  hairColorOther?: string;
  profession: string;
}

const steps = [
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
  Step11,
  Step12,
  Step13,
];

const MainForm = () => {
  const [step, setStep] = useState<number>(0);

  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchemas[step]),
    mode: "onChange",
    defaultValues: {
      userName: "",
      birthDay: "",
      gender: "",
      addPhotos: [],
      distance: "",
      schoolName: "",
      graduationYear: "",
      height: "",
      lookingFor: [],
      relationShip: [],
      relationShipOther: "",
      skinColor: "",
      interest: {
        selfCare: [],
        sports: [],
        pets: [],
        music: [],
        traveling: [],
      },
      hairColor: "",
      hairColorOther: "",
      profession: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  // Next step
  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  // Previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // Skip step
  const skipStep = async () => {
    const isValid = await methods.trigger();
    if (isValid || step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full lg:w-[1170px] mx-auto">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <h2 className="text-xl font-bold mb-4 mt-7">
            Step {step + 1} of {steps.length}
          </h2>

          <div className="w-full lg:w-[960px] mx-auto mt-24">
            {React.createElement(steps[step], { control: methods.control })}

            <div className="flex justify-between mt-4">
              {step > 0 && <Button onClick={prevStep}>Previous</Button>}
              {step < steps.length - 1 && (
                <Button onClick={nextStep}>Next</Button>
              )}
              {step < steps.length - 1 && (
                <Button onClick={skipStep}>Skip</Button>
              )}
              {step === steps.length - 1 && (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MainForm;
