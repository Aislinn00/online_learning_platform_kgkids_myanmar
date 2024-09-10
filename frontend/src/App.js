import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lesson from './Pages/Lesson';
import LessonDetail from './Pages/LessonDetail'; // Import the LessonDetail component
import Video from './Pages/Video';
import { lesson_data } from './Components/Assets/lessondata'; // Import the lesson data
import Quiz from './Pages/Games/Quiz';
import Game1 from './Components/Games/Game1';
import Game2 from './Components/Games/Game2';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupForm from './Components/SignupForm/SignupForm';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/lesson" element={<Lesson lesson_data={lesson_data} />} /> {/* Pass lesson_data as props */}
          <Route path="/lesson/:lessonId" element={<LessonDetail lesson_data={lesson_data} />} /> {/* Pass lesson_data as props */}
          <Route path="/video" element={<Video />} />
          <Route path="/game" element={<Quiz/>} />
          <Route path='/game/game1' element={<Game1/>}/>
          <Route path='/game/game2' element={<Game2/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/signup' element={<SignupForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
