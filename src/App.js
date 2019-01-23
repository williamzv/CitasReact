import React, { Component } from 'react';
import Agregarcita from './Components/Agregarcita';
import Header from './Components/Header';
import ListaCitas from './Components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  };

  componentDidMount() {
    const citas = JSON.parse(localStorage.getItem('citas'));
    if (citas) {
      this.setState({citas});
    }
  }
  
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearCitaApp = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita]; // generamos una copia de citas y le agregamos la nuevaCita

    this.setState({citas}); // Agregamos al State
  };

  borrarCitaApp = (id) => {
    // Leer el State
    const citasActuales = [...this.state.citas];
    // Borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    // Actualizar el state
    this.setState({citas});
  }

  render() {
    return (
      <div className="App container">
        <Header titulo={'Administrador de Pacientes de Veterinaria'} />
        <div className="row">
          <div className="col-md-6">
            <Agregarcita crearCita={this.crearCitaApp} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} borrarCita={this.borrarCitaApp} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
