import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('coments').orderBy('dateFormatDate', 'desc');
    this.unsubscribe = null;
    this.state = {
      coments: [],
      date: new Date()
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const coments = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author, confirmed, dateFormatDate } = doc.data();
      coments.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
        confirmed,
        dateFormatDate
      });      
    });
    this.setState({
      coments
   });   
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    const options = {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric",
      second: "numeric",
      hour12:"false"};
      
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h2 style={{color: 'red'}}>APLICATIVO DE AGENDAMIENTO - VERSION DE PRUEBA - BETA 0.0.2</h2>
          <hr/>
            <h3 class="panel-title">
              SERVICIOS AGENDADOS
            </h3>
          </div>
          <div class="panel-body">
          <h4><Link to={"/create"} class="btn btn-primary">Agendar Nuevo Servicio</Link></h4>
          <div>
            <strong>Fecha y hora actual </strong>
          </div>
          <div>
            <label>{this.state.date.toLocaleString("es-Co", options)}</label>         
          </div>         
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Tipo de Servicio</th>
                  <th>Fecha y Hora</th>
                  <th>Nombre del Cliente</th>
                  <th>Agenda Confirmada</th>
                </tr>
              </thead>
               { this.state.coments.map(Coment =>                  
                  {if (Coment.dateFormatDate.toDate().toLocaleDateString("en-EN") > this.state.date.toLocaleDateString("en-EN")) {
                    
                    //console.log("dateFormatDate ", Coment.dateFormatDate.toDate().toLocaleDateString("en-GB"))
                    //console.log("date ", this.state.date.toLocaleDateString("en-GB"))
                    //console.log("dateFormatDate ", Coment.dateFormatDate.toDate().toLocaleTimeString("en-GB"))
                    //console.log("date ", this.state.date.toLocaleTimeString("en-GB"))
                    return (                    
                      <tbody>
                      <tr bgcolor="#fff">
                        <td><Link to={`/show/${Coment.key}`}>{Coment.title}</Link></td>
                        <td>{Coment.description}</td>
                        <td>{Coment.author}</td>
                        <td><input type="checkbox" checked={Coment.confirmed} disabled /></td>
                      </tr>                    
                      </tbody>
                    )                  
                  }
                    if (Coment.dateFormatDate.toDate().toLocaleDateString("en-EN") == this.state.date.toLocaleDateString("en-EN")) {
                      if (Coment.dateFormatDate.toDate().toLocaleTimeString("en-GB") > this.state.date.toLocaleTimeString("en-GB")) {
                    return (                    
                      <tbody>
                      <tr bgcolor="#fff">
                        <td><Link to={`/show/${Coment.key}`}>{Coment.title}</Link></td>
                        <td>{Coment.description}</td>
                        <td>{Coment.author}</td>
                        <td><input type="checkbox" checked={Coment.confirmed} disabled /></td>
                      </tr>                    
                      </tbody>                     
                      )
                     } else {
                      return (                    
                        <tbody>
                        <tr bgcolor="#ddd">
                          <td><s><Link to={`/show/${Coment.key}`}>{Coment.title}</Link></s></td>
                          <td><s>{Coment.description}</s></td>
                          <td><s>{Coment.author}</s></td>
                          <td><input type="checkbox" checked={Coment.confirmed} disabled /></td>
                        </tr>                    
                        </tbody>                      
                        )
                     } 
                    }
                    if (Coment.dateFormatDate.toDate().toLocaleDateString("en-EN") < this.state.date.toLocaleDateString("en-EN")) {                        
                      return (                    
                        <tbody>
                        <tr bgcolor="#ddd">
                          <td><s><Link to={`/show/${Coment.key}`}>{Coment.title}</Link></s></td>
                          <td><s>{Coment.description}</s></td>
                          <td><s>{Coment.author}</s></td>
                          <td><input type="checkbox" checked={Coment.confirmed} disabled /></td>
                        </tr>                    
                        </tbody>                      
                        )
                      }                      
                   }                                  
                )}              
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
