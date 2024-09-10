import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Hero/Footer";
import QuizImg from "../../Components/Assets/quiz.jpg";

const Quiz = () => {
  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-8">ဂိမ်းများ</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 w-[60%] h-[50%]">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Game 1</h2>
            <div className="flex flex-col justify-center items-center">
              <img
                src={QuizImg}
                title="Quiz1"
                className="w-full max-w-md"
                alt="Game 1"
              />
              <p className="text-m font-semibold mb-4 leading-7">
                <span className="text-lg mb-2">ဆော့ကစားနည်း </span><br/>
                လေးထောင့်ကွက်တစ်ခုစီတွင် စာလုံးပါရှိပါတယ် <br/>
                လေးထောင့်ကွက်အထက်တွင်  ဖော်ပြထားသော အက္ခရာနှင့်  ကိုက်ညီသော စတုရန်းအကွက်ကို ရှာပြီး  အဖြေမှန်ကိုနှိပ်ပါ<br/>
                မှန်ကန်သော အဖြေများ အတွက် အမှတ် များရယူပြီး ရနိုင်သလောက် အမှတ်မြင့်အောင် ကြိုးစား ဆော့ကြည့်ပါ
              </p>
              <button className="bg-[#00B89D] text-white px-4 py-2 rounded-lg">
                <Link to="/game/game1">Play Game 1</Link>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Game 2</h2>
            <div className="flex flex-col justify-center items-center">
              <img
                src={QuizImg}
                title="Quiz2"
                className="w-full max-w-md"
                alt="Game 2"
              />
              <p className="text-m font-semibold mb-4 leading-7">
                <span className="text-lg mb-2">ဆော့ကစားနည်း </span><br/>
                ပုံလေးပုံအထက်တွင်  ဖော်ပြထားသော အက္ခရာကို ကိုယ်စားပြုသော ပုံကို ရွေးပါ <br/>
                လေးထောင့်ကွက်အထက်တွင်  ဖော်ပြထားသော အက္ခရာနှင့်  ကိုက်ညီသော စတုရန်းအကွက်ကို ရှာပြီး  အဖြေမှန်ကိုနှိပ်ပါ<br/>
                မှန်ကန်သော အဖြေများ အတွက် အမှတ် များရယူပြီး ရနိုင်သလောက် အမှတ်မြင့်အောင် ကြိုးစား ဆော့ကြည့်ပါ
              </p>
              <button className="bg-[#00B89D] text-white px-4 py-2 rounded-lg">
                <Link to="/game/game2">Play Game 2</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
