import React from "react";
import axios from "axios";
import base_url from './../api/bootapi';
import { ToastContainer, toast } from 'react-toastify';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
}from 'reactstrap';
const Course=({ course,update })=>{


const deleteCourse=(id)=>{
  axios.delete(`${base_url}/courses/${id}`).then(
    (response)=>{
      toast.success("courses deleted");
      update(id);
    },
    (error)=>{
      toast.error("course not deleted");
    }
  )
};

             return (
                    <Card className="text-center text-color:blue"
                    //style={{
                    //  width: '155rem'
                  //  }}
                  >
                    <img
                      alt="Sample"
                      src=""
                    />
                    <CardBody>
                      <CardTitle tag="h5">
                      {course.title}
                      </CardTitle>
                      <CardSubtitle 
                        className="mb-2 text-muted font-weight-bold"
                        tag="h6"
                      >
                       {course.title}
                      </CardSubtitle>
                      <CardText>
                         {course.description}             
                      </CardText>
                      <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                      }}>
                        Delete
                      </Button>
                      <Button color="warning ml-3">
                        Update
                      </Button>
                    </CardBody>
                  </Card>
             );
}
export default Course;