import { Typography } from "@mui/material";

export const EventWithAlarms = () => {
    const handleLogOutClick = () => {};
    const handleFilterClick = () => {};
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
                <div className="col-10" style={{paddingLeft: '300px', paddingRight: '300px'}}>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <Typography style={{paddingTop: '60px', fontSize: '26px', fontFamily: 'Inter, sans-serif'}}>17 de Octubre</Typography>
                            </div>
                            <div className="d-flex justify-content-end" style={{paddingTop: '40px', paddingBottom: '40px'}}>
                                <button type="button" onClick={handleFilterClick} className="btn" style={{background: '#566D92', width: '92px', height: '36px', color: '#FFFFFF', borderRadius: '4px',}}>Filtrar</button>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div>
                                        <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Reunión seguimiento Tech</Typography>
                                        <div className="d-flex justify-content-between" style={{paddingBottom: '14px'}}>
                                            <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Tener el insumo del reporte</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>09:15 a.m.</Typography>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div style={{paddingTop: '14px'}}>
                                        <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Trabajo colectivo Design</Typography>
                                        <div className="d-flex justify-content-between" style={{paddingBottom: '14px'}}>
                                            <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Documento de consideraciones</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>10:30 a.m.</Typography>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div style={{paddingTop: '14px'}}>
                                        <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Reunión seguimiento Sentry</Typography>
                                        <div className="d-flex justify-content-between" style={{paddingBottom: '14px'}}>
                                            <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Enlace plataforma de bugs</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>12:45 p.m.</Typography>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div style={{paddingTop: '14px'}}>
                                        <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Trabajo individual Programación</Typography>
                                        <div className="d-flex justify-content-between" style={{paddingBottom: '14px'}}>
                                            <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Herramienta visual studio code</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>14:20 p.m.</Typography>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div style={{paddingTop: '14px'}}>
                                        <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Reunión seguimiento CEO</Typography>
                                        <div className="d-flex justify-content-between" style={{paddingBottom: '14px'}}>
                                            <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Tener el informe de ganancias y perdidas</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>18:00 p.m.</Typography>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div style={{paddingTop: '14px'}}>
                                        <Typography style={{fontSize: '16px', fontFamily: 'Inter, sans-serif', color: '#090C10'}}>Trabajo colectivo Engineer</Typography>
                                        <div className="d-flex justify-content-between" style={{paddingBottom: '14px'}}>
                                            <Typography style={{fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6D86AB'}}>Herramienta de la nube para ML</Typography>
                                            <Typography style={{fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#3E2A88'}}>19:10 p.m.</Typography>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};