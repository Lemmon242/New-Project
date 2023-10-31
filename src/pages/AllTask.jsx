import React from "react";
// import '../style/NewStyle.css'
import { Link } from "react-router-dom";
import Edit from '../assets/clarity_note-edit-line.svg'
import Delete from '../assets/fluent_delete-24-regular.svg'
import '../styles/AllTask.css'

const AllTask = () => {
  return (
    <div className="container lag">
        <div className=" mt-4">
        <div className="d-flex justify-content-between align-items-center">
        <Link className='text-decoration-none text-dark'><h1>My Task</h1></Link>
        <Link className='text-decoration-none text-dark'><h3 style={{color:'#974FD0'}}>+ Add to My Task</h3></Link>
        </div>

        <div className="mt-5 border rounded">
            <div className="d-flex justify-content-between align-items-center" >
                <h4 className="text-danger ms-3">urgent</h4>
                <div className="d-flex gap-3 me-3 my-3">
                    <button style={{backgroundColor:'#974FD0'}} className="btn btn- text-light btn-lg"><img src={Edit} alt={Edit} />Edit</button>
                   <div>
                   <button style={{color:'#974FD0'}} className="btn btn-light btn-lg"><img src={Delete} alt={Delete} />Delete</button>
                   </div>
                </div>
            </div>
            <hr />
           <div className="mt-4">
           <h2>FinTech Website Update</h2>
            <p className="fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
           </div>
        </div>
        <div className=" mt-5 border rounded">
            <div className="d-flex justify-content-between align-items-center" >
                <h4 className="text-success ms-3">important</h4>
                <div className="d-flex gap-3 me-3 my-3 align-items-center">
                    <button style={{backgroundColor:'#974FD0'}} className="btn btn- text-light btn-lg"><img src={Edit} alt={Edit} />Edit</button>
                   <div>
                   <button style={{color:'#974FD0'}} className="btn btn-light btn-lg"><img src={Delete} alt={Delete} />Delete</button>
                   </div>
                </div>
            </div>
            <hr />
           <div className="mt-4">
           <h2>Agro Website Update</h2>
            <p className="fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
           </div>
        </div>
        
        <div className="mt-5 border rounded">
            <div className="d-flex justify-content-between align-items-center" >
                <h4 className="text-danger ms-3">urgent</h4>
                <div className="d-flex gap-3 me-3 my-3">
                    <button style={{backgroundColor:'#974FD0'}} className="btn btn- text-light btn-lg"><img src={Edit} alt={Edit} />Edit</button>
                   <div>
                   <button style={{color:'#974FD0'}} className="btn btn-light btn-lg"><img src={Delete} alt={Delete} />Delete</button>
                   </div>
                </div>
            </div>
            <hr />
           <div className="mt-4">
           <h2>FinTech Website Update</h2>
            <p className="fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
           </div>
        </div>
        <div className=" mt-5 border rounded">
            <div className="d-flex justify-content-between align-items-center" >
                <h4 className="text-success ms-3">important</h4>
                <div className="d-flex gap-3 me-3 my-3 align-items-center">
                    <button style={{backgroundColor:'#974FD0'}} className="btn btn- text-light btn-lg"><img src={Edit} alt={Edit} />Edit</button>
                   <div>
                   <button style={{color:'#974FD0'}} className="btn btn-light btn-lg"><img src={Delete} alt={Delete} />Delete</button>
                   </div>
                </div>
            </div>
            <hr />
           <div className="mt-4">
           <h2>Agro Website Update</h2>
            <p className="fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
           </div>
        </div>
    </div>




    </div>
  );
};

export default AllTask;