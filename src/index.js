import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),//success callback se muestra cada vez que la funcion determina la posición del usuario
        (err) => console.log(err)//failure callback ya que se muestra cada vez que la funcion no logre determinar la posición
    );
    return <div>Latitud: </div>

};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);