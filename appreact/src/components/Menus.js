import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import {Link} from "react-router-dom"; 
const Menus=()=>{
    return(
<ListGroup>
    <Link className="list-group-item list-group-item-action" tag='a' to="/" action >Home</Link>                         
    <Link className="list-group-item list-group-item-action"  tag='a' to="/add-course" action >Add Course</Link>
    <Link className="list-group-item list-group-item-action" tag='a' to="/view-course" action >View Course</Link>
  
</ListGroup>


    );
};
// Single Page Application react use remove ListGroupItem and use Linlinkto






export default Menus;