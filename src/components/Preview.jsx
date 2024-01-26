import "../styles/preview.css"
import React from "react";
import { months } from "../assets/month";

function capitalise(s){
    if(s.length==0) return s;
    return s[0].toUpperCase()+s.slice(1).toLowerCase();
}
function capitaliseWords(sentence){
    return sentence.split(" ").map((word)=>capitalise(word)).join(" ");
}
function RenderGeneral(props){
    let fullName = props.general.fname;
    fullName = capitalise(fullName);
    if(props.general.lname.length>0) fullName+=" "+capitalise(props.general.lname);
    const aboutInfo = [];
    if(props.general.email!=="")aboutInfo.push(props.general.email);
    if(props.general.phno!=="")aboutInfo.push(props.general.phno);

    return (
        <div className="general-container">
            <div className="name-heading">{fullName}</div>
            <div className="about-container">
                {aboutInfo.length>0 && aboutInfo.map((subHeading, index) => {
                    const content = (index<aboutInfo.length-1)?subHeading+" | ":subHeading;
                    return <span className="sub-about" key={index}>{content}</span>
                })}
            </div>
        </div>
    )

}
function RenderEducation(props){
    let startDate = new Date(props.data.startYear);
    let start = startDate.getFullYear();
    let endDate = new Date(props.data.endYear);
    let end = endDate.getFullYear();
    return(
        <div className="education-container">
            <div className="education-heading">
                <div className="title-heading">
                    <span className="organisation-name">{capitaliseWords(props.data.name)}</span> | <span className="course-name">{props.data.course}</span>
                </div>
                <div className="time-heading">
                    <span>{start}</span> - <span>{end}</span>
                </div>
            </div>
            <div className="education-content">
                <span className="marks">{props.data.gradeType} : {props.data.grade}</span>
                {props.data.gradeType==="Percentage"? "%":""}
            </div>
        </div>
    )
}
function RenderWork(props){
    let startDate = new Date(props.data.startMonth);
    let start = months[startDate.getMonth()]+", "+startDate.getFullYear();
    let end = "Present";
    if(!props.data.currentlyWorking){
        let endDate = new Date(props.data.endMonth);
        end = months[endDate.getMonth()]+", "+endDate.getFullYear();
    }
    const description = props.data.jobDescription.split("\n");

    return (
        <div className="work-container">
            <div className="work-heading">
                <div className="title-heading">
                    <span className="position-name">{props.data.position}</span> | <span className="company-name">{capitaliseWords(props.data.name)}, {props.data.location}{(props.data.workMode==="Remote")?", Remote":null}</span>
                </div>
                <div className="time-heading">
                    <span>{start}</span> - <span>{end}</span>
                </div>
            </div>
            <div className="work-content">
                {description.map((line, index) => {
                    return <li key={index}>{line}</li>;
                })}
            </div>
        </div>
    )
}
const Preview = React.forwardRef((props,ref) => {
    let educationSorted = props.education;
    educationSorted.sort((a,b) =>  new Date(b.endYear)- new Date(a.endYear));

    let workSorted = props.work;
    workSorted.sort((a,b)=> new Date(b.startMonth)-new Date(a.startMonth));
    return (
        <>
            <div className="container" data-type="preview" ref={ref}>
                <div className="preview-container">
                    {/* general  */}
                    <RenderGeneral general={props.general}/>
                    
                    {/* education  */}
                    {(educationSorted.length>0)?
                    <>
                        <div className="section-heading">Academic Qualification</div>
                        <hr/>
                        {educationSorted.map((data, index) => {
                            return <RenderEducation data={data} key={index}/>
                        })}
                    </>:null
                    }

                    {/* work  */}
                    {(workSorted.length>0)?
                    <>
                        <div className="section-heading">Work Experience</div>
                        <hr />
                        {workSorted.map((data, index)=>{
                            return <RenderWork data={data} key={index}/>
                        })}
                    </>:null
                    }
                </div>
            </div>
        </>
        
    );
});

Preview.displayName = "Preview";

export default Preview;