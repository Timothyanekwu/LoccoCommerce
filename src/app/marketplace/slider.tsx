import * as React from "react";
import * as Slider from "@radix-ui/react-slider";

type SliderProps = {
  range: number[];
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function PriceRangeSlider({ range, setRange }: SliderProps) {
  return (
    <div className="w-full">
      {/* Slider */}
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5 mt-4"
        value={range}
        onValueChange={setRange}
        min={0}
        max={500}
        step={5}
      >
        {/* Track */}
        <Slider.Track className="bg-input relative grow rounded-full h-1">
          <Slider.Range className="absolute bg-black rounded-full h-full" />
        </Slider.Track>

        {/* Thumbs */}
        {range.map((_, i) => (
          <Slider.Thumb
            key={i}
            className="block w-4 h-4 bg-black rounded-full cursor-pointer"
          />
        ))}
      </Slider.Root>

      {/* Price values */}
      <div className="flex justify-between text-sm mt-3 font-medium">
        <span>N{range[0]}</span>
        <span>N{range[1]}</span>
      </div>
    </div>
  );
}
