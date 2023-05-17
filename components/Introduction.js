import { useRouter } from "next/router";
import Blast from "./Blast";

function Introduction() {
  const router = useRouter();
  const h1 = "Hi,".split("");
  const h2 = "I'm Ritesh,".split("");
  const h3 = "web developer".split("");

 
  return (
    <section style={{lineHeight:"3.6rem"}} className="sectiona h-screen flex items-center py-8 tracking-tighter w-screen relative">
      <div className="">
        <div  className="text-7xl md:text-6.7 font-bold">
            <h1 className="firsth1 relative">
            {h1.map((letter, index) => {
                return <Blast key={index} letter={letter} tcolor={"white"} />;
            })}
            </h1>
            <h1 >{h2.map((letter, index) => {
                return <Blast key={index} letter={letter} tcolor={"white"} />;
            })}</h1>
            <h1 className="lasth1 relative">{h3.map((letter, index) => {
                return <Blast key={index} letter={letter} tcolor={"white"} />;
            })}</h1>
        </div>
        <p className="mt-8 pseudop">Full Stack Web Developer</p>
        <button
        onClick={()=>{router.push('#contactsect')}} 
        onMouseEnter={(e)=>{e.target.classList.add("blkcolor");}}
        onMouseLeave={(e)=>{e.target.classList.remove("blkcolor");}}
        className="contactbtn mt-6 flex justify-center items-center"
        >Contact me
        </button>
      </div>
      <div className="flex  gap-4 scrolldown absolute">
      <span>scroll down</span>
      <svg style={{rotate:"-90deg",width:"0.75rem"}} className="w-3" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" class=""></path></svg>
      </div>
      <div className="flex  gap-4 scrolldown2 absolute">
      <span>scroll down</span>
      <svg style={{rotate:"-90deg",width:"0.75rem"}}  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" class=""></path></svg>
      </div>
    </section>
  );
}

export default Introduction;
