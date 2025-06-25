"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function CTA() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(phone);
  };
  return (
    <div className="animate-fade-up">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 animate-fade-in delay-400"
      >
        <Input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1 text-lg px-4 py-3"
          required
        />
        <Button className="text-lg px-8 py-4 duration-300 ease-in-out transition delay-150 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"  type="submit" size="lg" asChild>
          <Link href="/">
            👉 Check My Early Access
          </Link>
        </Button>
      </form>
    </div>
  );
}
