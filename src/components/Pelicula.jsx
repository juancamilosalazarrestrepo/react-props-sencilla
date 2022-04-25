
import PropTypes from 'prop-types'
function Pelicula(props) {

    console.log(props.generos);

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>Rating: {props.rating}</p>
            <ul>
                {props.generos.map((genero, i) => <li key={genero + i}>{genero}</li>)}
            </ul>
        </div>
    );

}



export default Pelicula;