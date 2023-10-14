import { useEffect, useRef, useState } from "react"
export default function VideoPlayer(props) {
  const videoRef = useRef(null)
  function OpenScreenStream() {
    navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
    }).then(stream => {
      videoRef.current.srcObject = stream
    }).catch(err => {
      alert(err)
    })
  }
  useEffect(() => {
    console.log("VideroPlayer UserEffect")
  })
  return (<>
    <div className="video-player" >
      <video ref={videoRef} autoPlay={true}  ></video>
      <div className="control-bar">
        <button onClick={OpenScreenStream} >Screen Stream</button>
      </div>
    </div>
  </>)
}