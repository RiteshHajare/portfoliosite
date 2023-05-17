import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import StyledH2 from "./StyledH2";

function Portfolio() {
    var screenWidth ;  
    const [counter, setCounter] = useState(0);
    const title = "My Portfolio".split("");
    const para = "Below listed are some of my recent projects which I have worked on to enhance my skillset with Cutting-Edge Web Development technologies such as React.js, Next.js, Angular for frontend and Node.js, express.js, Django, motoko, ejs for backend.";
    
    if(counter!=0){
        screenWidth = window.innerWidth;
    }

    useEffect(() => {
        setCounter(prev=>{return(prev+1)})
    }, [])

  return (
    <section className="sectionb relative">
    <div className="workbg">Work</div>
        <div className="portfolioinfo flex flex-col gap-10">
        <h2 className="h2pseudo relative"><StyledH2 title={title} /></h2>
        <p className="pseudop relative w-8/12">{para}</p>
        </div>
            <div style={{backgroundColor:"#1d1d1d"}} className="mx-auto w-fit projects mt-28 relative grid">
                <ProjectCard
                    title={"Whatsapp clone"}
                    link={"https://lighthearted-kleicha-499492.netlify.app/"}
                    body={"Whatsapp look-a-like web application with landing page, Authentication, Validation and real-time chating feature build with React.js and Node.js."}
                    skills={["React.js","Node.js","Passport.js","Socket.io"]}
                 />
                 <ProjectCard
                    title={"Oven-pizza"}
                    link={"https://orderovenpizza.netlify.app/"}
                    body={"A Role based web application where user can order custom or ready-made pizzas whereas Admin can monitor orders from Admin Panel."}
                    skills={["React.js","Bootstrap","Express.js","Node.js"]}
                />
                <ProjectCard
                    title={"LinkedIn-clone"}
                    link={"https://github.com/RiteshHajare/LinkedIn-clone"}
                    body={"Full-stack Responsive LinkedIn clone with Server-side Rendering."}
                    skills={["Next.js","Tailwind","HTML","MongoDB"]}
                />
                <ProjectCard
                    title={"Streaming-app"}
                    link={"https://github.com/RiteshHajare/Angular-youtube"}
                    body={"Angular based Application where user can upload, stream and add comments to videos after Authentication. "}
                    skills={["Angular","Node.js","Typescript","MongoDB"]}
                />
                {screenWidth >760 && <><ProjectCard
                    title={"News-website"}
                    link={"https://github.com/RiteshHajare/News-Website"}
                    body={"API based News Website with Authentication (Using salting and hashing) and saving multiple feedback from user to database. "}
                    skills={["Node.js","Express.js","EJS","HTML"]}
                />
                <ProjectCard
                    title={"Django-React"}
                    link={"https://github.com/RiteshHajare/DjangoReact"}
                    body={"Django and sqlite project integration with react to perform CRUD operations. "}
                    skills={["React.js","Django","sqlite"]}
                />
                <ProjectCard
                    title={"To-do list"}
                    link={"https://github.com/RiteshHajare/Keeper-App"}
                    body={"A to-do list web application that allows users to easily add and delete notes."}
                    skills={["Motoko","React.js","javascript","MongoDB"]}
                />
                <ProjectCard
                    title={"TweetMate"}
                    link={"https://tweetmateapp.netlify.app/"}
                    body={"Responsive landing page for social media microblogging platform."}
                    skills={["HTML","Bootstrap","CSS"]}
                /></>}
            </div>
        
    </section>
  )
}

export default Portfolio

// rgba(0,0,0,0.5)