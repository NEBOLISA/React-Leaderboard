import React, { useState } from 'react'
import Profiles from './Profiles'
import Search from './Search';
import SearchList from './SearchList';
import './styles.css'


function Board() {
  const[interns, SetInterns] = useState([
    {
        name:"Okafor Ephraim",
        LearningPath:"Frontend",
        grade:"80",
        id:"0",
        email:"ephraim@gmail.com",
        img:require("./assets/imgs/01.jpeg")
    },
    {
        name:"Nneoma Jane",
        LearningPath:"Frontend",
        grade:"65",
        id:"1",
        email:"nneoma@gmail.com",
        img:require("./assets/imgs/02.webp")
    },
    {
        name:"Eze Austin",
        LearningPath:"Frontend",
        grade:"97",
        id:"2",
        email:"eze@gmail.com",
        img:require("./assets/imgs/03.webp")
    }
    ,
    {
        name:"Chinedu Mary",
        LearningPath:"Frontend",
        grade:"65",
        id:"3",
        email:"mary@gmail.com",
        img:require("./assets/imgs/04.jpeg")
    }
    ,
    {
        name:"Michael John",
        LearningPath:"Frontend",
        grade:"72",
        id:"4",
        email:"michael@yahoo.com",
        img:require("./assets/imgs/05.webp")
    }
    ,
    {
        name:"Chidi Eze",
        LearningPath:"Web3",
        grade:"45",
        id:"5",
        email:"chidi@gmail.com",
        img:require("./assets/imgs/06.webp")
        
    }
    ,
    {
        name:"Mirable Sunday",
        LearningPath:"Backend",
        grade:"76",
        id:"6",
        email:"Mirable@yahoo.com",
        img:require("./assets/imgs/01.jpeg")
    }
    ,
    {
        name:"Gift Michael",
        LearningPath:"Web3",
        grade:"34",
        id:"7",
        email:"gift@yahoo.com",
        img:require("./assets/imgs/07.webp")
    }
    ,
    {name:"Chinedu Mary",
    LearningPath:"Frontend",
    grade:"75",
    id:"8",
    email:"mary@gmail.com",
    img:require("./assets/imgs/04.jpeg")
    }
    ,
    {
      name:"Chidi Eze",
      LearningPath:"Web3",
      grade:"55",
      id:"9",
      email:"chidi@gmail.com",
      img:require("./assets/imgs/06.webp")
    }
    ,
    {
      name:"Eze Austin",
      LearningPath:"Frontend",
      grade:"44",
      id:"10",
      email:"eze@gmail.com",
      img:require("./assets/imgs/03.webp")
    }
    ,
    {
      name:"Mirable Sunday",
      LearningPath:"Backend",
      grade:"56",
      id:"11",
      email:"Mirable@yahoo.com",
      img:require("./assets/imgs/01.jpeg")
    }
    ,
    {
      name:"Nneoma Jane",
      LearningPath:"Frontend",
      grade:"65",
      id:"12",
      email:"nneoma@gmail.com",
      img:require("./assets/imgs/02.webp")
    }
    ,
    {
      name:"Michael John",
      LearningPath:"Frontend",
      grade:"92",
      id:"13",
      email:"michael@yahoo.com",
      img:require("./assets/imgs/05.webp")
  
    }
    ,
    {
      name:"Chidi Eze",
      LearningPath:"Web3",
      grade:"55",
      id:"14",
      email:"chidi@gmail.com",
      img:require("./assets/imgs/06.webp")
    }
    ,
    {
      name:"Eze Austin",
      LearningPath:"Frontend",
      grade:"37",
      id:"15",
      email:"eze@gmail.com",
      img:require("./assets/imgs/03.webp")
    }
    ,
    {
      name:"Michael John",
      LearningPath:"Frontend",
      grade:"22",
      id:"16",
      email:"michael@yahoo.com",
      img:require("./assets/imgs/05.webp")
    }
    ,
    {
      name:"Nneoma Jane",
      LearningPath:"Frontend",
      grade:"85",
      id:"17",
      email:"nneoma@gmail.com",
      img:require("./assets/imgs/02.webp")
    }
    ,
    {
      name:"Mirable Sunday",
      LearningPath:"Backend",
      grade:"96",
      id:"18",
      email:"Mirable@yahoo.com",
      img:require("./assets/imgs/02.webp")
    }
    ,
    {
      name:"Chidi Eze",
      LearningPath:"Web3",
      grade:"85",
      id:"19",
      email:"chidi@gmail.com",
      img:require("./assets/imgs/06.webp")
    }
    ,
    {
      name:"Okafor Ephraim",
      LearningPath:"Frontend",
      grade:"90",
      id:"20",
      email:"ephraim@gmail.com",
      img:require("./assets/imgs/01.jpeg")
    }
    
    
    
]);

  return (
    <div>
      
  <h1>Leaderboard</h1>
  <Profiles internsUsestate={interns}/>
    </div>
  
  )
  
}

export default Board