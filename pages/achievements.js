import Head from 'next/head';
import { useState } from 'react';
import  ImgsViewer  from 'react-images-viewer';

function Achievements() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const list = [
        { src: 'microsoft.jpg', caption: 'Microsoft Certificate' },
        { src: 'intern.png', caption: 'Internship Certificate' },
        { src: 'udemy.jpg', caption: 'Udemy Certificate' },
        { src: 'lor.png', caption: 'LOR Certificate' },
        { src: 'dell.jpg', caption: 'Dell Certificate' },
        { src: 'GRIP_GoldenBadge.png', caption: 'Golden badge' },
        { src: 'GRIP_Silver_Badge.png', caption: 'Silver badge' },
        { src: 'Oasis.jpg', caption: 'Internship Certificate' },
        { src: 'advance_Prog.jpg' },
        { src: 'cloud.jpg' },
    ];

  return (
    <section className="sectiond1 grid mx-8 my-6 gap-4">
        <Head>
            <title>Ritesh Hajare</title>
            <link rel="icon" href="f.png" />
        </Head>
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
        <img
            className="h-full w-full cursor-pointer"
            src="udemy.jpg"
            onClick={() => {setCurrentIndex(2);setOpen(true);}}
            title='Click'
        />
        <img
            className="h-full w-full cursor-pointer"
            src="lor.png"
            onClick={() => {setCurrentIndex(3);setOpen(true);}}
            title='Click'
        />
        <img
            className="h-full w-full cursor-pointer"
            src="dell.jpg"
            onClick={() => {setCurrentIndex(4);setOpen(true);}}
            title='Click'
        />
        <img
            className="h-full w-full cursor-pointer"
            src="GRIP_GoldenBadge.png"
            onClick={() => {setCurrentIndex(5);setOpen(true);}}
            title='Click'
        />
        <img
            className="h-full w-full cursor-pointer"
            src="GRIP_Silver_Badge.png"
            onClick={() => {setCurrentIndex(6);setOpen(true);}}
            title='Click'
        />
        <img
            className="h-full w-full cursor-pointer"
            src="Oasis.jpg"
            onClick={() => {setCurrentIndex(7);setOpen(true);}}
            title='Click'
        />
        <img
            className="h-full w-full cursor-pointer"
            src="advance_Prog.jpg"
            onClick={() => {setCurrentIndex(8);setOpen(true);}}
            title='Click'
        />
        <img
            className="h-full w-full cursor-pointer"
            src="cloud.jpg"
            title='Click'
            onClick={() => {setCurrentIndex(9);setOpen(true);}}
        />
        {currentIndex !== -1 && (
        <ImgsViewer
            imgs={list}
            currImg={currentIndex}
            onClose={() => setCurrentIndex(-1)}
            onClickNext={() => setCurrentIndex(index=>{return(index+1)})}
            onClickPrev={() => setCurrentIndex(index=>{return(index-1)})}
            isOpen={open}
            className="cursor-pointer"
        />
        )}
    </section>
  )
}

export default Achievements