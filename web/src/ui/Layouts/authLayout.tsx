import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";

export function AuthLayout() {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#ffffff",
        opacity: 1,
        backgroundImage:
          "repeating-radial-gradient( circle at 0 0, transparent 0, #ffffff 10px ), repeating-linear-gradient( #CDC5ED55, #CDC5ED )",
      }}
    >
      <div className="w-1/2 flex">
        <motion.div
          className="w-full flex"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Outlet />
        </motion.div>
      </div>
      <div className="w-1/2 flex">
        <div className="flex min-w-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={logo} className="h-[408px] w-[370px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
