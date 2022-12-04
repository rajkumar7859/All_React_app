import { useEffect, useRef, useState } from "react";

function VideoPlayer() {
  const [link, setLink] = useState("");
  const [addedLink, setAddedlink] = useState(null);
  // const [show, setShow] = useState(false);

  const VideoRef = useRef(null);

  const handlePlay = () => {
    VideoRef.current.play();
  };
  const handlePause = () => {
    VideoRef.current.pause();
  };

  const handleSkip = () => {
    const time = VideoRef.current.currentTime;
    VideoRef.current.currentTime = time + 10;
  };

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleAdded = () => {
    setAddedlink(link);
    setLink("")
    // console.log(addedLink);
  };
  useEffect(() => {
    VideoRef.current.src = `${addedLink}`;
  }, [addedLink]);
  return (
    <div>
      <h1>Video Player </h1>
      <input
        style={{ marginBottom: "10px" }}
        placeholder="Enter video url"
        type="url"
        onChange={handleChange}
        value={link}
      />
      <button disabled={link === ""} onClick={handleAdded}>
        Submit
      </button>
      {
        <div>
          <video ref={VideoRef} width="400" controls>
            {/* <source
          src={addedLink}
          type="video/mp4"
          // "https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
        /> */}
          </video>
          <br/>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleSkip}>Skip 10 Sec</button>
        </div>
      }
    </div>
  );
}
export default VideoPlayer;
