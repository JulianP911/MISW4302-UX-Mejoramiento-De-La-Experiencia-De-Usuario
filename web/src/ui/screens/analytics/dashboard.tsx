import { Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Dashboard = () => {
    const dataGraph1 = {
        labels: [],
        datasets: [
          {
            label: 'Evento X',
            data: [12, 19, 3, 7],
            backgroundColor: [
              'rgba(206, 215, 227, 1)',
              'rgba(205, 197, 237, 1)',
              'rgba(174, 188, 208, 1)',
              'rgba(172, 158, 225, 1)',
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    const dataGraph2 = {
        labels: [],
        datasets: [
          {
            label: 'No / Cumplidas',
            data: [65, 35],
            backgroundColor: [
              'rgba(206, 215, 227, 1)',
              'rgba(205, 197, 237, 1)',
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    return (
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center">
                    <Typography style={{paddingTop: '60px', paddingBottom: '23px', fontSize: '26px', fontFamily: 'Inter, sans-serif'}}>Estadísticas</Typography>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-6" style={{ width: '300px', height: '300px' }}>
                        <Pie data={dataGraph1} style={{paddingBottom: '16px'}}/>
                        <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#546D92', textAlign: 'center'}}>Distribucción de alarmas<br/>por tipo de evento</Typography>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center" style={{ width: '300px', height: '300px' }}>
                        <Pie data={dataGraph2} style={{paddingBottom: '16px'}}/>
                        <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#546D92', textAlign: 'center'}}>Efectividad de alarmas<br/>por cumplimiento a tiempo</Typography>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Typography style={{paddingTop: '30px', fontSize: '26px', fontFamily: 'Inter, sans-serif'}}>Datos Relevantes</Typography>
                </div>
                <div className="row" style={{paddingTop: '45px'}}>
                    <div className="col-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex flex-row" style={{ width: '100%'}}>
                                    <div style={{paddingTop: '25px', paddingRight: '16px'}}>
                                        <img src="src/assets/Reloj.svg" alt="Progress" style={{width: '32px', height: '32px'}}/>
                                    </div>
                                    <div style={{paddingTop: '14px', width: '100%'}}>
                                        <div className="d-flex justify-content-between">
                                            <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Número de alarmas</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>10 Alarmas</Typography>
                                        </div>
                                        <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Este indicador presenta cuantas<br/>alarmas tienes activas</Typography>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row">
                                    <div style={{paddingTop: '25px', paddingRight: '16px'}}>
                                                <img src="src/assets/Porcentaje.svg" alt="Progress" style={{width: '32px', height: '32px'}}/>
                                    </div>
                                    <div style={{paddingTop: '14px', width: '100%'}}>
                                        <div className="d-flex justify-content-between">
                                            <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Porcentaje de efectividad</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>82%</Typography>
                                        </div>
                                        <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Este porcentaje presenta si has<br/>atendido a las diferentes alarmas</Typography>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item"></li>
                        </ul>
                    </div>
                    <div className="col-6" style={{}}>
                    <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex flex-row">
                                    <div style={{paddingTop: '25px', paddingRight: '16px'}}>
                                        <img src="src/assets/Usuarios.svg" alt="Progress" style={{width: '32px', height: '32px'}}/>
                                    </div>
                                    <div style={{paddingTop: '14px', width: '100%'}}>
                                        <div className="d-flex justify-content-between">
                                            <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Porcentaje de productividad</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>95%</Typography>
                                        </div>
                                        <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Este porcentaje presenta mejora<br/>en realizar las actividades</Typography>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row ">
                                    <div style={{paddingTop: '25px', paddingRight: '16px'}}>
                                            <img src="src/assets/Copa.svg" alt="Progress" style={{width: '32px', height: '32px'}}/>
                                    </div>
                                    <div style={{paddingTop: '14px', width: '100%'}}>
                                        <div className="d-flex justify-content-between">
                                            <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Número de eventos</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>5 Eventos</Typography>
                                        </div>
                                        <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Este indicador presenta cuantos<br/>eventos tienes activos</Typography>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};