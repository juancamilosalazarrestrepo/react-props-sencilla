import { Component } from 'react';
import PropTypes from 'prop-types';
import Pelicula from './Pelicula.jsx';





class Gif extends Component {
   constructor(props){
       super(props);
       this.state = {
           gif:""
       }
   }

  apiCall(url,consecuencia){
   fetch(url)
    .then(response => response.json())
    .then(data=> consecuencia(data))
    .catch(error => console.log(error))
  }

componentDidMount(){
    console.log("me monte");
     this.traerGifNuevo();
}

traerGifNuevo(){
    this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=T4eWU5qLlekZiGmP5AVHjm5qNOCd6bu9&tag=&rating=g",this.mostrarGif)


}
mostrarGif =(data)=>{
    
    this.setState({
        gif: data.data.images.original.url
    })
    
}

componentDidUpdate(){
    console.log("me actualize")
    alert("tengo un gif nuevo");

}
    render() {
        console.log("estoy renderizando");
        let contenido;

        if(this.state.gif == ""){
            contenido=<p>Cargando...</p>
        }else{
            contenido = <img src={this.state.gif}/>;
        }
       return (
        <div>
            
          {contenido}
          <button onClick={() => this.traerGifNuevo()}>random Gif</button>
        </div>
    );

}
}



export default Gif;