import React from 'react'
import jawadImage from "/src/assets/jawadImage.jfif"
import "./Usercard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        {/* <img id='user-img' src="/src/assets/jawadImage.jfif" alt="image" /> */}
        <img id='user-img' src={props.image} alt={props.name} />
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
