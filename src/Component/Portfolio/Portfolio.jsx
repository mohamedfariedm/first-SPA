import React from 'react'
import porte1 from '../Portfolio/images/poert1.png'
import porte2 from '../Portfolio/images/port2.png'
import porte3 from '../Portfolio/images/port3.png'
export default function Portfolio() {
  return <>
              <section className='bg-white py-2'>
              <div className='container text-center '>
                <p className='h1 fw-bolder pt-5 parent2 text-dark'>PORTFOLIO COMPONENT</p>
                <div className='mt-5'>
                    <div className="row ">
                        <div className='p-4 col-md-4'>
                        <div className=" border border-0 rounded-3 overflow-hidden position-relative p-0">
                            <img src={porte1} className='w-100 rounded-3' alt="" />
                            <div onClick={(e)=>{addImage(e.target.previousElementSibling.getAttribute("src"))}} className='bg-success position-absolute greenlayer rounded-3'>
                                <i  onClick={(e)=>{e.stopPropagation();addImage(e.target.parentElement.previousElementSibling.getAttribute("src"))}} className='fa-solid fa-plus fa-6x'></i>
                            </div>
                        </div>
                        </div>
                        <div className='p-4 col-md-4'>
                        <div className=" border border-0 rounded-3 overflow-hidden position-relative p-0">
                            <img src={porte2} className='w-100 rounded-3' alt="" />
                            <div onClick={(e)=>{addImage(e.target.previousElementSibling.getAttribute("src"))}}  className='bg-success position-absolute greenlayer rounded-3'>
                                <i  onClick={(e)=>{e.stopPropagation();addImage(e.target.parentElement.previousElementSibling.getAttribute("src"))}} className='fa-solid fa-plus fa-6x'></i>
                            </div>
                        </div>
                        </div>
                        <div className='p-4 col-md-4'>
                        <div className=" border border-0 rounded-3 overflow-hidden position-relative p-0">
                            <img src={porte3} className='w-100 rounded-3' alt="" />
                            <div onClick={(e)=>{addImage(e.target.previousElementSibling.getAttribute("src"))}}  className='bg-success position-absolute greenlayer rounded-3'>
                                <i  onClick={(e)=>{e.stopPropagation();addImage(e.target.parentElement.previousElementSibling.getAttribute("src"))}} className='fa-solid fa-plus fa-6x'></i>
                            </div>
                        </div>
                        </div>
                        <div className='p-4 col-md-4'>
                        <div className=" border border-0 rounded-3 overflow-hidden position-relative p-0">
                            <img src={porte1} className='w-100 rounded-3' alt="" />
                            <div onClick={(e)=>{addImage(e.target.previousElementSibling.getAttribute("src"))}}  className='bg-success position-absolute greenlayer rounded-3'>
                                <i  onClick={(e)=>{e.stopPropagation();addImage(e.target.parentElement.previousElementSibling.getAttribute("src"))}} className='fa-solid fa-plus fa-6x'></i>
                            </div>
                        </div>
                        </div>
                        <div className='p-4 col-md-4'>
                        <div className=" border border-0 rounded-3 overflow-hidden position-relative p-0">
                            <img src={porte2} className='w-100 rounded-3' alt="" />
                            <div onClick={(e)=>{addImage(e.target.previousElementSibling.getAttribute("src"))}}  className='bg-success position-absolute greenlayer rounded-3'>
                                <i  onClick={(e)=>{e.stopPropagation();addImage(e.target.parentElement.previousElementSibling.getAttribute("src"))}} className='fa-solid fa-plus fa-6x'></i>
                            </div>
                        </div>
                        </div>
                        <div className='p-4 col-md-4'>
                        <div className=" border border-0 rounded-3 overflow-hidden position-relative p-0">
                            <img src={porte3} className='w-100 rounded-3' alt="" />
                            <div onClick={(e)=>{addImage(e.target.previousElementSibling.getAttribute("src"))}}  className='bg-success position-absolute greenlayer rounded-3'>
                                <i onClick={(e)=>{e.stopPropagation();addImage(e.target.parentElement.previousElementSibling.getAttribute("src"))}} className='fa-solid fa-plus fa-6x'></i>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
              </div>
            </section>
            <div id="div-prop" onClick={(e)=>{let x= e.target; x.classList.add("d-none")}} className='big-layer d-none justify-content-center align-items-center'>
            <div onClick={(e)=>{e.stopPropagation()}} className='w-50 text-center'>
                <img id='image-change' onClick={(e)=>{e.stopPropagation()}}   className='w-100' alt="" />
            </div>
            </div>
  </>
}

function addImage(src){
    document.getElementById("div-prop").classList.replace("d-none","d-flex");
    document.getElementById("image-change").setAttribute("src",src);
}