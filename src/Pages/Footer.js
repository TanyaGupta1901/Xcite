import React from 'react';
import '../Css/Footer.css'
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import '../assets/vendor/aos/aos.css'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css'
import '../assets/vendor/swiper/swiper-bundle.min.css'


function FooterLanding(props) {
   return (


      <footer id="footer">
         {/* <div class="footer-newsletter">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-lg-6">
                     <h4>Join Our Newsletter</h4>
                     <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                     <form action="" method="post">
                        <input type="email" name="email"></input><input type="submit" value="Subscribe"></input>
                     </form>
                  </div>
               </div>
            </div>
         </div> */}

         {/* <div class="footer-top">
            <div class="container">
               <div class="row">
                  <div class="col-lg-3 col-md-6 footer-contact">
                     <h3>BizLand<span>.</span></h3>
                     <p>
                        A108 Adam Street <br></br>
                        New York, NY 535022<br></br>
                        United States <br></br><br></br>
                        <strong>Phone:</strong> +1 5589 55488 55<br></br>
                        <strong>Email:</strong> info@example.com<br></br></p>
                  </div>

                  <div class="col-lg-3 col-md-6 footer-links">
                     <h4>Useful Links</h4>
                     <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                     </ul>
                  </div>

                  <div class="col-lg-3 col-md-6 footer-links">
                     <h4>Our Services</h4>
                     <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                     </ul>
                  </div>

                  <div class="col-lg-3 col-md-6 footer-links">
                     <h4>Our Social Networks</h4>
                     <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                     <div class="social-links mt-3">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}

         {/* <div class="container py-4">
            <div class="copyright">
               &copy; Copyright <strong><span>BizLand</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
               Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
         </div> */}
      

      <div class="outer-footer">
         <div class={`footer ${props.bgColor}`}>
            <div class="grid-container">
               <div class="wanna-talk-to-us"><h1>Contact us?</h1></div>
                  <div class="write-to-us">
                        <div id="contact-us">
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <textarea type="text" id="message" name="messsage" placeholder="Start typing!" rows="2"></textarea>
                        <div className="send-btn-container"><input type="submit" value="Send" className="send"></input></div>
                        </div>
                  </div>
                  <div class="links">
                        <ul class="footer-links flex-container">
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaLinkedin /></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaYoutube /></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaGithub /></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaTwitter /></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaInstagram /></i></a></li>
                        </ul>
                  </div>
                  <div class="footer-info">
                     <div class="desc">
                        <p class="contact strong">Boared with expensive offline learning! <br /> Get guided by
                        our one-to-one learning platform.</p>
                        <div class="group-links">
                        <div class="footer-links-1">
                        <p class="contact strong">About Us</p>
                        {/* <ul class="list">
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Services</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="career.html">Career</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Privacy policy</a></li>
                        </ul> */}
                        </div>
                        <div class="footer-links-2 mx-5">
                        <p class="contact strong">Announcements</p>
                        {/* <ul class="list">
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Services</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="career.html">Career</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Privacy policy</a></li>
                        </ul> */}
                        </div>
                        <div class="footer-links-3 mx-3">
                        <p class="contact strong">Services</p>
                        {/* <ul class="list">
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Services</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="career.html">Career</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Privacy policy</a></li>
                        </ul> */}
                        </div>
                        </div>
                        {/* <div class="description1">
                           <p class = "contact strong"></p>
                           <br></br>
                           <p>Dwarka</p>
                           <p>New Delhi</p>
                           <p>110078</p>
                           <p>Email: contact@xcitedu.com</p>
                           <p>Phone: +91 8527985605</p>
                           <br></br>
                           </div> */}
                        <div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </footer>
                     )
}

export default FooterLanding
