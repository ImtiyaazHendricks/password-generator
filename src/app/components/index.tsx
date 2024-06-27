"use client";
import { useState } from "react";
import { ArrowIcon } from "./icons";
import { Checkbox } from "./checkbox/Checkbox";
import { SliderComponent } from "./slider/Slider";
import { StrengthIndicatior } from "./strengthIndicator/StrengthIndicator";
import { GenerateParams, Level } from "../page";

interface GeneratorProps {
  onGenerate: (params: GenerateParams) => void;
  level: Level;
}

export function GeneratorContent({ onGenerate, level }: GeneratorProps) {
  const [length, setLength] = useState([10]);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div className="mt-4 w-full p-4 bg-dark-grey">
      <SliderComponent value={length} onChange={setLength} />
      <div className="mt-8 flex flex-col items-start gap-4">
        <Checkbox
          id="include-uppercase"
          label="Include Uppercase Letters"
          checked={includeUppercase}
          onCheckedChange={setIncludeUppercase}
        />
        <Checkbox
          id="include-lowercase"
          label="Include Lowercase Letters"
          checked={includeLowercase}
          onCheckedChange={setIncludeLowercase}
        />
        <Checkbox
          id="include-numbers"
          label="Include Numbers"
          checked={includeNumbers}
          onCheckedChange={setIncludeNumbers}
        />
        <Checkbox
          id="include-symbols"
          label="Include Symbols"
          checked={includeSymbols}
          onCheckedChange={setIncludeSymbols}
        />
      </div>
      <StrengthIndicatior level={level} />
      <button
        className="
            mt-4 md:mt-8 w-full h-14 bg-neon-green
            uppercase text-base text-dark-grey font-bold font-mono md:text-lg
            flex items-center justify-center gap-4
            hover:bg-black hover:border-2 hover:border-neon-green hover:text-neon-green
            group
        "
        type="button"
        onClick={() =>
          onGenerate({
            length: length[0],
            includeLowercase,
            includeNumbers,
            includeSymbols,
            includeUppercase,
          })
        }
      >
        Generate
        <span className="hover:text-neon-green">
          <ArrowIcon />
        </span>
      </button>
    </div>
  );
}
