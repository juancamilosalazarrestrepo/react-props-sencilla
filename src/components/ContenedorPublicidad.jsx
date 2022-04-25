



function ContenedorPublicidad(props) {
    return (
        <div>
         <p>----- Inicio de Espacion Publicitario---------</p>
           {props.children}
         <p>----- Fin de Espacion Publicitario---------</p>
        </div>
    );

}



export default ContenedorPublicidad;