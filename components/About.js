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
            radiusMobile: 140,
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
                <p className="relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec viverra ligula. Aenean vestibulum porttitor magna, sit amet consectetur ligula.</p>
                <p className="relative">Sed vulputate lorem rhoncus tellus rhoncus tristique. Duis finibus semper luctus. In posuere, est id maximus imperdiet, dolor magna bibendum est, sit amet ullamcorper risus libero sed magna. Donec placerat fringilla hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p className="relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec viverra ligula. Aenean vestibulum porttitor magna, sit amet consectetur ligula.</p>
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