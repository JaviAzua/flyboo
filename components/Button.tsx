"use client";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
       ${outline ? "bg-white" : "bg-mainGreen"}
       ${outline ? "border-black" : "bg-mainGreen"}
       ${outline ? "text-black" : "text-white"}
       ${small ? "py-1" : "py-3"}
       ${small ? "text-sm" : "text-md"}
       ${small ? "font-light" : "font-semibold"}
       ${small ? "border-[1px]" : "border-2"}
       `}
    >
      {label}
      {Icon && <Icon className="absolute left-4 top-3" size={18} />}
    </button>
  );
}

export default Button;
