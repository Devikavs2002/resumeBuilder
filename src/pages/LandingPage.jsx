import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    <div className='img-container'>
<div className='content-container text-center p-4  '>
<h3>Designed to get hired.Your skills, your story, your next job - all in one.</h3>
 <Link to={'/resumeGenerator'} className='btn btn-primary'>Let's start</Link>
</div>
    </div>
    <h1 className='text-center p-3'>Tools</h1>

<div className='tools p-5'>
  <div className="row">
    <div className="col-6">
      <h3>Resume</h3>
      <p>Create unlimited new resumes and easily edit them afterwards</p>
      <h3>Cover Letters</h3>
      <p>Easily write professional cover</p>
      <h3>Jobs</h3>
      <p>Automatically receive new and relevant job postings</p>
      <h3>Application</h3>
      <p>Effortlessly manage and track your job applications in an organized manner</p>

    </div>
    <div className="col-6">
      <img src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png" alt="" />
    </div>
  </div>

</div>
<div className="img">

</div>
<h2 className='text-center p-4'>Testimonials</h2> 
<div className="container">
  <div className="text-content">
    <h2>Trusted by professionals worldwide.</h2>
    <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
    <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
    <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
  </div>

  <div className="testimonials">
    
    <div className="testimonial-grid">
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt=" 1"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt=" 2"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 3"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 4"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 5"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 6"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 7"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 8"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpgg" alt="Testimonial 9"/>
       <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 6"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 7"/>
      <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="Testimonial 8"/>
 
    </div>
  </div>
</div>
  
    </>
  )
}

export default LandingPage