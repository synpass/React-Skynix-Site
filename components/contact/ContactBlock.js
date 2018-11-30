import React from 'react';
import CirclesBg from "../background/CirclesBg";
import Form from "./Form";

export default function ContactBlock(){
     return (
         <div className='contact'>
             <div className='contact__bg'>
                 <CirclesBg/>
             </div>
             <div className='contact__title'>
                 <h2 className='heading'>get in <b>touch</b></h2>
                 <h4 className='heading__sub'>YOUR SEARCH FOR YOUR DREAM TEAM ENDS HERE</h4>
             </div>

             <div className='contact__form'>
                 <p>Drop us a few lines about your project and we'll get back to you within <b>one business day</b></p>

                <Form/>

             </div>
         </div>
     )
}