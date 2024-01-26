import { useState } from "react";

function Education(props){
    const [editOn, setEditOn] = useState(false);
    const [editedObj, setEditedObj] = useState(props.data);
    function handleEdit(){
        setEditOn(true);
    }
    function handleResubmit(e){
        e.preventDefault();
        setEditOn(false);
        props.handleUpdateEducation(editedObj,props.index);
    }
    return(
        <>
            {editOn?
            <form action="" onSubmit={handleResubmit}>
                <label htmlFor="uname" className="required">University Name</label>
                <input 
                    type="text" 
                    id="uname" 
                    className="uname"
                    name="name"
                    required
                    onChange={(e) => setEditedObj({
                        ...editedObj,
                        name:e.target.value
                    })}
                    value = {editedObj.name}
                />

                <label htmlFor="course" className="required">Course Name</label>
                <input 
                    type="text" 
                    id="course" 
                    className="course" 
                    required
                    onChange={(e) => setEditedObj({
                        ...editedObj,
                        course:e.target.value
                    })}
                    value={editedObj.course}
                />
                <div className="form-block">
                    <div className="input-block">
                        <label htmlFor="start" className="required">Start Year</label>
                        <input 
                            type="month" 
                            id="start"
                            className="start"
                            required
                            onChange={(e) => setEditedObj({
                                ...editedObj,
                                startYear:e.target.value
                            })}
                            value={editedObj.startYear}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="end" className="required">End Year (Expected)</label>
                        <input 
                            type="month" 
                            id="end"
                            className="end"
                            required
                            onChange={(e) => setEditedObj({
                                ...editedObj,
                                endYear:e.target.value
                            })}
                            value={editedObj.endYear}
                        />
                    </div>
                </div>
                <div className="form-block">
                    <div className="input-block">
                        <label htmlFor="grade-type" className="required">Grades Type</label>
                        <select 
                            name="grade-type" 
                            id="result-type" 
                            className="grade-type"
                            required
                            onChange={(e) => setEditedObj({
                                ...editedObj,
                                gradeType:e.target.value
                            })}
                            value={editedObj.gradeType}
                        >
                            <option value="Percentage">Percentage</option>
                            <option value="CGPA">CGPA</option>
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="grade" className="required">Grades</label>
                        <input 
                            type="number" 
                            name="grade" 
                            id="grade" 
                            className="grade"
                            required
                            onChange={(e) => setEditedObj({
                                ...editedObj,
                                grade:e.target.value
                            })}
                            value={editedObj.grade}
                        />
                    </div>
                </div>
                

                
                <button type="submit">Commit Change</button>
            </form>
            :
            <>
                <div>{props.data.name}</div>
                <div>{props.data.course}</div>
                <button onClick={handleEdit}>Edit</button>
            </>
            }
        </>
    )
}

function EducationalExperience(props){
    const [currentObj, setCurrentObj] = useState({
        name:"",
        course:"",
        startYear:"",
        endYear:"",
        gradeType:"Percentage",
        grade:""
    })
    
    function handleAddEducation(e){
        e.preventDefault();
        props.changeHandler([
            ...props.initial,
            currentObj
        ]);
        setCurrentObj({
            name:"",
            course:"",
            startYear:"",
            endYear:"",
            gradeType:"Percentage",
            grade:""
        });
    }
    function handleRemoveEducation(index){
        props.changeHandler(props.initial.filter((item, i) => i!==index));
    }
    function handleUpdateEducation(updatedObj, index){
        props.changeHandler(props.initial.map((item, i) => (i===index)?updatedObj:item));
    }
    
    return (
        <>
            <h2>Educational Qualification(s)</h2>
            {props.initial.map((data,index) => {
                return (
                    <>
                        <Education data={data} key={index} index={index} handleUpdateEducation={handleUpdateEducation}/>
                        <button onClick={() => handleRemoveEducation(index)}>Remove</button>
                    </>
                )
            })}
            <form action="" onSubmit={handleAddEducation}>
                <label htmlFor="uname" className="required">University Name</label>
                <input 
                    type="text" 
                    id="uname" 
                    className="uname"
                    name="name"
                    required
                    onChange={(e) => setCurrentObj({
                        ...currentObj,
                        name:e.target.value
                    })}
                    value = {currentObj.name}
                />

                <label htmlFor="course" className="required">Course Name</label>
                <input 
                    type="text" 
                    id="course" 
                    className="course" 
                    required
                    onChange={(e) => setCurrentObj({
                        ...currentObj,
                        course:e.target.value
                    })}
                    value={currentObj.course}
                />

                <div className="form-block">
                    <div className="input-block">
                        <label htmlFor="start" className="required">Start Year</label>
                        <input 
                            type="month" 
                            id="start"
                            className="start"
                            required
                            onChange={(e) => setCurrentObj({
                                ...currentObj,
                                startYear:e.target.value
                            })}
                            value={currentObj.startYear}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="end" className="required">End Year (Expected)</label>
                        <input 
                            type="month" 
                            id="end"
                            className="end"
                            required
                            onChange={(e) => setCurrentObj({
                                ...currentObj,
                                endYear:e.target.value
                            })}
                            value={currentObj.endYear}
                        />
                    </div>
                </div>

                <div className="form-block">
                    <div className="input-block">
                        <label htmlFor="grade-type" className="required">Grades Type</label>
                        <select 
                            name="grade-type" 
                            id="result-type" 
                            className="grade-type"
                            required
                            onChange={(e) => setCurrentObj({
                                ...currentObj,
                                gradeType:e.target.value
                            })}
                            value={currentObj.gradeType}
                        >
                        <option value="Percentage">Percentage</option>
                        <option value="CGPA">CGPA</option>
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="grade" className="required">Grades</label>
                        <input 
                            type="number" 
                            name="grade" 
                            id="grade" 
                            className="grade"
                            required
                            onChange={(e) => setCurrentObj({
                                ...currentObj,
                                grade:e.target.value
                            })}
                            value={currentObj.grade}
                        />
                    </div>
                </div>

                

                
                <button type="submit">Add To Resume</button>
            </form>
        </>
    );
}

export default EducationalExperience;