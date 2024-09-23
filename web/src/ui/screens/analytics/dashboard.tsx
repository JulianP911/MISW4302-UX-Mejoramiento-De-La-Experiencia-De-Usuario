import { Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Dashboard = () => {
    const handleLogOutClick = () => {};
    const data = {
        labels: [],
        datasets: [
          {
            label: 'Evento X',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-2 d-flex flex-column align-items-center justify-content-between" style={{background: '#CDC5ED', height: '100vh', borderRight: '1px solid #090913'}}>
                    <div>
                        <div>
                            <img src="src/assets/logo.svg" alt="Logo" style={{width: '132px', height: '132px', justifyContent: 'center', paddingTop: '16px' }} />
                        </div>
                        <div style={{height: '64px'}}></div>
                        <div>
                            <Typography style={{fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif'}}>CREAR EVENTO</Typography>
                            <div style={{height: '32px'}}></div>
                            <Typography style={{fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif'}}>ESTADÍSTICAS</Typography>
                        </div>
                    </div>
                    <div style={{paddingBottom: '41px'}}>
                        <button type="button" onClick={handleLogOutClick} className="btn" style={{background: '#566D92', width: '160px', height: '36px', color: '#FFFFFF', borderRadius: '4px'}}>Salir</button>
                    </div>
                </div>
                <div className="col-10" style={{paddingLeft: '250px', paddingRight: '250px'}}>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <Typography style={{paddingTop: '60px', fontSize: '26px', fontFamily: 'Inter, sans-serif'}}>Estadísticas</Typography>
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-6" style={{ width: '300px', height: '300px' }}>
                                    <Pie data={data}/>
                                    <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#546D92', textAlign: 'center'}}>Distribucción de alarmas<br/>por tipo de evento</Typography>
                                </div>
                                <div className="col-6 d-flex flex-column justify-content-center" style={{ width: '300px', height: '300px' }}>
                                    <Pie data={data}/>
                                    <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#546D92', textAlign: 'center'}}>Efectividad de alarmas<br/>por cumplimiento a tiempo</Typography>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Typography style={{paddingTop: '30px', fontSize: '26px', fontFamily: 'Inter, sans-serif'}}>Datos Relevantes</Typography>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div style={{paddingTop: '14px'}}>
                                                <div className="d-flex justify-content-between">
                                                    <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Número de alarmas</Typography>
                                                    <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>10 Alarmas</Typography>
                                                </div>
                                                <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Este indicador presenta cuantas<br/>alarmas tienes activas</Typography>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div style={{paddingTop: '14px'}}>
                                                <div className="d-flex justify-content-between">
                                                    <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Porcentaje de efectividad</Typography>
                                                    <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>82%</Typography>
                                                </div>
                                                <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Este porcentaje presenta si has<br/>atendido a las diferentes alarmas</Typography>
                                            </div>
                                        </li>
                                        <li className="list-group-item"></li>
                                    </ul>
                                </div>
                                <div className="col-6" style={{}}>
                                <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div style={{paddingTop: '14px'}}>
                                                <div className="d-flex justify-content-between">
                                                    <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Porcentaje de productividad</Typography>
                                                    <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>95%</Typography>
                                                </div>
                                                <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Este porcentaje presenta mejora<br/>en realizar las actividades</Typography>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div style={{paddingTop: '14px'}}>
                                                <div className="d-flex justify-content-between">
                                                    <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Número de eventos</Typography>
                                                    <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>5 Eventos</Typography>
                                                </div>
                                                <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Este indicador presenta cuantos<br/>eventos tienes activos</Typography>
                                            </div>
                                        </li>
                                        <li className="list-group-item"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};