import React from 'react'
import './picture.css'

function Picture() {
  return (
    <div>
       <div style={{marginLeft:'50px' , marginTop:'80px'}} className='team'>
            <h3>Meet Our Teams</h3>
        </div>
    <div style={{display:'flex', justifyContent:'space-around',margin:'80px 50px'}} className='displaypicture'>
        <div>
            <img src="/tire.png" style={{width:'300px', height:'300px'}} alt="" />
        <div style={{ textAlign:'center' , backgroundColor:'#177D72', width:'300px',padding:'10px 10px', color:'white', borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px' }}>
            <div>
                <h4>Olaitan Tireloluwa</h4>
            </div>
            
            <div>
                <span>olaitantireloluwa@gmail.com</span>
            </div>
            <div>
                <h6>Team Member</h6>
            </div>
        </div>
        </div>

        <div>
            <img src="/favour.png" style={{width:'300px', height:'300px'}} alt="" />
        <div style={{ textAlign:'center' , backgroundColor:'#177D72', width:'300px',height:'',padding:'12px 12px', color:'white', borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px' }}>
            <div>
                <h4>Adebayo Favour</h4>
           
            <div>
                <span>favourayomide546@gmail.com</span>
            </div>
            <div >
                <h6>Team Member</h6>
            </div>
             </div>
            </div>
        </div>

         <div>
            <img src="/oyin.png" style={{width:'300px', height:'300px'}} alt="" />
            <div style={{ textAlign:'center' , backgroundColor:'#177D72', width:'300px',padding:'12px 12px', color:'white', borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px' }}>
            <div>
                <h4>Abesin Oyindamola</h4>
            </div>
            <div>
                <span>olaitantireloluwa@gmail.com</span>
            </div>
            <div>
                <h6>Team Member</h6>
            </div>
            </div>
        </div>

        </div>

    <div style={{display:'flex', justifyContent:'space-evenly', margin:'50px 50px'}} className='displaypicture2'>
         <div>
            <img src="/sam.png" style={{width:'300px', height:'300px'}} alt="" />
            <div style={{ textAlign:'center' , backgroundColor:'#177D72', width:'300px',padding:'12px 12px', color:'white', borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px' }}>
            <div>
                <h4>Ipinlaye Samuel</h4>
            </div>
            <div>
                <span>olaitantireloluwa@gmail.com</span>
            </div>
            <div>
                <h6>Team Member</h6>
            </div>
            </div>
        </div>

         <div>
            <img src="/ayo.png" style={{width:'300px', height:'300px' , borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} alt="" />
        <div style={{ textAlign:'center' , backgroundColor:'#177D72', width:'300px',padding:'12px 12px', color:'white', borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px' }}>
            <div>
                <h4>Olaitan Tireloluwa</h4>
            </div>
            <div>
                <span>olaitantireloluwa@gmail.com</span>
            </div>
            <div>
                <h6>Team Member</h6>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Picture;
