
import PropTypes from 'prop-types';
import "./Pelicula.css";

function Pelicula(props) {
    let listadoDeGeneros;

    console.log(props.generos);

    if(props.generos != null){
        listadoDeGeneros=
        <ul>
        {props.generos.map((genero, i) => <li key={genero + i}>{genero}</li>)}
    </ul>
    }else{
        listadoDeGeneros = "";
    }

    return (
        <div>
            <h2 className='titulo-pelicula'>{props.titulo}</h2>
            <p>Rating: {props.rating}</p>


           {listadoDeGeneros}
        </div>
    );

}


Pelicula.defaultProps = {
    rating: "Esta pelicula aun no fue puntuada",
    generos: null
}

Pelicula.propTypes = {
    rating: PropTypes.number,
    titulo: PropTypes.string
}


export default Pelicula;