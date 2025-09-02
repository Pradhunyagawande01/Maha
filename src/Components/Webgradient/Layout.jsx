 import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative  bg-gradient-to-b from-[#0d1117] via-[#1a1a2e] to-[#000000] overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
