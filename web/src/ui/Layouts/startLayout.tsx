import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FooterWave } from "../components/footerWave";
import { useState } from "react";

export function StartLayout() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-between items-center h-24 px-11">
          <div>
            <img src={logo} className="max-h-24 max-w-24" />
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                minWidth: "160px",
              }}
            >
              Salir
            </Button>
          </div>
        </div>
        <div className="basis-full grow min-h-full h-full flex">
          <div className="flex flex-col items-center justify-center min-h-full min-w-full w-screen">
            <Outlet />
          </div>
        </div>
        <div className="max-h-[290px]">
          <FooterWave width={screenWidth} />
        </div>
      </div>
    </div>
  );
}
