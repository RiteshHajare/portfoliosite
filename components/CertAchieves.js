import { useEffect, useState } from "react";
import StyledH2 from "./StyledH2"
import  ImgsViewer  from 'react-images-viewer';
import Link from "next/link";


function CertAchieves() {
    var screenWidth ;  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState([]);
   
    if(counter!=0){
        screenWidth = window.innerWidth;
    }
    useEffect(() => {
      setTitle(screenWidth <932? "Achievements".split(""):"Certificates & Achievements".split(""))
    }, [counter>0 && window.innerWidth])
    
    useEffect(() => {
        setCounter(prev=>{return(prev+1)})
    }, [])
    
    
  return (
    <section className="sectiond flex flex-col gap-16">
    <h2 className="relative"><StyledH2 title={title} /> </h2>
    <div style={{margin:"0 auto",maxWidth: "1000px"}} className="block">
    <div className="certs grid gap-4 relative">
    <img
        className="h-full w-full cursor-pointer"
        src="microsoft.jpg"
        onClick={() => {setCurrentIndex(0);setOpen(true);}}
        title='Click'
    />
    <img
        className="h-full w-full cursor-pointer"
        src="intern.png"
        onClick={() => {setCurrentIndex(1);setOpen(true);}}
        title='Click'
    />
   {  screenWidth>932 && <img
        className="h-full w-full cursor-pointer"
        src="udemy.jpg"
        onClick={() => {setCurrentIndex(2);setOpen(true);}}
        title='Click'
    />}
    </div>
    <Link href="achievements" className="seemore">see more...</Link>
    {currentIndex !== -1 && (
    <ImgsViewer
        imgs={ screenWidth>932 ?[
        { src: 'microsoft.jpg', caption: 'Microsoft Certificate' },
        { src: 'intern.png', caption: 'Internship Certificate' },
        { src: 'udemy.jpg', caption: 'Udemy Certificate' },
      ]:[
        { src: 'microsoft.jpg', caption: 'Microsoft Certificate' },
        { src: 'intern.png', caption: 'Internship Certificate' }
      ]}
        currImg={currentIndex}
        onClose={() => setCurrentIndex(-1)}
        onClickNext={() => setCurrentIndex(index=>{return(index+1)})}
        onClickPrev={() => setCurrentIndex(index=>{return(index-1)})}
        isOpen={open}
        closeBtnTitle={"Close"}
        spinnerColor={"#08fdd8"}
        className="cursor-pointer"
    />
    )}

    </div>
    </section>

  )
}

export default CertAchieves