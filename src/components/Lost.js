import React, {useEffect} from 'react'
import sad from '../assets/sad.webp';
import { useNavigate } from "react-router-dom";


export default function Lost() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    });
    
  return (
    <div>
        <h2>I'm lost</h2>
        <img src={sad} alt="Je suis perdu" />
    </div>
  )
}
