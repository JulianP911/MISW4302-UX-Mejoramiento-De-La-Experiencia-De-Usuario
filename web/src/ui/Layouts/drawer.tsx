import { Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export function Drawer() {
    const navigate = useNavigate();
    function handleLogOutClick(): void {
      navigate("/");
    }
    function handleCreateEventClick(): void {
      navigate("/create-event");
    }
    function handleDashbaoardClick(): void {
      navigate("/dashboard");
    }

    return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-2 d-flex flex-column align-items-center justify-content-between"
          style={{
            background: "#CDC5ED",
            height: "100vh",
            borderRight: "1px solid #090913",
          }}
        >
          <div>
            <div>
              <img
                src="src/assets/logo.svg"
                alt="Logo"
                style={{
                  width: "132px",
                  height: "132px",
                  justifyContent: "center",
                  paddingTop: "16px",
                }}
              />
            </div>
            <div style={{ height: "64px" }}></div>
            <div>
              <a
              onClick={handleCreateEventClick}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  CREAR EVENTO
                </Typography>
              </a>
              <div style={{ height: "32px" }}></div>
              <a
              onClick={handleDashbaoardClick}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  ESTADÍSTICAS
                </Typography>
              </a>
            </div>
          </div>
          <div style={{ paddingBottom: "41px" }}>
            <button
              type="button"
              onClick={handleLogOutClick}
              className="btn"
              style={{
                background: "#566D92",
                width: "160px",
                height: "36px",
                color: "#FFFFFF",
                borderRadius: "4px",
              }}
            >
              Salir
            </button>
          </div>
        </div>
        <div
          className="col-10"
          style={{ paddingLeft: "250px", paddingRight: "250px" }}
        >
            <Outlet />
        </div>
      </div>
    </div>
  );
}