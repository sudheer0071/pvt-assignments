import { useState } from "react"

export function Assgnment1(){
  const [cover,setCover] = useState('https://img.freepik.com/free-vector/decorative-rose-gold-ethnic-patterned-background_1048-14467.jpg?size=626&ext=jpg')
  const [pfp, setPfp] = useState('https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D')
  
   return <div>
    <div className="profile-card">
      <div className="image"> 
          <img src={cover} alt="" />       
      </div>
      <div className="content">
        <div className="pfp"> 
            <img src={pfp} alt="" />
        </div>
         <div className="details">
         <h3>Rita Correia</h3>
         <p>London</p> 
         <div className="numbers">
           <div className="follower">
             <h3>80k</h3> 
             <p>Followers</p>
           </div>
           <div className="likes">
            <h3>808k</h3>
            <p>Likes</p>
           </div>
           <div className="photos">
            <h3>1.4k</h3>
            <p>Photos</p>
           </div>
         </div>
         </div>
      </div>
    </div>
   </div>
}