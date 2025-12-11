import Picture from '../../components/pictures/picture';
import './about.css'

function About() {
  return (
    <div className='containerabout'>
    <div className='imagepositive' style={{ }}>
        <img 
            src="/main.png" 
            className='imagepostive'
            style={{ }} 
            alt="" 
            
        />

        <div className='imagepostiver'  style={{
            
        }}>
            <h1>About us</h1>

            <p className='imagepostiverse' style={{  }}>
            BidSpirit is a real-time online bidding platform that connects 
            buyers and sellers to discover great value through smart, 
            secure auctions.
            </p>

            <button className='explore' style={{
            }}>
            Start Exploring
            </button>
        </div>
    </div>

        <div className='Allnote' style={{}}>
            <div className='notes' style={{}}>
            <div className='noters' style={{}}>
            <p>
                We are a global asset management and disposition company, offering customers end-to-end solutions for buying and selling used heavy equipment, trucks and other assets. How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious.
            </p>
            </div>

            <div>
                <h3>Online Bidding</h3>
            </div>

            <div className='noters' style={{}}>
                <p>
                    The modern world is in a continuous movement and people everywhere are looking for quick, safe means of accessing accurate information. Prompt information is vital.
                </p>
            </div>

            <div>
                <h3>Corporate Social Responsibility</h3>
            </div>

            <div className='notres' style={{}}>
                <p>
                    The modern world is in a continuous movement and people everywhere are looking for quick, safe means of accessing accurate information. Prompt information is vital.
                </p>
            </div>
        </div>

            <div>
                <img src="/creatework.png" className='creatework' style={{}} alt="" />
            </div>
    </div>
        
        <div style={{margin:'50px'}} className='industries'>
            <h3>Explore our industries</h3>
        </div>

   <div className='creating' style={{}}>

            {/* CARD 1 */}
            <div style={{flexDirection:'column'}}>
            <div>
            <div className="card">
                <img 
                src="/Group2.png"
                style={{ width: '350px', height:'282px', borderRadius:'20px' }}
                alt=""
                />
                
                <img 
                src="/Group1.png"
                className="top-image"
                alt=""
                />
            </div>
            </div>
            <div style={{textAlign: 'center'}}> <h4>Arts</h4></div>
            </div>
           

            {/* CARD 2 */}
            <div style={{flexDirection:'column'}}>
            <div>
            <div className="card">
                <img 
                src="/furniture.png"
                style={{ width: '350px', height:'282px', borderRadius:'20px' }}
                alt=""
                />

                <img 
                src="/Group1.png"
                className="top-image"
                alt=""
                />
            </div>
            </div>
             <div style={{textAlign: 'center'}}> <h4>Collectibles</h4></div>
             </div>

            {/* CARD 3 */}
            <div style={{flexDirection:'column'}}>
            <div>
            <div className="card">
                <img 
                src="/artque.png"
                style={{ width: '350px', height:'282px', borderRadius:'20px' }}
                alt=""
                />

                <img 
                src="/Group1.png"
                className="top-image"
                alt=""
                />
            </div>
            </div>
             <div style={{textAlign: 'center'}}> <h4>Furniture</h4></div>
            </div>

            {/* CARD 4 */}
            <div style={{flexDirection:'column'}}>
            <div>
            <div className="card">
                <img 
                src="/chain.png"
                style={{ width: '350px', height:'282px', borderRadius:'20px' }}
                alt=""
                />

                <img 
                src="/Group1.png"
                className="top-image"
                alt=""
                />
            </div>
            </div>
             <div style={{textAlign: 'center'}}> <h4>Antiques</h4></div>
             </div>

    </div>
    <div style={{display:'flex', gap:'10%' , marginTop:'15%', marginBottom:'5%', alignItems:'center', justifyContent:'center'}} className='ourcontact'>
    <div style={{display:'flex'}}>
        <div>
            <img src="/emails.png" style={{width:'30px'}} alt="" />
        </div>
        <div>
            <h5 style={{fontSize:'20px' , fontWeight: 'bolder' }}>Email Address</h5>
            <span style={{fontSize:'13px' , fontWeight: 'lighter'}}>BidSpirit@gmail.com</span>
        </div>
    </div>

    <div style={{display:'flex'}}>
        <div>
            <img src="/number.png" style={{width:'30px'}} alt="" />
        </div>
        <div>
            <h5 style={{fontSize:'20px' , fontWeight: 'bolder' }}>Phone Number</h5>
            <span style={{fontSize:'13px' , fontWeight: 'lighter'}}>+21 345 689 423-Office</span>
        </div>
    </div>

    <div style={{display:'flex'}}>
        <div>
            <img src="/control.png" style={{width:'30px'}}  alt="" />
        </div>
        <div>
            <h5 style={{fontSize:'18px' , fontWeight: 'bolder' }}>Our Address</h5>
            <span style={{fontSize:'13px' , fontWeight: 'lighter'}}>BidSpirit@gmail.com</span>
        </div>
    </div>
    </div>
    <Picture />
</div>
  )
}

export default About;
