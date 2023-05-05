import {motion, useAnimationControls} from 'framer-motion';
import { useState } from 'react';

function Blast({letter,tcolor}) {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    const [colorr, setColorr] = useState(false)
  
    
    const rubberband = ()=>{
        
           controls.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,0.55,1)",
                "scale3d(0.75,1.25,1)",
                "scale3d(1.25,0.85,1)",
                "scale3d(0.9,1.05,1)",
                "scale3d(1,1,1)",
            ],
            transition:{
                times:[0, .9, .9, 0.98, 0.98]
            }
           })
        
        setIsPlaying(true);
    }
   
  return (
    <motion.span style={{display:`${letter===" "?"inline":"inline-block"}`,transition: "all 0.8s ease-out",color:`${colorr ? "#08fdd8":tcolor}`}} animate={controls}  onMouseOver={()=>{
        if(!isPlaying){
            rubberband()
        }
        setColorr(true);
    }}
    onMouseLeave={()=>{setColorr(false);}} 
    onAnimationComplete={()=>{setIsPlaying(false);}}
    >{letter}</motion.span>
  )
}

export default Blast