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
  const [generalInfo, setGeneralInfo] = useState({fname:"",lname:"",email:"",phno:""});
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
        <h1>CV Builder</h1>
        <GeneralInformation changeHandler={setGeneralInfo} initial={generalInfo}/>
        <EducationalExperience changeHandler={setEducationInfo} initial={educationInfo} />
        <WorkExperience changeHandler={setWorkInfo} initial={workInfo}/>
      </div>
      <div className="preview-outer-container">
        <div className="bttn-container">
          <button className='print-pdf preview-bttn' onClick={handlePrint}>Print PDF</button>
          <button className='auto-fill preview-bttn' onClick={loadSampleCV}>AutoFill Resume</button>
        </div>
        <Preview ref={componentRef} general={generalInfo} education={educationInfo} work={workInfo}/>
      </div>
    </main>
      
    </>
  )
}

export default App
