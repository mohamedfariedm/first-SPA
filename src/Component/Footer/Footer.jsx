import React from 'react'

export default function Footer() {
  return <>
  <section className='bg-navbar'>
    <div className='container pt-5'>
    <div className=" row  align-items-start justify-content-around text-center py-5">
        <div className='col-md-4 '>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className='col-md-4  '>
            <h3>AROUND THE WEB</h3>
            <div className='d-flex justify-content-center align-items-center '>
                <div className='d-flex justify-content-center align-items-center p-2 border rounded-circle me-2'>
                <i className='fa-brands fa-facebook fs-5'></i>
                </div>
                <div className='d-flex justify-content-center align-items-center p-2 border rounded-circle me-2'>
                <i className='fa-brands fa-twitter fs-5'></i>
                </div>
                <div className='d-flex justify-content-center align-items-center p-2 border rounded-circle me-2'>
                <i className='fa-brands fa-linkedin-in fs-5'></i>
                </div>
                <div className='d-flex justify-content-center align-items-center p-2 border rounded-circle me-2'>
                <i className="fa-solid fa-globe fs-5"></i>
                </div>
            </div>
        </div>
        <div className='col-md-4  '>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
    </div>
  </section>
  <footer className='text-center  bg-dark'>
    <div className='p-3'>
        <p className='text-white'>Copyright © Your Website 2021</p>
    </div>
  </footer>
  </>
}
