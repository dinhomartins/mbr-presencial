import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "regular" | "large" | "maior";
};

function Container({ children, size = "regular", className = "" }: Props) {
  const styles = {
    regular:
      "max-w-[88%] md:max-w-[700px] lg:max-w-[978px] xl:max-w-[1240px] 2xl:max-w-[1420px]",
    large: "max-w-[320px] md:max-w-[700px] lg:max-w-[978px] xl:max-w-[1800px]",
    maior:
      "max-w-[85%] md:max-w-[700px] lg:max-w-[1020px] xl:max-w-[1200px] 2xl:max-w-[1500px]",
  };
  return (
    <div className={`mx-auto w-full ${styles[size]} ${className}`}>
      {children}
    </div>
  );
}
export default Container;
