import React, { useRef, useState } from 'react';
import { MdPlayArrow } from 'react-icons/md';
import { IoArrowBack } from 'react-icons/io5';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Components/Hero/Footer';

const LessonDetail = ({ lesson_data }) => {
  const { lessonId } = useParams();
  const audioRef = useRef(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(
    lesson_data.findIndex(item => item.id === lessonId)
  );
  const totalLessons = lesson_data.length;
  const navigate = useNavigate();

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prevIndex => prevIndex - 1);
    }
  };

  const goToNextLesson = () => {
    if (currentLessonIndex < totalLessons - 1) {
      setCurrentLessonIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const selectedLesson = lesson_data[currentLessonIndex];

  if (!selectedLesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <>
    <div className="lesson-detail-container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex justify-center items-center">
      <div className='flex flex-col justify-center items-center p-5 relative'>
        <button onClick={handleGoBack} className="absolute top-0 left-0 mt-4 ml-4 font-bold px-4 py-2 rounded">
          <IoArrowBack/>
        </button>
        <div className="flex flex-col sm:flex-row items-center px-4">
          <div className='flex flex-col px-10'>
            <h2 className="text-3xl md:text-5xl mb-4 text-center">{selectedLesson.name}</h2>
            <div className='flex flex-row items-center mt-3'>
              <button onClick={playAudio} className="px-3">
                <MdPlayArrow className="inline-block size-10" />
              </button>
              <p className='ml-3 text-lg'>({selectedLesson.spelling})</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-[50%]'>
              <img src={selectedLesson.image} alt={selectedLesson.img_title} className="md:w-auto rounded-lg shadow-lg" />
            </div>
            <p className="italic text-lg mt-2">{selectedLesson.img_title}</p>
          </div>
        </div>
        <audio ref={audioRef} src={selectedLesson.audio} />
        <div className="mt-8">
          {currentLessonIndex !== 0 && (
            <button onClick={goToPreviousLesson} className="bg-[#009297] text-white font-bold px-4 py-2 rounded mr-4"> နောက်သို့</button>
          )}
          {currentLessonIndex !== totalLessons - 1 && (
            <button onClick={goToNextLesson} className="bg-[#009297] text-white font-bold px-4 py-2 rounded">ရှေ့သို့</button>
          )}
          {currentLessonIndex === totalLessons - 1 && (
            <div className="text-center mt-5">
              <p className="text-xl">သင်ခန်းစာများ ပြီးဆုံးသွားပါပြီ</p>
              <p className="text-xl mt-4">သင်ခန်းစာများ မှတ်မိနိုင်ဖိုအတွက် ဂိမ်းများ  ဆော့ကစားနိုင်ပါတယ်</p>
              <button onClick={() => navigate('/game')} className="bg-[#166C7F] text-white font-bold px-4 py-2 rounded mt-4">ဂိမ်း ဆီသို့</button>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LessonDetail;
