import React from "react";
import img from '../../assets/img/peliculas.jpg'

export default function Home() {
    const estiloImg = {
      width: '100%'
  
  };
  const estilo = {
    marginTop: '10rem'

};
  return (
    <div className="container"> 
      <div className="row">
        <div className="col-12">
          <h1 className="text-center text-white " style={estilo}>Bienvenido a Peliculas</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="text-center text-white">¿Qué es Peliculas?</h2>
        </div>
        <p className="text-white"><strong>Películas</strong>, también llamado película, es un género cinematogr
            áfico que se caracteriza por la representación de sucesos en los que se
            combinan acción, drama, comedia, romance y terror. Es un arte que
            presenta historias reales o ficticias mediante la representación de
            imágenes en movimiento, con o sin sonido.
        </p>   
      </div>
      <div>
        <img src={img} alt="img" className="" style={estiloImg}/>
      </div>
    </div>


  );
}
