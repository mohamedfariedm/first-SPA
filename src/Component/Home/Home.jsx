import React from 'react'
import Svgimage from '../Home/avataaars.svg'
export default function Home() {
  return <>
            <section className='bg-home py-5'>
              <div className='container text-center py-5'>
                <div className="text-center">
                  <img src={Svgimage} className='w-250px' alt="" />
                </div>
                <p className='h1 pt-5 parent'>START FRAMEWORK</p>
                <p className='mt-5'>Graphic Artist - Web Designer - Illustrator</p>
              </div>
            </section>
        </>
}
