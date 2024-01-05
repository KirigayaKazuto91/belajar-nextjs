import React, { Children } from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="fixed left-0 top-250 z-10 h-screen w-60 bg-violet-500">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
