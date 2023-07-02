import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./PropertyDisplay.css";
const PropertyDisplay = () => {
  const media = [
    {
      id: 1,
      src: "images/img1.jpg",
    },
    {
      id: 2,
      src: "images/img2.jpg",
    },
    {
      id: 3,
      src: "images/img3.jpg",
    },
    {
      id: 4,
      src: "images/img4.jpg",
    },
    {
      id: 5,
      src: "images/img5.jpg",
    },
    {
      id: 6,
      src: "images/img6.jpg",
    },
    {
      id: 7,
      src: "images/img7.jpg",
    },
    {
      id: 8,
      src: "images/img8.jpg",
    },

    {
      id: 9,
      src: "videos/vid1.mp4",
    },
    {
      id: 10,
      src: "videos/vid2.mp4",
    },
    {
      id: 11,
      src: "videos/vid3.mp4",
    },
    {
      id: 12,
      src: "videos/vid4.mp4",
    },
  ];
  const isVideo = (path) => {
    return (
      path.endsWith(".mp4") ||
      path.endsWith(".avi") ||
      path.endsWith(".mkv") ||
      path.endsWith(".mov") ||
      path.endsWith(".webm") ||
      path.endsWith(".mpeg-1")
    );
  };
  const openCarousel = (id) => {
    console.log(id);
    return null;
  };
  /*const videoRef = useRef(null);

  const handleClick = () => {
    const videoId = "12345";
    console.log(videoId);

    // Pause the video
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };*/
  return (
    <div>
      <div className="container display-container">
        <div className="row display-row">
          <img src={media[0].src} alt={`Image ${media[0].id}`} width="100%" />
          {media.map((item) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-4 grid-item"
                key={item.id}
              >
                {isVideo(item.src) ? (
                  <video
                    src={item.src}
                    controls
                    width="100%"
                    //ref={videoRef}
                    //onClick={handleClick}
                    // height="300px"
                    onClick={() => openCarousel(item.id)}
                    style={{
                      objectFit: "cover",
                    }}
                  ></video>
                ) : (
                  <img
                    src={item.src}
                    alt={`Image ${item.id}`}
                    width="100%"
                    // height="300px"

                    onClick={() => openCarousel(item.id)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertyDisplay;
