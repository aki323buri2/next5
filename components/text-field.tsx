"use client"
import { cn } from "@/lib/utils";
import { Input, InputProps } from "./ui/input";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import React, { Component, ReactNode } from "react";
import { Label } from "./ui/label";
import { FormLabel } from "./ui/form";

type Props = InputProps & {
  label: string
  className?: string 
  onReset: () => void
  addIcons?: ReactNode 
  inTheForm?: boolean
}
export default function TextField({
  id=Math.random().toString(), 
  label, 
  className, 
  value, 
  onChange,  
  onReset, 
  addIcons, 
  inTheForm = false, 
  ...other
}: Props) {
  const ref = React.useRef<HTMLInputElement>(null)
  const handleRest = () => {
    if (ref.current) {
      ref.current.value = ""
      onReset()
    }
    ref.current?.focus()
  }
  const LabelComponent = inTheForm ? FormLabel : Label 
  return (
    <div className={cn("relative", className)}>
      <Input
        id={id}
        className={cn("peer", className)}
        value={value}
        onChange={onChange}
        placeholder={" "}
        ref={ref}
        {...other}
      />
      <LabelComponent
        htmlFor={id}
        className={cn(
          "absolute left-1 -top-2 scale-75 px-1 bg-white",
          "peer-placeholder-shown:scale-100",
          "peer-placeholder-shown:left-2",
          "peer-placeholder-shown:top-3",
          "peer-focus:scale-75",
          "peer-focus:left-1",
          "peer-focus:-top-2",
          "transition-all"
        )}
      >
        {label}
      </LabelComponent>
      <div className="absolute top-0 right-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRest}
          className="transition-colors text-zinc-300 hover:text-zinc-500"
        >
          <X />
        </Button>
        {addIcons}
      </div>
    </div>
  )
}