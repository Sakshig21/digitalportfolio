import React from 'react'
import './Project.css'
import {FaSearchPlus } from "react-icons/fa"
import {BsLink45Deg} from "react-icons/bs"

const Project = () => {
  return (
    <div className="container-fluid project_wrapper " id="project">
        <div className="title">
            <h1 className='title_head project_title'>PROJECTS</h1>
            <p className='title_para project-para'>My Works</p>
            </div>
      
       {/* WORDPRESS BLOG WEBSITE */}
       <div className="container">
          <h2 style={{textAlign:"center",color:"aqua",marginBottom:"20px"}} className='project_head'>WORDPRESS BLOG WEBSITE</h2>
          
          <div className="row row-project1">
            
            <div className="col-md-12 col-sm-12 img-contain">
              <img src="img/interior.png" alt=""  className='img-html contain-react'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/interior.png" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
              <a href="https://akrutinteriors.com/" target='_blank'>< BsLink45Deg className='icon-hover'/></a>
             </div>
             <div className="hover-text">
              <h4>Akruti Interiors </h4>
             </div>

              </div>
            </div>
            
          </div>

          
               {/* WEBSITE MOCKUPS ON FIGMA*/}
        <div className="container">
          <h2 style={{textAlign:"center",color:"aqua",marginBottom:"20px"}} className='project_head'>WEBSITE MOCKUPS ON FIGMA</h2>
          {/* html and vanilla css projects  */}
          <div className="row row-project">
            <div className="col-md-3 col-sm-12 img-contain">
              <img src="img/food.png" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/food.png" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
            
             </div>
             

              </div>
            </div>
            <div className="col-md-3 col-sm-12 img-contain">
              <img src="img/agriculture.png" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/agriculture.png" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
            
             </div>
             

              </div>
            </div>
            <div className="col-md-3 col-sm-12 img-contain">
              <img src="img/coffee.png" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/coffee.png" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
            
             </div>
             

              </div>
            </div>
            <div className="col-md-3 col-sm-12 img-contain">
              <img src="img/spa.png" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/spa.png" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
            
             </div>
             

              </div>
            </div>
            
           
            
          </div>
          {/* html and bootstrap projects  */}
          
          


        </div>
               {/* GRAPHIC DESIGN FOR ADS  */}
               <div className="container">
          <h2 style={{textAlign:"center",color:"aqua",marginBottom:"20px"}} className='project_head'>GRAPHIC DESIGN FOR ADS</h2>
          {/* html and vanilla css projects  */}
          <div className="row row-project">
            <div className="col-md-3 col-sm-12 img-contain justify-content-flex-end">
              <img src="img/Ad-1.jpg" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/Ad-1.jpg" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
              
             </div>
             

              </div>
            </div>
            <div className="col-md-3 col-sm-12 img-contain ">
              <img src="img/Slide1.png" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/Slide1.png" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
              
             </div>
             

              </div>
            </div>
            
            
          </div>
          {/* html and bootstrap projects  */}
          
          


        </div>
               {/* LOGO DESIGN  */}
               <div className="container">
          <h2 style={{textAlign:"center",color:"aqua",marginBottom:"20px"}} className='project_head'>LOGO DESIGN</h2>
          {/* html and vanilla css projects  */}
          <div className="row row-project">
            <div className="col-md-6 col-sm-12 logo-col  ">
              <img src="img/Logo-2.png" alt="" className='logo' /> <br />
              <h4>Logo design for interior design firm</h4>
              
            </div>
            <div className="col-md-6 col-sm-12 logo-col ">
              <img src="img/logo2.png" alt="" className='logo1'  />
              <h4>Logo design for Digital marketing agency</h4>
              
            </div>
            
            
          </div>
          {/* html and bootstrap projects  */}
          
          


        </div>
               
               {/* HTML AND CSS WEBSITES  */}
               <div className="container">
          <h2 style={{textAlign:"center",color:"aqua",marginBottom:"20px"}} className='project_head'>HTML AND CSS WEBSITES</h2>
          {/* html and vanilla css projects  */}
          <div className="row row-project">
            <div className="col-md-6 col-sm-12 img-contain">
              <img src="img/food.png" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/food.png" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
              <a href="https://food-dpa.pages.dev/" target='_blank'>< BsLink45Deg className='icon-hover'/></a>
             </div>
             <div className="hover-text">
              <h4>Food Site</h4>
             </div>

              </div>
            </div>
            <div className="col-md-6 col-sm-12 img-contain">
              <img src="img/socialmedia.png" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/socialmedia.png "  target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
              <a href="https://socialmedia-623.pages.dev/" target='_blank'>< BsLink45Deg className='icon-hover'/></a>
             </div>
             <div className="hover-text">
              <h4>Digital Marketing Site</h4>
             </div>

              </div>
            </div>
            
          </div>
          {/* html and bootstrap projects  */}
          
          


        </div>
          {/* html and bootstrap projects  */}
          <div className="container">
          <h2 style={{textAlign:"center",color:"aqua",marginBottom:"20px"}} className='project_head'>UI-UX PROJECT</h2>
          {/* html and vanilla css projects  */}
          <div className="row row-project">
            <div className="col-md-6 col-sm-12 img-contain">
              <img src="img/complete.jpg" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/wireframe.png" target='_blank'>
               <FaSearchPlus className='icon-hover'/>
              </a>
              <a href="cv/ui-ux portfolio.pdf" target='_blank'>< BsLink45Deg className='icon-hover'/></a>
             </div>
             <div className="hover-text">
              <h4>Research</h4>
             </div>

              </div>
            </div>
            <div className="col-md-6 col-sm-12 img-contain">
              <img src="img/UI.jpg" alt=""  className='img-html'/>
              <div className="hover-contain">
                <div className="box-1"></div>
             <div className="hover-btn">
              <a href="img/UI.jpg"target='_blank' >
               <FaSearchPlus className='icon-hover'/>
              </a>
              <a href="cv/UI DESIGN.pdf" target='_blank'>< BsLink45Deg className='icon-hover'/></a>
             </div>
             <div className="hover-text">
              <h4>UI Design</h4>
             </div>

              </div>
            </div>
            
          </div>
          {/* html and bootstrap projects  */}
          
          


        </div>
          


        </div>
        

        
            

        

            
      

    </div>
  )
}

export default Project