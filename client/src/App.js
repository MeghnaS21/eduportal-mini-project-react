
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/courses/Dashboard';
import MyCourses from './components/pages/MyCourses';
import Profile from './components/Profile';
import Grades from './components/Grades';
import MyProgress from './components/MyProgress';
import MyProjects from './components/MyProjects';
import MyTrainer from './components/MyTrainer';
import MyTeamMates from './components/MyTeamMates';
import Error from './common/Error';
import Trainees from './adminControls/trainees/Trainees';
import UseEffectAPI from './adminControls/trainees/useEffectAPI';
import { Provider } from 'react-redux';
import store from './components/store/store';



function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/myprogress" element={<MyProgress />} />
            <Route path="/myprojects" element={<MyProjects />} />
            <Route path="/mytrainer" element={<MyTrainer />}/>
            <Route path="/myteammates" element={<MyTeamMates />}/>
            <Route path="/trainees" element={<UseEffectAPI />}/>
            <Route path="*" element={<Error />}/>
          </Route >
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
