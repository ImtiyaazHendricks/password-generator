"use client";
import { CopyIcon } from "../icons";
import { useState } from "react";

interface PasswordContentProps {
  password: string;
}

export function PasswordContent({ password }: PasswordContentProps) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    if (!password) return;

    navigator.clipboard.writeText(password);
    setIsCopied(true);
  }

  return (
    <div className="mt-4 p-4 flex justify-between items-center bg-dark-grey md:mt-8 md:py-5 md:px-8">
      <input
        className="w-full bg-transparent outline-none text-2xl text-almost-white font-bold font-mono-bold placeholder:opacity-25 md:text-[32px]"
        disabled={true}
        placeholder="P4$5W0rD!"
        value={password}
        data-testid="password-content-input"
      />
      <div className="flex items-center gap-4">
        <span
          className={`text-lg text-neon-green uppercase font-bold font-mono ${
            isCopied ? "opacity-100" : "opacity-0"
          }`}
        >
          COPIED
        </span>
        <button
          onClick={handleCopy}
          type="button"
          className="cursor-pointer bg-transparent text-neon-green duration-150 hover:text-almost-white group"
          data-testid="password-box-copy-button"
        >
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}
