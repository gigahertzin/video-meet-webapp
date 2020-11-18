import React, { useEffect, useRef, useState } from "react";
import "./permission.css";
import client from "socket.io-client";
import { useParams } from "react-router-dom";
function Permission() {
  const [mic, setMic] = useState(true);
  const [vid, setVid] = useState(true);
  const [first, setFirst] = useState(true);
  const micHandler = () => {
    setMic(!mic);
    setConstraints({
      ...constraints,
      audio: !constraints.audio,
    });
  };
  const vidHandler = () => {
    setVid(!vid);
    setConstraints({
      ...constraints,
      video: !constraints.video,
    });
  };
  const [constraints, setConstraints] = useState({ audio: true, video: true });
  const [localStream, setLocalStream] = useState({});
  const videoSrc = useRef(null);
  useEffect(() => {
    (async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia(
        constraints
      );
      setLocalStream(mediaStream);
      if (constraints.video == false) {
        localStream.getTracks().forEach(function (track) {
          if (track.readyState == "live" && track.kind === "video") {
            videoSrc.current.srcObject = null;
            track.stop();
          }
        });
      } else {
        videoSrc.current.srcObject = mediaStream;
      }
    })();
  }, [constraints]);
  const { roomId } = useParams();
  const ENDPOINT = "http://192.168.43.238:5000";
  const initVideoConnection = () => {
    const socket = client(ENDPOINT);
  };
  const makeConnection = () => {};
  return (
    <div className="permission d-flex">
      <div className="permit mx-5 my-5">
        <video ref={videoSrc} autoPlay muted={true}></video>
        <div className="d-flex icons">
          <div className="mic mt-4">
            {mic ? (
              <i className="fas fa-volume-up" onClick={micHandler}></i>
            ) : (
              <i className="fas fa-volume-mute" onClick={micHandler}></i>
            )}
          </div>
          <div className="vid mt-4">
            {vid ? (
              <i className="fas fa-video" onClick={vidHandler}></i>
            ) : (
              <i className="fas fa-video-slash" onClick={vidHandler}></i>
            )}
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div className="accept">
          <h4 className="join">Ready to Join?</h4>
          <button type="button" class="btn" onClick={makeConnection}>
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Permission;
