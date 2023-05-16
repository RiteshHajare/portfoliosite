import { useRef, useState } from "react";
import StyledH2 from "./StyledH2";
import axios from "axios";

function Contactme() {
    const title = "Contact me".split("");
    const elementRef = useRef(null);
    const [form, setForm] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })
    const [isHidden, setIsHidden] = useState(true);
    const [message, setMessage] = useState("");
    const [contactRecieved, setContactRecieved] = useState(false);

    const handleChange = (e)=>{
        const {name,value}= e.target;
        setForm(prev=>{
            return{
                ...prev,[name]:value
            }
        })
    }

    const handleClick = ()=>{
        var validmail=true;
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email)){
                setMessage("Please, enter valid Email.");
                validmail=false;
                setIsHidden(false);
                setTimeout(()=>{setIsHidden(true);}, 5000);
                if(form.message==""){
                    setMessage("please, enter valid email and message.");
                        setIsHidden(false);
                        setTimeout(()=>{setIsHidden(true);}, 5000);
                        return;
                }
                // elementRef.current.style.setProperty('--after-bg-color', 'red');
              
        }else validmail=true;
        if(form.message==""){
            setMessage("please, enter your message.");
                setIsHidden(false);
                setTimeout(()=>{setIsHidden(true);}, 5000);
                return;
        }
        if(!validmail) return;
        axios.post("/api/contact",form).then(res=>{
            if(res.data.success){
                setForm({
                    name:"",
                    email:"",
                    subject:"",
                    message:""
                })
                setMessage("Thanks for contacting, will connect with you soon...");
                setIsHidden(false);
                setTimeout(()=>{setIsHidden(true);}, 5000);
            }else{
                setMessage("Some error occured,Please try again.");
                setIsHidden(false);
                setTimeout(()=>{setIsHidden(true);}, 5000);
            }
        })
    }

   
  return (
    <section className="sectione flex gap-12 items-center justify-between mt-10  relative">
        <div className="contactleft w-full flex flex-col gap-16 ml-24 relative">
            <h2 className="relative"><StyledH2 title={title} /> </h2>
            <div className="form flex flex-col gap-3 relative">
                <div className="nameemail flex gap-3">
                    <div className="inputpseudo w-full relative">
                        <input value={form.name} onChange={handleChange} name="name" placeholder="Name" className="w-full inputbg h-12  relative" type="text" />
                    </div>
                    <div ref={elementRef} className="inputpseudo w-full relative">
                        <input  value={form.email} onChange={handleChange} name="email" placeholder="Email" className="w-full  inputbg h-12  relative" type="email" />
                    </div>
                </div>
                <div className="inputpseudo w-full relative">
                    <input value={form.subject} onChange={handleChange} name="subject" placeholder="Subject" className="w-full  inputbg h-12 " type="text" />
                </div>
                <div className="inputpseudo w-full relative">
                    <textarea value={form.message} onChange={handleChange} name="message" placeholder="Message" className="border-transparent focus:border-transparent focus:ring-0 w-full  inputbg " rows="10"></textarea>
                </div>
            </div>
            <button 
            onMouseEnter={(e)=>{e.target.classList.add("blkcolor");}}
            onMouseLeave={(e)=>{e.target.classList.remove("blkcolor");}}
            onClick={handleClick}
            className="contactbtn flex justify-center items-center float-right ml-auto relative"
            >Send message!
            </button>
        </div>
        <div className="contactright relative ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.7090647206!2d73.69814992360263!3d18.52487061430354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683279086025!5m2!1sen!2sin" width="600" height="800" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {!isHidden && <div id="toast-warning" className="contacttoast absolute right-2 bottom-12 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Warning icon</span>
            </div>
            <div className="ml-3 text-sm font-normal text-blue-700">{message}</div>
            <button onClick={()=>{setIsHidden(true)}} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>}
    </section>
  )
}

export default Contactme