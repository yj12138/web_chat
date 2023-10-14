import { useEffect, useRef, useState } from "react"

import { IsPC } from "../utils/platform"

export default function RoomPlayer(props) {
  const videoRef = useRef(null)

  function ShareScreen() {
    navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
    }).then(stream => {
      videoRef.current.srcObject = stream
    }).catch(err => {
      alert(err)
    })
  }
  function ShareCamera() {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    }).then(stream => {
      videoRef.current.srcObject = stream
    }).catch(err => {
      alert(err)
    })
  }
  return (<>
    <div className="video-player" >
      <video ref={videoRef} autoPlay={true}  ></video>
      <div className="control-bar">
        {IsPC() ? (
          <button onClick={ShareScreen} >Screen Share</button>
        ) : (
          <button onClick={ShareCamera} >Camera Share</button>
        )}
      </div>
    </div>
  </>)
}