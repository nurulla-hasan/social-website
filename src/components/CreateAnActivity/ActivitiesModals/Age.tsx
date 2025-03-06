"use client";

import { Select, Slider } from "antd";
import { useState } from "react";

const ageRange = [
  "0-3",
  "4-7",
  "8-11",
  "12-15",
  "16-19",
  "20-23",
  "24-27",
  "28-31",
  "32-35",
  "36-39",
  "40-43",
  "44-47",
  "48-51",
  "52-55",
  "56-59",
  "60-63",
  "64-67",
  "68-71",
  "72-75",
  "76-79",
  "80-83",
  "84-87",
  "88-91",
  "92-95",
  "96-99",
];

// Function to find the correct age range based on input age
const getAgeRangeIndex = (age: number) => {
  return ageRange.findIndex((range) => {
    const [min, max] = range.split("-").map(Number);
    return age >= min && age <= max;
  });
};

const AgeSlider = () => {
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Handle age input from the user
  const handleAgeInput = (value: string) => {
    const age = Number(value);
    if (!isNaN(age) && age >= 0 && age <= 100) {
      const index = getAgeRangeIndex(age);
      if (index !== -1) {
        setSelectedIndex(index);
        setSelectedAge(age);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      {/* Input for user to enter their age */}
      <Select
        showSearch
        placeholder="Enter Age"
        onChange={handleAgeInput}
        className="w-48"
        options={Array.from({ length: 101 }, (_, i) => ({
          value: i,
          label: i,
        }))}
      />

      {/* Slider Component */}
      <Slider
        min={0}
        max={ageRange.length - 1}
        step={1}
        marks={ageRange.reduce((acc, range, index) => {
          acc[index] = range;
          return acc;
        }, {} as Record<number, string>)}
        value={selectedIndex}
        onChange={setSelectedIndex}
        className="w-full"
      />

      {/* Display Selected Age Range */}
      <div className="text-lg font-semibold text-gray-800">
        Selected Age Range:{" "}
        <span className="text-red-600">{ageRange[selectedIndex]}</span>
      </div>
    </div>
  );
};

export default AgeSlider;
