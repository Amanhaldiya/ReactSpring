import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from './components/course';
import { Button, Col, Container, Row } from 'reactstrap';
import Home from './components/home';
import Listcourse from './components/listcourses';
import AddCourse from './components/add';
import Header from './components/header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Menus from './components/Menus';
function App() {
 
  return (
    <div class="text-center">
      <Router>
  <ToastContainer/>
  <Container>
    <Header/>
    <Row>
      <Col md={4}>
     <Menus/>
      </Col>
      <Col md={8}>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
         <Route path="/add-course" element={<AddCourse/>} exact/>
         <Route path="/view-course" element={<Listcourse/>} exact/>
         </Routes>
    </Col>
    </Row>

  </Container>
  
  <br/>
 
  </Router>
     </div>
  
  );
}
export default App;