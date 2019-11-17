// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import TodoForm from './TodoForm';
import CompanyForm from './CompanyForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddTodo = this.toggleAddTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);

    // adding company
    this.showCompany = this.showCompany.bind(this);
    this.addCompany = this.addCompany.bind(this);
  }

  toggleAddTodo(e){
    e.preventDefault();
     this.props.mappedToggleAddTodo();
  }

  showCompany(e){
    e.preventDefault();
     this.props.showCompany();
  }

  addTodo(e){
      e.preventDefault();
      const form = document.getElementById('addTodoForm');
      if(form.todoText.value !== ""  && form.todoDesc.value !== ""){
        const data = new FormData();
        data.append('todoText', form.todoText.value);
        data.append('todoDesc', form.todoDesc.value);
        // const data = {
        //   todoText: form.todoText.value,
        //   todoDesc: form.todoDesc.value
        // }
        this.props.mappedAddTodo(data);
      form.reset();
      }
      else{
        return ;
      }
  }

  addCompany(e){
    e.preventDefault();
    const companyForm = document.getElementById('addCompanyForm');
    if(companyForm.companyName.value !== ""  && companyForm.companyEmail.value !== ""){
      const data = new FormData();
      data.append('companyName', companyForm.companyName.value);
      data.append('companyAddress', companyForm.companyAddress.value);
      data.append('companyEmail', companyForm.companyEmail.value);
      data.append('companyPhone', companyForm.companyPhone.value);

      this.props.mappedAddCompany(data);
      companyForm.reset();
    }
    else{
      return ;
    }
}

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Mern Stack Todo App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddTodo}>
         <NavItem eventKey={1}>Add Todo</NavItem>
      </LinkContainer>
      <LinkContainer to={{ pathname: 'company', query: {  } }} onClick={this.showCompany}>
         <NavItem eventKey={1}>Company</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showAddTodo &&
    <TodoForm addTodo={this.addTodo} />
  }
  { /* Each Smaller Components */}
  { this.props.children } 

  {appState.showAddCompany &&
    <CompanyForm addCompany={this.addCompany} />
  }
  { /* Each Smaller Components */}
   {/* { this.props.children }  */}
  </div>
 </div>
    );
  }
}
