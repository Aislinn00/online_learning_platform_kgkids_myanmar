import React from 'react'
import HeroImg from '../Assets/hero1.jpg'
const Hero = () => {
  return (
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='py-16 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
      <div className="md:w-1/2">
        <img src={HeroImg}
                alt=""
                className="w-60 sm:w-80 lg:w-90 object-contain mx-auto"
              />
        </div>
        {/*texts */}
        <div className="md:w-1/2 space-y-4 px-4">
            <p className='md:text-3xl text-2xl font-bold md:leading-snug leading-snug'>မြန်မာဗျည်းအက္ခရာတွေကို ပျော်ပျော်ပါးပါး လေ့လာကြမယ်</p>
            <h2 className="text-2xl font-bold text-color2">KG Level</h2>
            <p className="text-xl">သင့်ကလေး၏ သင်ယူမှုခရီးကို ယနေ့စတင်ပါ။</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
