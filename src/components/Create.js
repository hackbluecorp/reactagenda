import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import DatePicker, {registerLocale} from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

class Create extends Component {

  constructor (props) {
    const options = {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric", 
      hour12:"false"};
      
    super(props)
    this.ref = firebase.firestore().collection('coments');
    this.state = {
    title: '',
    description: new Date().toLocaleString("es-Co", options),
    author: '',
    confirmed: false ,
    dateFormatDate: '',
    startDate: new Date() 
    };
    this.handleChange = this.handleChange.bind(this);    
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
  
  onChange = (e) => {      
    const state = this.state
    state[e.target.name] = e.target.value;    
    this.setState(state);    
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author, confirmed, dateFormatDate } = this.state;
    
    this.ref.add({
      title,
      description,
      author,
      confirmed,
      dateFormatDate
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: '',
        confirmed: false,
        dateFormatDate: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  
  render() {
    const { title, description, author, confirmed } = this.state;    
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h2 style={{color: 'red'}}>APLICATIVO DE AGENDAMIENTO - VERSION DE PRUEBA - BETA 0.0.2</h2>
          <hr/>
            <h3 class="panel-title">
              AGENDAR NUEVO SERVICIO
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Volver</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="select-service">Tipo de Servicio</label>
                <div>
                <select name="title" id="select-service" value={title} onChange={this.onChange} required>
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
                    required={true}
                />
                </div>
              </div>
              <div class="form-group">
                <label for="author">Nombre del Cliente</label>
                <input
                  type="text" 
                  class="form-control"
                  name="author" 
                  value={author} 
                  onChange={this.onChangeOnlyLetters} 
                  placeholder="Nombre del Cliente"               
                  required
                  />
              </div>
              <div class="form-group">
                <div>
                  <input type="checkbox" disabled hidden />
                </div>
              </div>
              <button type="submit" class="btn btn-success">Aceptar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
