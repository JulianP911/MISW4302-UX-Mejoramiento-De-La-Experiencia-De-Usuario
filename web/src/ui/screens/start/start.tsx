import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Start = () => {
  const nivgate = useNavigate();

  function handleCreateCalendar() {
    nivgate("/start/calendar");
  }

  return (
    <div className="flex flex-col max-w-[560px]">
      <div className="pb-16">
        <Typography variant="h4" textAlign={"center"}>
          ¿Cómo quieres empezar a organizar tu tiempo?
        </Typography>
      </div>
      <div className="flex flex-col">
        <div className="pb-8">
          <Typography variant="subtitle1" textAlign={"center"}>
            Te ofrecemos las siguientes opciones:
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <Button
            onClick={handleCreateCalendar}
            variant="contained"
            sx={{
              minWidth: "289px",
              maxWidth: "289px",
              mb: "24px",
            }}
          >
            Crear Calendario
          </Button>
          <Button
            color="secondary"
            variant="contained"
            sx={{
              minWidth: "289px",
              maxWidth: "289px",
              color: "white",
            }}
          >
            Vincular Calendario
          </Button>
        </div>
      </div>
    </div>
  );
};
