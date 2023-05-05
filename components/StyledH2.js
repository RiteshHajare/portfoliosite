import Blast from "./Blast";

function StyledH2({title}) {
    
  return (
    <>{title.map((letter,index)=>{
        return(
            <Blast key={index} letter={letter} tcolor={"#08fdd8"} />
        )
    })}</>
  )
}

export default StyledH2