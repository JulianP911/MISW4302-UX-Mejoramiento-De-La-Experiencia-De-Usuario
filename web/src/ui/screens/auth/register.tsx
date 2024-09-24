import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RegisterView() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoaing, setIsLoading] = useState(false);

  function handleNavigate() {
    setIsLoading(() => true);
    setTimeout(() => {
      navigate("/start");
    }, 2000);
  }

  return (
    <div className="flex flex-col min-w-full justify-center items-center">
      <div className="flex flex-col  max-w-[490px]">
        <Typography textAlign={"left"} variant="h6" pb="16px">
          Ingresa tu información
        </Typography>

        <TextField
          type="email"
          sx={{
            minWidth: "480px",
            pb: "16px",
          }}
          label="Nombre de usuario"
        />
        <TextField
          sx={{
            minWidth: "480px",
            pb: "16px",
          }}
          label="Correo"
        />
        <FormControl
          sx={{
            minWidth: "480px",
            pb: "16px",
          }}
        >
          <InputLabel htmlFor="password-ux">Contraseña</InputLabel>
          <OutlinedInput
            id="password-ux"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Contraseña"
          />
        </FormControl>
        <Button
          variant="contained"
          disabled={isLoaing}
          endIcon={isLoaing && <CircularProgress size={20} />}
          sx={{
            minWidth: "480px",
          }}
          onClick={handleNavigate}
        >
          Registrarse
        </Button>
      </div>
    </div>
  );
}
