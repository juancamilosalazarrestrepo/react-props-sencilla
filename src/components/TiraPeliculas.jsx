

import Pelicula from './Pelicula.jsx';

function TiraPeliculas() {
    return (
        <div>
            <Pelicula
                titulo="harry poter" rating="5.0" generos={["fantasia", "aventuras",]} />
            <Pelicula
                titulo="transformers " rating="3.0" generos={["sci-fi", "accion",]} />
            <Pelicula
                titulo="el origen" rating="4.0" generos={["Psicologico", "culto",]} />
            <Pelicula
                titulo="star wars" rating="4.5" generos={["espacio", "aventuras",]} />
            <Pelicula />
        </div>
    );

}



export default TiraPeliculas;