import React from 'react'
import Footer from '../Components/Hero/Footer';
const VideoComponent = ({ src, title }) => {
    return (
      <div className="video-container">
        <iframe
          width="100%"
          height="200"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '10px' }}
        ></iframe>
        <h3 className="video-title">{title}</h3>
      </div>
    );
  };
const Video = () => {
    // Array of video data containing src and title
  const videos = [
    { src: "https://www.youtube.com/embed/GsUyFLFozTU?si=o-B8qQt_yoUHuPLw" , title: "စာနာတတ်သော ဝက်ဝံကြီး" },
    { src: "https://www.youtube.com/embed/ipsEorDtP-o?si=rDOrRRYSI3imxybh", title: "ကောက်ကျစ်စဉ်းလဲ တဲ့ဗျိုင်းငှက်" },
    { src: "https://www.youtube.com/embed/FKZb0UYL7zA?si=dZ4uU8JWrO80C3u8", title: "အလိုကြီး အရနည်း"},
    { src: "https://www.youtube.com/embed/yJZ3ZC2HiyA?si=Y40pa9N35TJ2v8er", title: "ကုန်းချောသော မြေခွေး"},
    { src: "https://www.youtube.com/embed/BJhHWypDTnQ?si=6Xu7iRU6U3K-7m7g", title: "ကိုယ့်ကိုယ်ကို ဘဝင်မမြင့်ပါနဲ့"},
    { src: "https://www.youtube.com/embed/uo0sOheyT5E?si=DNJKiojzqpayNFuq", title: "ကြက်ကလေးပုံပြင်"},
    { src: "https://www.youtube.com/embed/VPqxRcHZxXw?si=Jl1WybKx3ViPxPho", title: "ဝံပုလွေ နဲ့ ဆိတ်ကလေး ၇ ကောင်"},
    { src: "https://www.youtube.com/embed/Ir-iJIfgoD4?si=r33QqYUd9_0kLJHS", title: "ဖားဘုရင် နဲ့ မြွေ "},
    { src: "https://www.youtube.com/embed/V63nPJdC4yc?si=QSCGpUKOChdAePnK", title: "ကျောင်းဝတ်စုံအသစ်လေး ကလေးပုံပြင်"},
    { src: "https://www.youtube.com/embed/6QWVwe1iy8A?si=HwZcnFkH3KlNwPzF", title: "အိမ်နီးချင်းအသစ် ကလေးပုံပြင်"},
    { src: "https://www.youtube.com/embed/K2QUwhdG2rg?si=_z9CMRAx3flzmvwl", title: "ဝက်ကလေးသုံးကောင်ပုံပြင်"}

  ];

  return (
   <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
      {videos.map((video, index) => (
        <VideoComponent key={index} src={video.src} title={video.title} />
      ))}
    </div>
   <Footer/>
   </>
  );
};


export default Video
