import React from "react";
import { RightBar } from "./RightBar";
import { LeftBar } from "./LeftBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between w-full">
        <LeftBar />
        {children}
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
