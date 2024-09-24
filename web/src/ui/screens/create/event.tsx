import { Typography } from "@mui/material";
import { useLottie } from "lottie-react";
import Camara from "../../../lotties/camara.json";
import Microfono from "../../../lotties/microfono.json";

export const CreateEvent = () => {
    const options1 = {
        animationData: Camara,
        loop: true
    };
    const options2 = {
        animationData: Microfono,
        loop: true
    };
    const { View: camera } = useLottie(options1);
    const { View: microfono } = useLottie(options2);

    return (
        <div className="row">
        <div className="col-12">
            <div className="d-flex justify-content-center" style={{paddingBottom: '36px'}}>
                <Typography
                    style={{
                    paddingTop: "60px",
                    fontSize: "26px",
                    fontFamily: "Inter, sans-serif",
                    }}
                >
                    Crear evento con alarma mediante:
                </Typography>
            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center" style={{background: '#EFF2F6', border: '1px solid #090C10', borderRadius: '8px', width: '500px'}}>
                    <div style={{width: '153px', height: '139px', paddingTop: '24px'}}>
                        { microfono }
                    </div>
                    <Typography
                    style={{
                    fontSize: "20px",
                    fontFamily: "Inter, sans-serif",
                    textAlign: "center",
                    paddingTop: "32px",
                    paddingBottom: "20px"
                    }}
                    >
                        Comando de voz
                    </Typography>
                </div>
            </div>
            <div style={{paddingTop: '64px'}}></div>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center" style={{background: '#EFF2F6', border: '1px solid #090C10', borderRadius: '8px', width: '500px'}}>
                    <div style={{width: '153px', height: '139px', paddingTop: '24px'}}>
                        { camera }
                    </div>
                    <Typography
                    style={{
                    fontSize: "20px",
                    fontFamily: "Inter, sans-serif",
                    textAlign: "center",
                    paddingTop: "32px",
                    paddingBottom: "20px"
                    }}
                    >
                        Adjuntar imagen
                    </Typography>
                </div>
            </div>
            <div className="d-flex justify-content-center" style={{paddingTop: '36px'}}>
                <Typography
                    style={{
                    fontSize: "16px",
                    fontFamily: "Inter, sans-serif",
                    textAlign: "center",
                    }}
                >
                    Este proceso se realiza de forma automática<br/>mediante inteligencia artificial utilizando los<br/>servicios de Google
                </Typography>
            </div>
        </div>
        </div>
    );
};
