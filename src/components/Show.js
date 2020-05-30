import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Coment: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('coments').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          Coment: doc.data(),
          key: doc.id,
          isLoading: false
        });        
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('coments').doc(id).delete().then(() => {
      alert("Registro Eliminado Exitosamente!!")      
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h2 style={{color: 'red'}}>APLICATIVO DE AGENDAMIENTO - VERSION DE PRUEBA - BETA 0.0.2</h2>
          <hr/>
          <h3 class="panel-title">
              DETALLE DEL AGENDAMIENTO
            </h3>
          <h4><Link to="/" class="btn btn-primary">Volver</Link></h4>
            <h3 class="panel-title">
              {this.state.Coment.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Fecha y Hora</dt>
              <dd>{this.state.Coment.description}</dd>
              <dt>Nombre del Cliente</dt>
              <dd>{this.state.Coment.author}</dd>
              <dt>Agenda Confirmada</dt>
              <dd><input type="checkbox" checked={this.state.Coment.confirmed} disabled /></dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Editar</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Eliminar</button>            
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
