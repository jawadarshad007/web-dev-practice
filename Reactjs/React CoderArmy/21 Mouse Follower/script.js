const mouseFollower = document.querySelector(".mouse-follower")

let x=0 , y=0;

addEventListener("mousemove" , (e)=>{
    const {clientX , clientY} = e;
    console.log(clientX,clientY)

    // mouseFollower.style.top = clientY + "px"
    // mouseFollower.style.left = clientX + "px"
    // we do performance test in performance bar in Google dev tools
    // we find our website is not optimize yet , we have to reduce redering and painting 
    // therefore we not using .top and .left properties beacouse jab app top and left properties use krte ho to puri website ko calculate kia jata ha   is aik element ki position ka lia 
    // For optimazation we use transform property , and jab hm transform property use krte hn to sirf is element ko calculate kia jata ha naka full website ko
    x=clientX;
    y=clientY
})

function far(){
    mouseFollower.style.transform = `translate(${x}px , ${y}px)`
    requestAnimationFrame(far) // is ka kaam ya ka jab bhi aik frame calculate kia jahe ga, is sa pahle is fucntion ko call kr dena 
    // fps mean aik second ma kitne frame dekhne wale hn , aksar browser 60 fps support krte hn mean wo aik second ma user ko 60 frame dekhate hn
}
far();
