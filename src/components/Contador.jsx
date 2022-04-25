
import { Component } from 'react';
import PropTypes from 'prop-types';
import Pelicula from './Pelicula.jsx';





class Contador extends Component {
   constructor(props){
       super(props);
       this.state = {
           numero: props.inicial
       }
   }

   incrementar(){
       this.setState({numero: this.state.numero +1})
   }
   decrementar(){
    this.setState({numero: this.state.numero -1})
}

componentDidMount(){
    console.log("me monte")

}

componentDidUpdate(){
    console.log("me actualize")
}
    render() {
        console.log("estoy renderizando");
       return (
        <div>
            <p>Soy el numero {this.state.numero}</p>
            <button onClick={() => this.incrementar()}>Incrementar</button>
            <button onClick={() => this.decrementar()}>decrementar</button>
          
        </div>
    );

}
}



export default Contador;