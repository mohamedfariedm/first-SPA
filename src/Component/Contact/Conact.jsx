import React from 'react'

export default function Conact() {
  return   <>          
            <section className='bg-white py-2'>
              <div className='container text-center '>
                <p className='h1 fw-bolder pt-5 parent2 text-dark'>CONATCT SECTION</p>
                <div className='mt-5'>
                    <div className="g-2 pb-5 d-flex justify-content-center">
                        <div className='w-50'>
                        <div className='text-start'>
                        <label htmlFor="userName" className='text-success '>userName:</label>
                        <input onInput={(e)=>{trans (e.target.value,e.target.getAttribute("id"))}} id='userName' type="text"className='form-control mb-5 border-top-0 border-right-0 border-left-0'placeholder='userName'/>
                        </div>
                        <div className='text-start'>
                        <label htmlFor="userAge" className='text-success '>userAge:</label>
                        <input onInput={(e)=>{trans (e.target.value,e.target.getAttribute("id"))}} id='userAge' type="text"className='form-control mb-5 border-top-0 border-right-0 border-left-0' placeholder='userAge'/>
                        </div>
                        <div className='text-start'>
                        <label htmlFor="userEmail" className='text-success '>userEmail:</label>
                        <input onInput={(e)=>{trans (e.target.value,e.target.getAttribute("id"))}} id='userEmail' type="text"className='form-control mb-5 border-top-0 border-right-0 border-left-0' placeholder='userEmail'/>
                        </div>
                        <div className='text-start position-relative'>
                        <label htmlFor="userPassword" className='text-success'>userPassword:</label>
                        <input onInput={(e)=>{trans (e.target.value,e.target.getAttribute("id"))}} id='userPassword' type="text"className='form-control mb-5 border-top-0 border-right-0 border-left-0 ' placeholder='userPassword'/>
                        </div>
                        <div className='d-flex justify-content-start'>
                        <button className='btn btn-success mb-5'>Send Message</button>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
            </section>
</>
}
 function trans (term,id){
    let inpu=document.getElementById(id)
    if(term.length>0){
        inpu.previousElementSibling.classList.add("trans")
        }else{
            inpu.previousElementSibling.classList.remove("trans")
            }
 }