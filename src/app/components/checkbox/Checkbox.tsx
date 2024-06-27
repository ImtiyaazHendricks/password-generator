"use client";
import { CheckIcon } from "../icons";

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  id: string;
  label: string;
}

export function Checkbox({
  checked,
  onCheckedChange,
  id,
  label,
}: CheckboxProps) {
  const handleChange = () => {
    onCheckedChange(!checked);
  };

  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
          className={`
            h-5 w-5 appearance-none 
            ${checked ? "bg-neon-green" : "bg-transparent"} 
            border-2 ${checked ? "border-neon-green" : "border-almost-white"}
            flex items-center justify-center 
          `}
        />
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <CheckIcon />
          </div>
        )}
      </div>
      <label
        htmlFor={id}
        className="text-base text-almost-white font-bold font-mono-italic md:text-lg"
      >
        {label}
      </label>
    </div>
  );
}
