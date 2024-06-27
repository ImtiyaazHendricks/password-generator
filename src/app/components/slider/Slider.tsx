import * as Slider from "@radix-ui/react-slider";
import React from "react";

interface SliderProps {
  value: number[];
  onChange: (value: number[]) => void;
}

export function SliderComponent({ value, onChange }: SliderProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-base text-almost-white font-bold font-mono-italic md:text-lg">
          Character Length
        </span>
        <strong className="text-2xl text-neon-green font-bold font-mono-italic md:text-[32px]">
          {value[0]}
        </strong>
      </div>

      <Slider.Root
        className="relative flex items-center w-full h-[20px] select-none	touch-none"
        value={value}
        onValueChange={onChange}
        max={20}
        min={0}
        step={1}
      >
        <Slider.Track className="relative bg-very-dark-grey flex-1 h-2">
          <Slider.Range className="absolute h-2 bg-neon-green" />
        </Slider.Track>
        <Slider.Thumb className="block w-7 h-7 bg-white rounded-full outline-none hover:bg-almost-black hover:border-2 hover:border-neon-green" />
      </Slider.Root>
    </div>
  );
}
