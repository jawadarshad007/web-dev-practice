reactElment = {
    props:{
        children:"Hello Coder Army",
        className:"element",
        id:"first",
        style:{fontSize:"30px",backgroundColor:"orange", color:"purple" }
    }
}

function render(reactElment){
    // const element = document.createElement(reactElment.type)

    const {props} = reactElment;
    console.log(props
    )

}
render(reactElment)