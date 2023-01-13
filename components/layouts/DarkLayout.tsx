import { FC, PropsWithChildren } from "react";


export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  
  return (
    <div
      style={{
        backgroundColor: "rgba(100,100,100)",
        borderRadius: "5px",
        padding: "30px",
      }}
    >
      {children}
    </div>
  );
};
