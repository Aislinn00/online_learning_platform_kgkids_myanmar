import React from 'react';
import { lesson_data } from '../Components/Assets/lessondata'; // Importing your lesson data
import { Link } from 'react-router-dom';
import Footer from '../Components/Hero/Footer';
const Lesson = () => {
  return (
    <>
     <div className="lesson-names-container p-5">
      <h2 className="text-xl font-bold mb-4">ဗျည်းအက္ခရာများ</h2>
      <div className="grid grid-cols-4 gap-4">
        {lesson_data.map(lesson => (
          <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
             <div className="bg-[#5EDC91] p-4 rounded-md text-center text-xl">{lesson.name}</div>
          </Link>
         
        ))}
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default Lesson;
