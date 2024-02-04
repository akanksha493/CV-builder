import { useState, useRef } from 'react'
import GeneralInformation from './components/GeneralInformation.jsx'
import EducationalExperience from './components/EducationalExperience.jsx'
import './styles/App.css'
import './styles/general.css'
import WorkExperience from './components/WorkExperience.jsx'
import Preview from './components/Preview.jsx'
import {cv} from "./assets/autoFill.js"
import {useReactToPrint} from 'react-to-print'

function App() {
  const [generalInfo, setGeneralInfo] = useState({fname:"",lname:"",email:"",phno:"", linkedIn:""});
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  const loadSampleCV = () =>{
    setGeneralInfo(cv.general);
    setEducationInfo(cv.education);
    setWorkInfo(cv.work);
  }
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
    <main className='container' data-type="main">
      <div className="form-container">
        <div className="header">
          <h1>CV Builder</h1>
          <div className="preview-bttn-container">
            <button className='print-pdf bttn preview-bttn' onClick={handlePrint}><i className="fa-solid fa-file-pdf"></i>Print PDF</button>
            <button className='auto-fill bttn preview-bttn' onClick={loadSampleCV}><i className="fa-solid fa-pen-to-square"></i>AutoFill Resume</button>
          </div>
        </div>
        <div className="sections">
          <GeneralInformation changeHandler={setGeneralInfo} initial={generalInfo}/>
          <EducationalExperience changeHandler={setEducationInfo} initial={educationInfo} />
          <WorkExperience changeHandler={setWorkInfo} initial={workInfo}/>
        </div>
        
      </div>
      <div className="preview-outer-container">
        <Preview ref={componentRef} general={generalInfo} education={educationInfo} work={workInfo}/>
      </div>
    </main>
      
    </>
  )
}

export default App
