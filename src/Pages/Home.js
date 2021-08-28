import React, {useEffect} from 'react'
import Header from '../Navbar/Header'
import Footer from './Footer'
import Signin from './Signin'
import Cardcomponent from './Cardcomponent'
import Signincard from './Signincard'
import Testimonial from "../Testimonials/Testimonial";
import Test from './Test'
import Header from '../Navbar/Header';
import Footer from './Footer'
export default function Home() {

    let width = window.innerWidth;

    return (
        <> 
        <Header></Header>
         {/* {width > 600 ? <Signin/> : <Signincard/>}  */}
          
        <Test/>  
         {/* <Cardcomponent/> */}
        <Testimonial/>
       <Footer></Footer>
        </> 
    )
}

{/* {width >= 600 ? <Signin/> : <Signincard/>} */}
