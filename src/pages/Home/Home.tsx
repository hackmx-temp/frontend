import React from "react";
import { Sponsors } from "../../components/Sponsors";
import Button from '@mui/material/Button';
import Header from "../../componentes/Header";
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
      <div style={{ position: 'relative', textAlign: 'center' }}>
  <img src="/HACK2023INICIO.png" alt="Tu imagen" className="imagen-home" style={{ width: '100%' }} />
  <Link to="/registro"> {/* Agrega el enlace aquí */}
    <Button variant="contained" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', width: '18%', height: '9%', textTransform: 'uppercase', borderRadius: '26px', color: '#FFFFFF', fontSize: '2vw' }}>
      Registrate
    </Button>
  </Link>
</div>
    </div>



      <div>
        <p>Section 2</p>
      </div>
      <div>
        <p>Section 4</p>
      </div>
      <Sponsors />
    </div>
  );
};

export default Home;
