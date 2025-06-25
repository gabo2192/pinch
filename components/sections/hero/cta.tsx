"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function CTA() {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validatePhone = (number: string) => {
    const phoneRegex = /^\+?[\d\s\-$$$$]{10,}$/;
    return phoneRegex.test(number);
  };

  console.log({ isValid });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(phone);
    if (!validatePhone(phone)) {
      setIsValid(false);
      return;
    }
  };
  console.log({ phone });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setIsValid(true); // reset validation state on change
    setIsValid(validatePhone(phone)); // validate on every keystroke
  };
  return (
    <div className="animate-fade-up">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in delay-400">
          <Input
            type="tel"
            placeholder="+1234567890"
            value={phone}
            onChange={handleChange}
            className={`flex-1 text-lg px-4 py-3 ${
              !isValid ? "border-red-500" : ""
            }`}
            required
          />

          <Button
            className="text-lg px-8 py-4 duration-300 ease-in-out transition delay-150 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
            type="submit"
            size="lg"
            asChild
          >
            <Link href="/">👉 Check My Early Access</Link>
          </Button>
        </div>
        {!isValid && (
          <p className="text-red-500 text-sm">
            Please enter a valid phone number
          </p>
        )}
      </form>
    </div>
  );
}
