import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Edit extends Component {

  constructor(props) {
    const options = {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric", 
      hour12:"false"};
      
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
      description: new Date().toLocaleString("es-Co", options),
      author: '',
      confirmed: false,
      dateFormatDate: '',
      //startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('coments').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Coment = doc.data();
        this.setState({
          key: doc.id,
          title: Coment.title,
          description: Coment.description,
          author: Coment.author,
          confirmed: Coment.confirmed,
          dateFormatDate: Coment.dateFormatDate,
          //startDate: Date(Coment.description)
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  handleChange(date) {
    var options = {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric", 
      hour12:"false"};
    this.setState({        
    startDate: date,    
    description: date.toLocaleString("es-Co", options),
    dateFormatDate: date
    })
  }

  onChangeOnlyLetters = (e) => {      
    const state = this.state
    state[e.target.name] = e.target.value;
    state[e.target.name] = state[e.target.name].replace(/[^A-Za-zÀ-ÿ]/ig, ' ')
    this.setState(state);    
  }

  onChangeChecked = (e) => {    
    this.setState({
      confirmed: e.target.checked
    })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({Coment:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author, confirmed, dateFormatDate } = this.state;

    const updateRef = firebase.firestore().collection('coments').doc(this.state.key);
    updateRef.set({
      title,
      description,
      author,
      confirmed,
      dateFormatDate
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        author: '',
        confirmed: false,
        dateFormatDate: ''
      });
      //this.props.history.push("/show/"+this.props.match.params.id)
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
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
              EDITAR AGENDAMIENTO
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Volver</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="select-service">Tipo de Servicio</label>
                <div>
                <select name="title" id="select-service" value={this.state.title} onChange={this.onChange} required>
                <option value="" selected disabled hidden>Escoge un Servicio...</option>
                <option value="Servicio 1">Servicio 1</option>,
                <option value="Servicio 2">Servicio 2</option>,
                <option value="Servicio 3">Servicio 3</option>
                </select>
                </div>
              </div>
              <div class="form-group">
                <label for="description">Fecha y Hora</label>                
                <div>
                <DatePicker                    
                    selected={ this.state.startDate }
                    onChange={ this.handleChange }
                    showTimeSelect
                    locale="es"
                    timeFormat="h:mm aa"
                    name="startDate"
                    timeIntervals={15}
                    timeCaption="Hora"
                    dateFormat="d MMMM, yyyy h:mm aa"
                    className="form-control"
                    placeholderText={this.state.description}
                />
                </div>
              </div>
              <div class="form-group">                
                <label for="author">Nombre del Cliente</label>
                <input
                  type="text" 
                  class="form-control"
                  name="author" 
                  value={this.state.author} 
                  onChange={this.onChangeOnlyLetters} 
                  placeholder="Nombre del Cliente"               
                  required
                  />
              </div>
              <div class="form-group">
                <div>
                <label for="confirmed">Agenda Confirmada</label>
                  <div>
                  <input 
                    type="checkbox"
                    value={this.state.confirmed}
                    checked={this.state.confirmed} 
                    onChange={this.onChangeChecked} 
                  />
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-success">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
