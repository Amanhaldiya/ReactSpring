import React, { Fragment,useState,useEffect } from "react";
import {Form,FormGroup,Input,FormFeedback,FormText,Label, Container, Button} from "reactstrap";
import base_url from './../api/bootapi';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const AddCourse=()=>{
  useEffect(()=>{
    document.title="Add Course";
},[]);

const[course,setCourse]=useState({})
  const handleForm=(e)=>{
    console.log(course);
    postDataServer(course);
    e.preventDefault();
  };
//function to post data on server
const postDataServer=(data)=>{
  axios.post(`${base_url}/courses`,data).then(
    (response)=>{
      console.log(response);
      console.log("success");
      toast.success("course added successfully");
      setCourse({id:"" ,title:"",description:""});// for clear
    },
      (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Error in Add course");
      }
  
    );
};
const bntHandle= () =>{
  setCourse({id:" " ,title:"",description:""});
  toast("Clear",{
     position : "top-center"  // can use toast.success("done");,toast.error 
}); setCourse({id:"" ,title:"",description:""});
}


    return(
        <Fragment>
             <h1 className="text-center my-5">Fill Course details</h1>


<Form onSubmit={handleForm}>
  <FormGroup>
    <Label for="exampleEmail">
     CourseId
    </Label>
    <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e)=>
    {
      setCourse({...course, id: e.target.value});
    }
    
    }/>

    <FormFeedback>
      You will not be able to see this
    </FormFeedback>
    <FormText>
      Add Course Id
    </FormText>
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">
      Course Title
    </Label>
    <Input type="text" placeholder="Enter title here" id="title"valid 
    onChange={(e)=>{
      setCourse({...course, title : e.target.value });}}
    />
    <FormFeedback valid>
      Sweet! that name is available
    </FormFeedback>
    <FormText>
    Add Course Title
    </FormText>
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
     Course Description
    </Label>
    <Input type="textarea" placeholder="Enter description here" invalid id="description"
     style={{height:150}} onChange={(e)=>{
      {
        setCourse({...course, description: e.target.value});
     }}}
     />
   <Container className="text-center my-2">
 
   
   </Container >


  </FormGroup>
  
  
</Form>
<Button type="submit" color="success"onClick ={handleForm}>Add Course</Button>
<Button color="warning ml-5 ms-2"onClick ={bntHandle}>Clear</Button>
        </Fragment>
    )
}
export default AddCourse;