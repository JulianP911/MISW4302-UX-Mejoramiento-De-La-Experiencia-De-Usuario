import { Typography } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

export function Calendar() {
  const navigate = useNavigate();

  const now = DateTime.now();

  const handleAccept = () => {
    navigate("/events-with-alarms");
  };

  // const handleCancel = () => {
  //   navigate(-1);
  // };

  return (
    <div className="max-w-[560px]">
      <Typography variant="h4" textAlign={"center"} pb={"34px"}>
        Selecciona una fecha y crea un evento inicial
      </Typography>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <StaticDatePicker
          defaultValue={now}
          minDate={now}
          onAccept={handleAccept}
          slots={{
            actionBar: undefined,
            toolbar: undefined,
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
