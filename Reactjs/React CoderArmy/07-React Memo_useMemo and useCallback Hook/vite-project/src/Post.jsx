import React from "react";



const Post = React.memo(({value})=>{

    console.log("Check Post component re-render")
    return (
        <>
        <h1>Your name is {value.name} and age {value.age}</h1>
        </>
    )
})

export default Post;