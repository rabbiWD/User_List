import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border rounded p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";