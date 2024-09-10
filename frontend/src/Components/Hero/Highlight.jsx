import React from 'react'
import Img from "../Assets/highlight.jpg"
import Img1 from "../Assets/highlight1.jpg"
import Img2 from "../Assets/highlight2.jpg"

const imageList = [
    {
        id: 1,
        img: Img,
        title: "LEARN",
    },
    {
        id: 2,
        img: Img1,
        title: "WATCH",
    },
    {
        id: 3,
        img: Img2,
        title: "PLAY",
    },
  ];

const Highlight = () => {
  return (
    <div>
      <div className="section-container">
      <h2 className="text-center font-bold text-3xl text-color3">HIGHLIGHTS</h2>
      {/*Highlight cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {
          imageList.map((item,i)=>(
            <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
              <img src={item.img} alt="" className="h-[330px] w-[300px] object-cover rounded-md"/>
              <h3 className='text-center text-2xl font-bold text-color1'>{item.title}</h3>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Highlight
