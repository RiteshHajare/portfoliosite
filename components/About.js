import { useEffect, useRef } from "react";
import StyledH2 from "./StyledH2"
import TagCloud from "TagCloud"

function About() {
    const title = "About me".split("");
    const tagCloudRef = useRef(null);

    useEffect(() => {
        const container = ".tagcloudd";
        const texts = [
          "HTML",
          "CSS",
          "Javascript",
          "Bootstrap",
          "Tailwind",
          "React.js",
          "Next.js",
          "Angular",
          "Node.js",
          "Git/Github",
          "JQuery",
          "Jenkins",
          "Docker",
          "Python",
          "C++",
          "Mongoose",
          "EJS",
          "Typescript",
          "MaterializeCSS"
        ];

        const options = {
            radius: 300,
            radiusMobile: 160,
            radiusDesktop: 300,
            maxSpeed: "fast",
            initspeed: "normal",
            keep: true,
          };
          
      
        const setRadius = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth < 640) {
            options.radius = options.radiusMobile;
          }else {
            options.radius = options.radiusDesktop;
          }
        };
      
        setRadius();
        window.addEventListener("resize", setRadius);
      
        tagCloudRef.current = TagCloud(container, texts, options);
      
        return () => {
          tagCloudRef.current.destroy();
          window.removeEventListener("resize", setRadius);
        };
      }, []);
      
    
    // Handler for the onClick event on the paragraph element
    // const handleParagraphClick = () => {
    //     // Call the pause() method on the TagCloud instance using the reference
    //     tagCloudRef.current.pause();
    // };

    return (
    <section className="sectionc flex items-center mt-8  gap-10">
        <div className="leftabout flex flex-col gap-9">
            <h2 className="relative"><StyledH2 title={title} /></h2>
            <div className="aboutbody flex flex-col gap-3">
                <p className="relative">I am an enthusiastic and driven undergraduate computer engineering student with a passion for full stack web development.</p>
                <p className="relative">From a young age, I exhibited an inherent curiosity and interest in technology. Fascinated by the way websites and applications seamlessly interacted, they embarked on a journey to understand the intricacies of web development.</p>
                <p className="relative">This passion led me to pursue a degree in computer engineering, where i learned technical skills and acquired a strong foundation in computer science.</p>
            </div>
        </div>
        <div className="rightabout">
            <span className="tagcloudd"></span>
        </div>
    </section>
    );
}

export default About;

// npm package for image preview on image click