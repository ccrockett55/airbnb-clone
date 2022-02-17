import React from "react";
import life from './life.png'
import review1 from './review1.png'
import wedding from './wedding.png'
import review2 from './review2.png'
import bike from './bike.png'
import review3 from './review3.png'

function Card() {
    return (
        <div>
            <div className='float'>
            <table>
                <tr>
                    <td className='tablestyle'>
                    <img src={life} className='picsize' /><br/>
                    </td>  
                    <td className='tablestyle'>
                    <img src={wedding} className='picsize' /><br/>
                    </td>  
                    <td className='tablestyle'>
                    <img src={bike} className='picsize' /><br/>
                    </td>  
                </tr>
                <tr>
                    <td className='tablestyle'>
                    <img src={review1} /> 
                    </td>  
                    <td className='tablestyle'>
                    <img src={review2} /> 
                    </td>  
                    <td className='tablestyle'>
                    <img src={review3} /> 
                    </td>  
                </tr>
            </table>
           
            
            </div>
          
        </div>
    );
}

export default Card;

