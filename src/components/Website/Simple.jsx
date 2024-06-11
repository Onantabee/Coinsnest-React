import React from 'react'

const Simple = () => {
  return (
    <section className='section'>
      <div className='container'> 
      <div className='row hi-five hero-row align-items-center justify-content-center py-2 py-md px-4'style={{backgroundColor:"rgb(5 0 255)"}}>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
          <div style={{width:"300px"}}>
            <p className='cta-text'>Simple and convenient to use . seamless to explore</p>

          </div>
          <a href="" style={{width:"upset", cursor:"none"}}>
            <img src="/devsupport.svg"className='hi5-img' alt="fuck off" />
          </a>
        <button className='btn btn-primary download-btn'>Download</button>

        </div>

      </div>

      </div>
    </section>
  )
}

export default Simple