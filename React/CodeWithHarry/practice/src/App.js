import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
} from "react-router-dom";




function App() {
   const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type
      })

      setTimeout(() => {
         setAlert(null);
      }, 1500);
   }

   const removeBodyClasses = () => {
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-primary');
   }

   const toggleMode = (cls) => {
      removeBodyClasses();
      document.body.classList.add("bg-" + cls);
      if (mode === 'light') {
         setMode('dark')
         document.body.style.backgroundColor = "grey";
         showAlert("Dark Mode Has Been Enabled", "success");
         // document.title = 'TextUtils- Dark Mode';
         setInterval(() => {
            document.title = 'TextUtils is amazing';
         }, 1500);

         setInterval(() => {
            document.titlee = 'Install TextUtils Now';
         }, 3000);
      } else {
         setMode('light')
         document.body.style.backgroundColor = "white";
         showAlert("Light Mode Has Been Enabled", "success");
         // document.title = 'TectUtils - Light Mode';

      }
   }
   return (
      <>
         <Router>
            <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            {/* <Navbar/> */}
            <div className='container'>
               <Routes>
                  <Route exact path="/about" element={<About mode={mode} />}>
                  </Route>
                  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>

                  </Route>
               </Routes>
            </div>
         </Router>
      </>
   );
}

export default App;
