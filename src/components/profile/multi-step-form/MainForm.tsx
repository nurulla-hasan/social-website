"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 992);
      setIsSmallScreen(width <= 580);
    };

    checkScreenSize(); // Initial check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const methods = useForm<FormValues>({
    // @ts-ignore
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

  const onSubmit = async (data: FormValues) => {
    const isValid = await methods.trigger();

    if (!isValid) {
      console.log("Form validation failed");
      return;
    }

    if (step === 12) {
      console.log("Form Data:", data);
      router.push("/find-an-activities");
    }
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

  // Define steps where the Skip button should be hidden
  const hideSkipButtonSteps = [0, 1, 2, 3, 5]; // Step1, Step2, Step3, Step4, Step6 (0-based index)

  return (
    <div className="w-full lg:w-[1170px] mx-auto px-4 relative">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* Stepper */}
          <div className="w-full mt-7 flex items-center justify-center">
            {isSmallScreen ? (
              <h2 className="text-xl font-normal mb-4">
                Step {step + 1} of {steps.length}
              </h2>
            ) : (
              <div className="w-full mt-7">
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-full h-[8px]  rounded-full ${
                        index < step
                          ? "bg-[#7DFF19]" // Previous steps in green
                          : index === step
                          ? "bg-[#7DFF19]" // Current step in green
                          : "bg-[#171717]" // Future steps in dark gray
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[760px] mx-auto mt-0 lg:mt-48">
            {/* @ts-ignore */}
            {React.createElement(steps[step], { control: methods.control })}
            <div className="w-full mt-7">
              {/* previous btn */}
              <div
                style={{
                  width: "760px",
                  fontSize: "17px",
                  marginTop: "10px",
                  background: "none",
                  border: "none",
                  color: "#fff",
                  margin: "0 auto",
                  position: "absolute",
                  top: "15%",
                  left: "0",
                }}
              >
                {step > 0 && (
                  <Button
                    onClick={prevStep}
                    type="default"
                    style={{
                      height: "50px",
                      width: "50px",
                      fontSize: "25px",
                      background: "none",
                      border: "none",
                      color: "#fff",
                    }}
                  >
                    <ArrowLeftOutlined />
                  </Button>
                )}
              </div>
              {step < steps.length - 1 && (
                <Button
                  onClick={nextStep}
                  type="primary"
                  style={{ height: "48px", width: "100%", fontSize: "17px" }}
                >
                  Next
                </Button>
              )}
              {/* Conditionally render the Skip button */}
              {step < steps.length - 1 &&
                !hideSkipButtonSteps.includes(step) && (
                  <Button
                    onClick={skipStep}
                    type="default"
                    style={{
                      height: "48px",
                      width: "100%",
                      fontSize: "17px",
                      marginTop: "10px",
                      background: "none",
                      border: "none",
                      color: "#fff",
                    }}
                  >
                    Skip
                  </Button>
                )}
              {step === steps.length - 1 && (
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ height: "48px", width: "100%", fontSize: "17px" }}
                >
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
