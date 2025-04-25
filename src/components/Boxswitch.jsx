import React,{useState} from "react";
import '../css/Box.css';
const  Boxswitch=()=>{
  const[color,setColor]=useState(['red','yellow','blue','green']);

  const handleClick=(clickedcolor)=>{

    const currentindex=color.indexOf(clickedcolor);
    const possibleIndex=color.map((...idx)=>idx).filter(idx=>idx!==currentindex);
    const newIndex= possibleIndex[Math.floor(Math.random()*possibleIndex.length)];
    const UpdatedColor=[...color];
    UpdatedColor.splice(currentindex,1);
    UpdatedColor.splice(newIndex,0,clickedcolor);
    setColor(UpdatedColor);
  };

  return(
    <div className="box-container">
      {
        color.map((color,index)=>(
          <div key={index} className="box" 
           onClick={()=>handleClick(color)}
           style={{backgroundColor:color}}
          >
            {color}
          </div>
        ))
      }
      
     </div>
  )
}
export default Boxswitch;