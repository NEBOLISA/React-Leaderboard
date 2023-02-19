import React, { useState } from 'react'


function Profiles({internsUsestate}) {
    
   internsUsestate.sort((a,b) => (b.grade > a.grade) ? 1 : ((a.grade> b.grade) ? -1 : 0))
  return (
    <div>
       
     {
       
         internsUsestate.map((value,index)=>(
            <div className='wrapper'key={`item-${index}`}>
               
            <div className='item'>
                <img src={value.img} width="100px" height="100px" style={{borderRadius:"50%"}}/>
                <div className='info'>
                    <span>Name</span>
                    <h3 className='name'>{value.name}</h3>
                    <span>Path</span>
                    <h3 className='path'>{value. LearningPath}</h3>
                    <span className='grade-heading'>Grade</span>
                    <h3 className='grade'>{value.grade}</h3>
                    <span>Email</span>
                    <h3 className='email'>{value.email}</h3>
                </div>
            </div>
           
        </div>
            
         ))
         
        }
    </div>
   
  )
}

    



export default Profiles