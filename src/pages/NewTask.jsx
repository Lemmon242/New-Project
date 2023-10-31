import React from 'react'
import '../styles/NewTask.css'


import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Arrow from '../assets/eva_arrow-ios-back-fill.svg'



const NewTask = () => {
    const scrollToTop =()=>{
      window.scroll({top:0, behavior:'smooth'})
    };
    return (
  <div className='container'>
  <div className='mt-4'>
  <Link to={'/'} className='text-decoration-none text-dark fs-1 fw-bold'><img src={Arrow} alt={Arrow} /><span className=''>New Task</span></Link>
  </div>
  
  
  <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title fs-4"> Task Title</h5>
        <input type="text" className='w-100' placeholder='E.g Project Defense, Assignment ...' />
        
      </div>
  <div className="fieldset-containers m-5 ">
        <h5 className="fieldset-title fs-4"> Description</h5>
        <input type="text" className='w-100' placeholder='Briefly describe your task...' />
        
      </div>
  <div className="fieldset-container m-5 ">
        <h5 className="fieldset-title fs-4"> Tags</h5>
        <Form.Select aria-label="Default select example" className='bord'>
        <option className=''><span>URGENT</span>  <span>IMPORTANT</span></option>
        <option value="1">urgent</option>
        <option value="2">important</option>
      </Form.Select>
        
      </div>
      <div>
        <button className="btn btn- text-light fs-4 fw-bold btn-lg w-100" style={{backgroundColor:'#974FD0'}}>Done</button>
      </div>
      <Link to={'/NewTask'} onClick={scrollToTop} ><p className='text-center fs-4 mt-5' style={{color:'#974FD0'}}>Back to Top</p></Link>
  </div>
  
    )
  }

export default NewTask