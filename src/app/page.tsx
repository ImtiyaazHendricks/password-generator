"use client";
import { useState } from "react";
import { GeneratorContent } from "./components";
import { PasswordContent } from "./components/passwordContent/PasswordContent";

export type Level = "0" | "1" | "2" | "3" | "4";

export type GenerateParams = {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

export default function Home() {
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState<Level>("3");

  const generatePassword = (params: GenerateParams) => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    if (params.includeUppercase) allChars += uppercaseChars;
    if (params.includeLowercase) allChars += lowercaseChars;
    if (params.includeNumbers) allChars += numberChars;
    if (params.includeSymbols) allChars += symbolChars;

    if (allChars === "") {
      setPassword("");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < params.length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  function calculatePoints(params: GenerateParams) {
    let points = 0;

    if (params.includeUppercase) points++;
    if (params.includeLowercase) points++;
    if (params.includeNumbers) points++;
    if (params.includeSymbols) points++;

    if (params.length >= 4 && params.length <= 6) {
      points += 1;
    }

    if (params.length >= 7 && params.length <= 9) {
      points += 2;
    }

    if (params.length >= 10 && params.length <= 13) {
      points += 3;
    }

    if (params.length >= 14 && params.length <= 20) {
      points += 4;
    }

    return points;
  }

  function handleGenerate(params: GenerateParams) {
    if (
      params.length === 0 &&
      !params.includeUppercase &&
      !params.includeLowercase &&
      !params.includeNumbers &&
      !params.includeSymbols
    ) {
      setLevel("0");
      setPassword("");
      return;
    }

    const points = calculatePoints(params);

    if (points <= 2) {
      setLevel("1");
    } else if (points <= 5) {
      setLevel("2");
    } else if (points <= 7) {
      setLevel("3");
    } else {
      setLevel("4");
    }

    generatePassword(params);
  }

  return (
    <div className="w-full h-screen pt-16 bg-almost-black">
      <main className="max-w-[743px] px-4 mx-auto md:w-[640px]">
        <h1 className="text-base font-bold font-mono text-grey text-center md:text-2xl">
          Password generator
        </h1>
        <PasswordContent password={password} />
        <GeneratorContent onGenerate={handleGenerate} level={level} />
      </main>
    </div>
  );
}
