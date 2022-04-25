
import { Component } from 'react';
import Pelicula from './Pelicula.jsx';


class TiraPeliculas extends Component {

    lanzarAlerta(){
alert("Me clickeaste!!!");
    }

    cambiarAmarillo(){
        document.querySelector("body").style.backgroundColor="Yellow";

    }

    cambiarRosa(){
        document.querySelector("body").style.backgroundColor="Pink";
    }

   render() {
       return (
        <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarRosa}>
            <Pelicula
                titulo="harry poter" rating={5.0} generos={["fantasia", "aventuras"]} />
            <Pelicula
                titulo="transformers " rating={3.0} generos={["sci-fi", "accion"]} />
            <Pelicula
                titulo="el origen" rating={4.5} generos={["Psicologico", "culto"]} />
            <Pelicula
                titulo="star wars" rating={4.5}  />
          
        </div>
    );

}
}



export default TiraPeliculas;