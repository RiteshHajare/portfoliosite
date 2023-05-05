import StyledH2 from "./StyledH2";

function Contactme() {
    const title = "Contact me".split("");
  return (
    <section className="sectione flex gap-12 items-center justify-between mt-10  relative">
        <div className="contactleft w-full flex flex-col gap-16 ml-24 relative">
            <h2 className="relative"><StyledH2 title={title} /> </h2>
            <div className="form flex flex-col gap-3 relative">
                <div className="nameemail flex gap-3">
                    <div className="inputpseudo w-full relative">
                        <input placeholder="Name" className="w-full inputbg h-12  relative" type="text" />
                    </div>
                    <div className="inputpseudo w-full relative">
                        <input placeholder="Email" className="w-full  inputbg h-12  relative" type="email" />
                    </div>
                </div>
                <div className="inputpseudo w-full relative">
                    <input placeholder="Subject" className="w-full  inputbg h-12 " type="text" />
                </div>
                <div className="inputpseudo w-full relative">
                    <textarea placeholder="Message" className="w-full  inputbg " name="" id="" rows="10"></textarea>
                </div>
            </div>
            <button 
            onMouseEnter={(e)=>{e.target.classList.add("blkcolor");}}
            onMouseLeave={(e)=>{e.target.classList.remove("blkcolor");}}
            className="contactbtn flex justify-center items-center float-right ml-auto relative"
            >Send message!
            </button>
        </div>
        <div className="contactright relative ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.7090647206!2d73.69814992360263!3d18.52487061430354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683279086025!5m2!1sen!2sin" width="600" height="800" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Contactme