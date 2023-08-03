import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";

import { Button, Container } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
const Home = () => {
      useEffect(()=>{
        document.title="Home";
},[]);
const bntHandle= () =>{
    toast("this is my first message",{
       position : "top-center"  // can use toast.success("done");,toast.error 
  });
}
    return (
        
            <div class="text-center">
                
                    <h1 className="">About this Application</h1>
                    <p>
                        Course Add and Delete Application 
                    </p>
                    <Container className="bg-warning">
        
  <p>                
     This Application is connected with Spring Boot and uses MySql Database
     
                    </p>
   

  </Container>
                    
  <Button 
 
 color="primary" outline onClick ={bntHandle} >Click Me
</Button>
            </div>

    );
}
export default Home; 