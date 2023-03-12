import React from "react";
import AuthImage from "../assets/images/sign-up.png";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div>
      <div className="flex relative w-screen">
        <div className="w-1/2 h-screen fixed">
          <img src={AuthImage} alt="" className="w-full h-full object-fit" />
        </div>
        <div className="w-1/2 px-40 absolute right-0 top-0 py-8">{children}</div>
      </div>
    </div>
  );
}
