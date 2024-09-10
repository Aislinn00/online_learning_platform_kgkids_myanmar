import React from 'react';
import HeroImg from '../Assets/hero.png';

const About = () => {
  return (
    <div className="section-container py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src={HeroImg} alt="Hero" className="w-full md:w-3/4 mx-auto" />
        </div>
        <div className="md:w-1/2">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-color3">အကြောင်းအရာ</h2>
            <p className="text-lg leading-7 text-color4 pr-5 text-justify">
            သူငယ်တန်းသင်ယူသူများအတွက် ရည်ရွယ်၍ မြန်မာအက္ခရာကို ကျွမ်းကျင်ရန် ဖန်တီးထားပါသည်။ စိတ်ဝင်စားစရာကောင်းသော ပုံပြင်များ၊ ဗျည်းအက္ခရာဆိုင်ရာ ကဗျာများနှင့် ဂိမ်းများကို ဖတ်ရှု လေ့လာ ဆော့ကစား နိုင်ပါသည်။
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
