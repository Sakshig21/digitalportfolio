import React from 'react'
import './About.css'
import {FaPencilRuler, FaPaintBrush,FaUserGraduate} from "react-icons/fa"
import {BsMusicNoteList} from "react-icons/bs"
import {BiSolidPlaneAlt} from "react-icons/bi"
import {GiArchiveResearch} from "react-icons/gi"



const About = () => {
  return (
    <div className="about container-fluid" id='about2'>
        
            <div className="title">
            <h1 className='title_head about_title'>ABOUT ME</h1>
            <p className='title_para-head title_para'>Know Me More</p>
            </div>
            <div className="row about_wrapper">
                <div className="container">
                    <div className="row row2">
                    {/* <div className="about_left col-lg-6 col-sm-12 "> */}
            {/* <div className="box-img">
            <img src="img/photo.png" alt="" className='logo-img' />
            </div> */}
            {/* <div className="box-img1"></div>
           
        </div> */}
        <div className="about_right col-lg-8 col-sm-10 col-10 ">
            
            <p>I'm Sakshi Gaikwad an Architecture graduate who is well versed in front-end developement as well as UI-UX design.I have good knowledge of technologies like HTML,CSS and Javascript and also React.</p>
            <p><span>NAME:</span>Sakshi Gaikwad</p>
            <p><span>DATE OF BIRTH:</span>3 March 1998</p>
            <p><span>NATIONALITY:</span>Indian </p>
            <p><span>ADDRESS:</span>Jaitala ,Nagpur. </p>
            <p><span>PHONE:</span>+91-9579246403 </p>
            <p><span>EMAIL:</span>gaikwadsakshi0303@gmail.com </p>

        </div>
                    </div>

                </div>
        
        </div>

        
        <div className="row interest1">
        <h1 className='heading'>MY INTERESTS</h1> <br />
            <div className="col-3 col-md-2  align">
                <div className='hover'><FaPencilRuler className='icon'/><div className="icon_text">Drawing</div></div>
               
            </div>
            <div className="col-md-2 col-3  align"> <div className='hover'><BsMusicNoteList className='icon'/> <div className="icon_text">Music</div></div></div>
            <div className="col-md-2 col-3 align"> <div  className='hover'><FaPaintBrush className='icon'/><div className="icon_text">Art</div></div></div>
            <div className="col-md-2 col-3   align"> <div className='hover'><BiSolidPlaneAlt className='icon'/><div className="icon_text">Travel</div></div></div>
            <div className="col-md-2 col-3   align"> <div className='hover'><GiArchiveResearch className='icon'/><div className="icon_text">Research</div></div></div>
            <div className="col-md-2 col-3  align"> <div className='hover'><GiArchiveResearch className='icon'/><div className="icon_text"> Reading  Books</div></div></div>
        </div>
        
       
    </div>
  )
}

export default About