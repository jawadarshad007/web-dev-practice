import { useRef } from "react"



function Video() {

  const videoRef = useRef(null)

  function handleStart(){
    //  videoRef.current is video element ko refer kr rha ha
    videoRef.current.play()
  }

    function handleStop(){
    //  videoRef.current is video element ko refer kr rha ha
    videoRef.current.pause()
  }


  function handleRestart(){
    videoRef.current.currentTime = 0;
  }


  
  function handleBackward(){
    videoRef.current.currentTime = videoRef.current.currentTime -2;
  }

  function handleForward(){
    videoRef.current.currentTime = videoRef.current.currentTime + 2;
  }
  return (
    <>
    <video ref={videoRef} src="/testing.mp4" width="600px" height="400px" controls  muted></video>
    {/* Muje start/stop/pause vidoe ko krne ka lia muje is video element pr control chahiya , ya control muje useRef da ga 
    videoRef.current is video element ko refer kre ga */}
    <div style={{display:"flex" ,gap:"10px"}}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Pause</button>
        <button onClick={handleRestart}>Restart</button>

        <button onClick={handleBackward}>   ⏪ 2 sec </button>
         <button onClick={handleForward}>  2 sec ⏩</button>

    </div>
    </>
  )
}
export default Video