import './Style.css';
import React, { useState } from 'react';
import {MdOutlineNightlight, MdOutlineLightMode} from "react-icons/md"



function Navigation({ handle }) {

  const [view, setview] = useState(false);

  return (
    <nav>
      <h2>Where in the World?</h2>
      {
          view ? <button onClick={handle}><MdOutlineLightMode className='icon'/>Light Mode</button> : <button onClick={handle}><MdOutlineNightlight className='icon'/> Dark Mode</button>
      }
      
    </nav>
  );
}
export default Navigation;