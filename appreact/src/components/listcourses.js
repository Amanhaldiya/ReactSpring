import React, { useState,useEffect } from "react";
import Course from "./course";
import { Button } from "reactstrap";
import axios from "axios";
import base_url from './../api/bootapi';
import { ToastContainer, toast } from 'react-toastify';





const Listcourse=()=>{
    useEffect(()=>{
        document.title="Courses list";
},[]);
//function to call server
const getAllCoursesFromServers=()=>{
   axios.get(`${base_url}/courses`).then(
        (response)=>{
            //success
            console.log(response);
            console.log(response.data);
            toast.success("courses has benn loaded",{position:"bottom-center"});
            setCourses(response.data);
        },
        (error)=>{
            console.log(error);
            toast.error("something went wrong",{position:"bottom-top"});
        }
    );
};
//loading course function
useEffect(()=>{    
    getAllCoursesFromServers();
},[]);

const updateCourses=(id)=>{
    setCourses(courses.filter((c)=>c.id!=id));
};


const [courses,setCourses]=useState([
    {title:"Django course", description: "this is testing"},
    {title:"Java course", description: "this is testing"},
   {title:"Django course", description: "this is testing"},
]);
 return (
     <div>
      
        <h1 className="my-2">Courses List</h1>
        <p> List of courses are as follows</p>
        {
            courses.length>0 ? courses.map((item)=> <Course Key={item.id} course={item} update={updateCourses}/>):"No courses"

        }
    </div>
    
);
}
export default Listcourse;