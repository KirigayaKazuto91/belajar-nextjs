"use client";
import React, { useState } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>Hello World {state}</h1>
      <button onClick={() => setState(state + 1)}>Click me</button>
      {children}
    </div>
  );
};

export default Template;
