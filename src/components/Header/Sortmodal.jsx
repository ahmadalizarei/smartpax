import { React, useEffect, useState } from "react";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';

function Sortmodal() {
    const [open, setOpen] = useState(false);
   
  return (
    <>
{/* //   <!--sort modal--> */}
  <div className="modal fade sort-modal" id="sort" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog">
        <div className="modal-content">
           <div className="modal-body">
              <div className="row">
                 <div className="col-md-8 col-6">
                    <h5>Sort By</h5>
                 </div>
                 <div className="col-md-4 col-6">
                    <button className="btn btn-add-group">Save as new View</button>
                 </div>
              </div>
              <br/>
              <p className="mb-2">Sort your items by priority, creation date, price or</p>
              <p className="mb-2">any column you have on your board.</p>
              <br/>
            
              <Collapse in={open}>
        <div id="example-collapse-text">

        <div className="row mb-2">
                    <div className="col-md-6">
                       <select className="form-control">
                          <option> Name</option>
                          <option> Date</option>
                       </select>
                    </div>
                    <div className="col-md-5">
                       <select className="form-control">
                          <option>Ascending</option>
                          <option>Descending</option>
                       </select>
                    </div>
                    <div className="col-md-1">
                       <div className="mt-2"> <i className="fa fa-times"  onClick={() => setOpen(!open)}></i></div>
                    </div>
                 </div>

       
        </div>
      </Collapse>

              <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       + Add new sort
      </a>
           </div>
        </div>
     </div>
  </div>

  </>
  );
}
export default Sortmodal;