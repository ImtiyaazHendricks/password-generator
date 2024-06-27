import { Level } from "../../page";

interface BarProps {
  level: Level;
}

export function Bars({ level }: BarProps) {
  const arrayFromLevel = Array.from({ length: 4 });

  const levelClasses = (index: number) => {
    if (level == "0") {
      return "bg-transparent border-almost-white";
    }
    if (index + 1 <= Number(level)) {
      switch (level) {
        case "1":
          return "bg-red border-red";
        case "2":
          return "bg-orange border-orange";
        case "3":
          return "bg-yellow border-yellow";
        case "4":
          return "bg-neon-green border-neon-green";
        default:
          return "bg-transparent border-almost-white";
      }
    }
    return "bg-transparent border-almost-white";
  };

  return (
    <div className="flex items-center gap-2">
      {arrayFromLevel.map((_, index) => (
        <div
          key={index}
          data-testid="level-bar"
          className={`w-[10px] h-[28px] border-2 ${levelClasses(index)}`}
        />
      ))}
    </div>
  );
}

interface StrengthMeasurerProps {
  level: Level;
}

export function StrengthIndicatior({ level = "2" }: StrengthMeasurerProps) {
  const levels = {
    "0": "",
    "1": "Too Weak!",
    "2": "Weak",
    "3": "Medium",
    "4": "Strong",
  };

  return (
    <div className="mt-8 w-full py-3 px-4 bg-very-dark-grey flex items-center justify-between md:py-5 md:px-8">
      <span className="uppercase text-base text-grey font-bold font-mono md:text-lg">
        Strength
      </span>
      <div className="flex items-center gap-4">
        <strong className="uppercase text-lg text-almost-white font-bold font-mono-bold md:text-2xl">
          {levels[level]}
        </strong>
        <Bars level={level} />
      </div>
    </div>
  );
}
