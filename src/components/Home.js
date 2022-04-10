import React, { Component } from 'react'
import './Home.css'
import menu_icon from '../images/menu_icon.png'
import cart_icon from '../images/cart3.png'
import search_icon from '../images/search.png'
import seeding_icon from '../images/seeding.png'
import customer_service_icon from '../images/customer_service.png'
import design_icon from '../images/design.png'
import star_icon from '../images/star.png'
import rect_icon from '../images/rect.png'
import image1 from '../dummy_images/image1.png'
import image2 from '../dummy_images/image2.png'
export class Home extends Component {
  render() {
    
    var card_item=[{name:"Eco-friendly Material",icon:seeding_icon},{name:"Eco-friendly Material",icon:design_icon},{name:"Eco-friendly Material",icon:customer_service_icon}];
    var filter=[{name:"KL",active:true},{name:"Pending",active:false},{name:"Johor",active:false}];
    var products=[{name:"Yellow Almond",image:image1,price:"16,000",rating:"4.4"},{name:"Grey Glossy",image:image2,price:"16,000",rating:"4.4"},{name:"Petaling Jaya",image:image1,price:"16,000",rating:"4.4"},{name:"Dark Grey",image:image2,price:"16,000",rating:"4.4"}];
    var products2=[{name:"Dark Theme Cabinet",image:image1,price:"16,000"},{name:"Grey Theme Cabinet",image:image2,price:"17,000"}];
    return (
      <>
        <div className='body'>
            {/* Navbar */}
            <div style={{height:"34px",display:"flex",flexDirection:"row",margin:"15px",alignItems:"center"}}>
                <div style={{height:"20px",aspectRatio:"1",backgroundImage:`url(${menu_icon})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}></div>
                <div style={{height:"100%",aspectRatio:"1",flexGrow:"1",margin:"0px 25px",position:"relative"}}>
                    <input style={{background:"white",fontSize:"13px",borderRadius:"50px",width:"100%",height:"100%",border:"none",outline:"none",padding:"0px 30px 0px 15px"}} placeholder="Search..."></input>
                    <div style={{height:"16px",aspectRatio:"1",backgroundImage:`url(${search_icon})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",position:"absolute",right:"12px",top:"0px",bottom:"0px",marginTop:"auto",marginBottom:"auto"}}></div>
                </div>
                <div style={{height:"21px",aspectRatio:"1",backgroundImage:`url(${cart_icon})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}></div>
            </div>
            {/* get quote card */}
            <div className='shadow1' style={{margin:"20px 24px",height:"86px",backgroundColor:"white",borderRadius:"16px",display:"flex",flexDirection:"row"}}>
                <div style={{flex:"1",margin:"10px 20px"}}>
                    <div style={{fontSize:"16px",fontWeight:"700"}}>
                        Kitchen Cabinets
                    </div>
                    <div style={{fontSize:"10px",fontWeight:"400",width:"123px"}}>
                        Customize your kitchen cabinets & get prices instanly online
                    </div>
                </div>
                <div className='center' style={{height:"100%",flex:"1"}}>
                    <button style={{background:"#FEB546",color:"#2C2934",fontWeight:"600",fontSize:"12px",width:"88px",height:"32px",borderRadius:"50px",border:"none"}}>
                        Get Quote
                    </button>
                </div>
                
            </div>
            {/* body card */}
            <div style={{marginTop:"24px",height:"213px",borderRadius:"30px 30px 0px 0px",backgroundColor:"#2C2934",position: "relative",overflow:"hidden",zIndex:"0px"}}>
                <svg style={{position:"absolute",top:"0px",left:"0px",zIndex:"0px"}} width="251" height="95" viewBox="0 0 251 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-65.6 -85.314C-54.222 -119.517 -39.0405 -157.542 7.0367 -163.203C52.696 -168.813 99.8082 -136.609 143.366 -110.988C186.796 -85.4409 237.565 -59.3478 248.182 -21.3574C259.069 17.6013 227.599 46.6658 193.418 68.1192C160.667 88.6749 118.03 100.8 69.6303 90.7095C20.4931 80.4652 -25.4381 52.4423 -52.8362 16.7794C-79.0031 -17.2809 -76.3104 -53.1176 -65.6 -85.314Z" fill="#221D2E"/>
                </svg>
                <svg style={{position:"absolute",bottom:"0px",right:"0px",zIndex:"0"}} width="169" height="143" viewBox="0 0 169 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M156.619 0.0069059C199.874 -0.363812 240.925 14.212 267.586 38.6594C293.95 62.8347 303.733 94.8128 292.259 124.387C281.378 152.431 247.52 170.552 211.319 183.686C173.945 197.246 132.496 207.1 93.2657 196.583C49.6585 184.891 11.1362 160.257 1.83527 127.523C-7.27643 95.4542 18.9723 65.2113 48.9273 40.5334C76.9387 17.4568 113.978 0.372373 156.619 0.0069059Z" fill="#221D2E"/>
                </svg>
                <div style={{zIndex:"100px",height:"92px",margin:"30px 20px",display:"flex",justifyContent:"space-between",position:"relative"}}>
                    {
                        card_item.map((item,key)=>
                        {
                            return this.GetItemCard(item,key);
                        })
                    }
                </div>
            </div>
            {/* body card2 */}
            <div style={{marginTop:"-60px",borderRadius:"30px 30px 0px 0px",backgroundColor:"white",position: "relative",overflow:"hidden",zIndex:"0px",padding:"25px 15px"}}>
                <div style={{fontSize:"15px",fontWeight:"600",color:"#414141"}}>EXPLORE OUR Showrooms</div>
                <div style={{margin:"15px 0px 0px 0px",display:"flex",justifyContent:"start",position:"relative"}}>
                    {
                        filter.map((item,key)=>
                        {
                            return this.GetFilterItem(item,key);
                        })
                    }
                </div>
                <div style={{margin:"20px 0px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",position: "relative",}}>
                    {
                        products.map((item,key)=>
                        {
                            return this.GetProductItem(item,key);
                        })
                    }
                </div>
                 <div style={{margin:"25px 0px",height:"80px",backgroundColor:"#221D2E",borderRadius:"16px",display:"flex",flexDirection:"row",justifyContent:"space-between",overflow:"hidden",position:"relative"}}>
                    <div style={{flex:"1.4",margin:"10px 0px 0 20px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <div style={{fontSize:"15px",fontWeight:"600",color:"white"}}>
                            Get Custom Cabinet Now
                        </div>
                        <div style={{fontSize:"9px",fontWeight:"400",color:"white"}}>
                            To get your custom cabinet quote Click here!
                        </div>
                    </div>
                    <div className='center' style={{flex:"1"}}>
                        <button className='center' style={{background:"#FEB546",color:"#2C2934",fontWeight:"600",fontSize:"12px",width:"88px",height:"32px",borderRadius:"50px",border:"none"}}>
                            Quote Now
                        </button>
                    </div>
                    <div style={{position:"absolute",right:"-2px",bottom:"-2px"}}>
                        <div style={{height:"38px",width:"55px",backgroundImage:`url(${rect_icon})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}></div>
                    </div>
                </div>
                <div style={{margin:"10px 0px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{fontSize:"15px",fontWeight:"600",color:"#414141"}}>OUR PREVIOUS JOBS</div>
                    <div className='center' style={{width:"88px",height:"32px",background:`#2C2934`,borderRadius:"50px",marginRight:"6px"}}>
                        <div style={{color:`white`,fontSize:"12px",fontWeight:"600"}}>
                           View All
                        </div>
                    </div>
                </div>
                <div style={{margin:"15px 0px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",position: "relative",}}>
                    {
                        products2.map((item,key)=>
                        {
                            return this.GetProductItem2(item,key);
                        })
                    }
                </div>
            </div>
        </div>
      </>
    )
  }

  GetItemCard=(item,key)=>{
      return(
        <>
            <div key={key} style={{width:"91px",height:"92px",background:"#3B3845",borderRadius:"16px",padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <div style={{height:"29px",width:"29px",backgroundImage:`url(${item.icon})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}></div>
                <div style={{color:"#FFFFFF",opacity:"70%",fontSize:"12px"}}>
                    {item.name}
                </div>
            </div>
        </>
      )
  }
  GetFilterItem=(item,key)=>{
    return(
      <>
          <div key={key} className='center' style={{width:"81px",height:"32px",background:`${item.active?"#2C2934":"white"}`,borderRadius:"50px",marginRight:"6px"}}>
              <div style={{color:`${item.active?"#FFFFFF":"#797979"}`,fontSize:"12px"}}>
                  {item.name}
              </div>
          </div>
      </>
    )
  }
  GetProductItem=(item,key)=>{
    return(
      <>
        <div style={{width:"157px",height:"244px",position:"relative"}}>
            <div className='shadow2' key={key}  style={{width:"157px",height:"220px",background:`white`,borderRadius:"20px",position:"absolute",top:`${key%2===0?"0px":"24px"}`,bottom:`${key%2===0?"24px":"0px"}`,left:"0px",padding:"8px",}}>
                <div style={{borderRadius:"16px",height:"100%",width:"100%",backgroundImage:`url(${item.image})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"}}>
                    <div style={{height:"55px",width:"125px",background:"white",color:`${item.active?"#FFFFFF":"#797979"}`,fontSize:"12px",position:"absolute",bottom:"8px",left:"8px",right:"8px",borderRadius:"12px",padding:"10px 10px 10px 12px"}}>
                        <div style={{color:"#333333",fontSize:"13px",fontWeight:"600"}}>
                            {item.name}
                        </div> 
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div style={{color:"#525252",fontSize:"11px",fontWeight:"600"}}>RM</div>
                                <div style={{marginLeft:"2px",color:"#797979",fontSize:"11px",fontWeight:"600"}}>{item.price}</div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <div style={{height:"9px",width:"10px",backgroundImage:`url(${star_icon})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}></div>
                                <div style={{marginLeft:"2px"}}>{item.rating}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
          
      </>
    )
  }
  GetProductItem2=(item,key)=>{
    return(
      <>
        <div style={{width:"157px",height:"220px",position:"relative"}}>
            <div className='shadow2' key={key}  style={{width:"100%",height:"100%",background:`white`,borderRadius:"20px"}}>
                <div style={{borderRadius:"16px",height:"100%",width:"100%",backgroundImage:`url(${item.image})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",overflow:"hidden"}}>
                    <div style={{height:"55px",background:"white",color:`${item.active?"#FFFFFF":"#797979"}`,fontSize:"12px",position:"absolute",bottom:"0px",left:"0px",right:"0px",padding:"10px 10px 10px 12px"}}>
                        <div style={{color:"#333333",fontSize:"13px",fontWeight:"600"}}>
                            {item.name}
                        </div> 
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div style={{color:"#525252",fontSize:"11px",fontWeight:"600"}}>RM</div>
                                <div style={{marginLeft:"2px",color:"#797979",fontSize:"11px",fontWeight:"600"}}>{item.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
          
      </>
    )
  }
}
export default Home