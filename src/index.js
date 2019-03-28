import React from 'react';
import ReactDOM from 'react-dom';

const style = {color: 'crimson', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '50px', marginTop: '20px'};

class App extends React.Component{
    constructor(props){
        //super es una funcion que referencia a la funcion constructor del padre
        super(props);//React.Component tiene su propio constructor y con super nos aseguramos de que se llame la funcion de los padres sin interferir su funcionalidad
        //esta es la unica vez que se hace una declaracion directa
        this.state = { latitud: null, errorMessage: '' };//preconfigurar el valor  
    }
    /* state = {latitud: null, errorMessage: '' }; Version alternativa */
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            //llamamos setState para actualizar el state
            (position) => this.setState({latitud: position.coords.latitude}),//success callback se muestra cada vez que la funcion determina la posición del usuario
            (err) => this.setState({errorMessage: err.message})//failure callback ya que se muestra cada vez que la funcion no logre determinar la posición
        );
    }
    componentDidUpdate(){
        
    } 
    //React dice que debemos definir un render
    //en metodo render será llamado muchas veces, por lo tanto sacamos de el el detector de posición
    render(){
        if(this.state.errorMessage && !this.state.latitud){
            return <div style = {style} > Error: {this.state.errorMessage} </div>
                
        }else if(this.state.latitud && !this.state.errorMessage){
            return <div style = {style}>Latitud: {this.state.latitud}</div>
        }else{
            return <div style = {style} >Cargando...</div>
        }
    }
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);