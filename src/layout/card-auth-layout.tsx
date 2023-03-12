import React from "react";
import AuthImage from "../assets/images/sign-up.png";

interface Props {
  children: React.ReactNode;
}

export default function CardAuthLayout({ children }: Props) {
  return (
    <div>
      <div className="flex relative h-screen w-screen bg-other-light-blue">
        <div className="w-[39.25rem] px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-8 rounded-15xl bg-white shadow-Shadow / 20%">
          {children}
        </div>
      </div>
    </div>
  );
}
