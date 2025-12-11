import './contact.css'
import { useState } from 'react'

function Contact() {
  const [name , usename]= useState("")
  const [error , useerror]= useState("")

  const [phone , usephone]= useState("")
  const [errorphone , useerrorphone]= useState("")

  const [email , useemail]= useState("")
  const [erroremail , useerroremail]= useState("")

  const [address , useaddress]= useState("")
  const [erroraddress , useerroraddress]= useState("")

  const [message , setmessage] = useState(false)

  const getintouch = (e) => {
  e.preventDefault();

  let valid = true; 


  if (!name) {
    useerror("Fill in your name");
    valid = false;
  } else {
    useerror("");
  }

  
  if (!phone) {
    useerrorphone("Enter your phone number");
    valid = false;
  } else if (!/^\d{6,}$/.test(phone)) {
    useerrorphone("Phone number must be at least 6 digits");
    valid = false;
  } else {
    useerrorphone("");
  }

  // Email validation
  if (!email) {
    useerroremail("Enter your email");
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    useerroremail("Invalid email");
    valid = false;
  } else {
    useerroremail("");
  }

  // Address validation
  if (!address) {
    useerroraddress("Fill in your address");
    valid = false;
  } else {
    useerroraddress("");
  }

  if (valid) {
    setmessage(true);
  }
};

  return (
    <>
          <div className='contactbackground'>

    <div className='container'>


      <div className='leftdetail'>
      <div className='contact'>
      <h1>Contact us</h1>
      </div>

      <div className='home'>
        <span>Home <span><img src="/arrow.png" className='arrowimage' alt="" /></span> Contact us</span>
      </div>

      <div className='touch'>
        <h2>Get in Touch</h2>
      </div>

      <div className='notes'>
        <p>
          Get in Touch for support, inquiries, or partnership opportunities. We’d love to hear from you 
          reach out to us anytime.Have questions? Contact us and we’ll respond promptly.
          Stay connected with us for updates and assistance.
        </p>
      </div>

    <div className='alladdress'>

      <div className='address'>
        <div>
        <img src="/emails.png" className='email' alt="" />
        </div>
        <div>
        <h5>Email Address</h5>
        <span>aptech-agodi@bidspirit.com</span>
        </div>
      </div>

      <div className='address'>
        <div>
        <img src="/telephone.png" className='email' alt="" />
        </div>
        <div>
        <h5>Phone Number</h5>
        <span>+21 345 689 423-Office</span>
        </div>
      </div>

      <div className='address'>
        <div>
        <img src="/address.png" className='email' alt="" />
        </div>
        <div>
        <h5>Our Address</h5>
        <span>Aptech - Agodi west one, Ibadan Oyo State</span>
        </div>
      </div>
</div>
      </div>
    

  <div className='form'>
      <div className='info'>
        <div>
        <label htmlFor="name"  className='name'>Your name (required)</label><br/>
        <input type="text" onChange={(e)=>usename(e.target.value)} className='textinput' placeholder='your name' required />
        <div>
          <small style={{color:'red'}}>{error}</small>
        </div>
        </div>

        <div>
        <label htmlFor="phone"  className='name'>Your phone (required)</label><br/>
        <input type="number" onChange={(e)=>usephone(e.target.value)} className='input' placeholder='your phone' required />
        <div>
          <small style={{color:'red'}}>{errorphone}</small>
        </div>
        </div>
      </div>

    <div className='info'>
        <div>
        <label htmlFor="e-mail"  className='name'>Your E-mail (required)</label><br/>
        <input type="email" onChange={(e)=>useemail(e.target.value)} className='textinput' placeholder='your email' required />
        <div>
          <small style={{color:'red'}}>{erroremail}</small>
        </div>
        </div>

        <div>
        <label htmlFor="address"  className='name'>Your address (required)</label><br/>
        <input type="address" onChange={(e)=>useaddress(e.target.value)} className='textinput' placeholder='your address' required />
        <div>
          <small style={{color:'red'}}>{erroraddress}</small>
        </div>
        </div>
    </div>

    <div>
      <button className='Touchs' onClick={getintouch}>Get in touch</button>
    </div>
  </div>

    </div>
 
    </div>
    </>
  )
}

export default Contact;
