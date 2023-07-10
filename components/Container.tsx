"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="max-w-[90rem] px-4 sm:px-2 md:px-10 lg:px-20 mx-auto">
      {children}
    </div>
  );
}

export default Container;
