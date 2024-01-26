import {useState} from "react"

function Work(props){
    const [editOn, setEditOn] = useState(false);
    const [editedObj, setEditedObj] =useState(props.data);

    function handleEdit(){
        setEditOn(true);
    }
    function handleResubmit(e){
        e.preventDefault();
        setEditOn(false);
        props.handleUpdateWork(editedObj,props.index);
    }

    return(
        <>
            {editOn?
            <form action="" onSubmit={handleResubmit}>
                <label htmlFor="oname" className="required">Organization Name</label>
                <input 
                    type="text" 
                    id="oname" 
                    className="oname"
                    required
                    onChange={(e) => setEditedObj({
                        ...editedObj,
                        name:e.target.value
                    })}
                    value={editedObj.name}
                />

                <label htmlFor="position" className="required">Position</label>
                <input 
                    type="text" 
                    id="position" 
                    className="position"
                    required
                    onChange={(e) => setEditedObj({
                        ...editedObj,
                        position:e.target.value
                    })}
                    value={editedObj.position}
                />

                <label htmlFor="location" className="required">Location</label>
                <input 
                    type="text" 
                    id="location" 
                    className="location"
                    required
                    onChange={(e) => setEditedObj({
                        ...editedObj,
                        location:e.target.value
                    })}
                    value={editedObj.location}
                />
                
                <div className="form-block">
                    <div className="input-block">
                        <label htmlFor="work-mode" className="required">Work Mode</label>
                        <select 
                            name="work-mode" 
                            id="work-mode"
                            required
                            onChange={(e) => setEditedObj({
                                ...editedObj,
                                workMode:e.target.value
                            })}
                            value={editedObj.workMode}
                        >
                            <option value="onsite">Onsite</option>
                            <option value="remote">Remote</option>
                        </select>
                    </div>
                    <div className="currently-block">
                        <label htmlFor="currently-working" className="required">Currently Working</label>
                        <input 
                            type="checkbox" 
                            name="present" 
                            id="currently-working" 
                            required
                            onChange={() => setEditedObj({
                                ...editedObj,
                                currentlyWorking: !editedObj.currentlyWorking
                            })}
                            checked = {editedObj.currentlyWorking}
                        />
                    </div>
                </div>
                <div className="form-block">
                    <div className="input-block">
                        <label htmlFor="start-month" className="required">Start Month</label>
                        <input 
                            type="month" 
                            name="start-month" 
                            id="start-month"
                            required
                            onChange={(e) => setEditedObj({
                                ...editedObj,
                                startMonth:e.target.value
                            })}
                            value={editedObj.startMonth}
                        />
                    </div>
                    <div className="input-block">
                        {!editedObj.currentlyWorking?
                            <>
                                <label htmlFor="end-month" className="required">End Month</label>
                                <input 
                                    type="month" 
                                    name="end-month" 
                                    id="end-month"
                                    required
                                    onChange={(e) => setEditedObj({
                                        ...editedObj,
                                        endMonth:e.target.value
                                    })}
                                    value={editedObj.endMonth}
                                />
                            </>
                            :
                            null
                        }
                    </div>
                </div>

                <label htmlFor="job-description" className="required">Job Description</label>
                <textarea 
                    name="job-description" 
                    id="job-description" 
                    required
                    cols="30" 
                    rows="10" 
                    placeholder="Write your job description here"
                    onChange={(e) => setEditedObj({
                        ...editedObj,
                        jobDescription:e.target.value
                    })}
                    value={editedObj.jobDescription}
                >
                </textarea>
                <button type="submit">Commit Change</button>
            </form>
            :
            <>
                <div>{props.data.name}</div>
                <div>{props.data.position}</div>
                <button onClick={handleEdit}>Edit</button>
            </>
        }
        </>
        
    )

}
function WorkExperience(props){
    const [currentObj, setCurrentObj] = useState({
        name:"",
        position:"",
        location:"",
        workMode:"Onsite",
        currentlyWorking:false,
        startMonth:"",
        endMonth:"",
        jobDescription:""
    })
    function handleAddWork(e){
        e.preventDefault();

        props.changeHandler([
            ...props.initial,
            currentObj
        ]);
        setCurrentObj({
            name:"",
            position:"",
            location:"",
            workMode:"Onsite",
            currentlyWorking:false,
            startMonth:"",
            endMonth:"",
            jobDescription:""
        })
    }
    function handleRemoveWork(index){
        props.changeHandler(props.initial.filter((item, i) => i!==index));
    }
    function handleUpdateWork(updatedWork, index){
        props.changeHandler(props.initial.map((item, i) => i===index?updatedWork:item));
    }

    return (
        <>
            <h2>Work Experience</h2>
            {props.initial.map((data, index) => {
                return(
                    <>
                        <Work data={data} key={index} index={index} handleUpdateWork={handleUpdateWork}/>
                        <button onClick={() => handleRemoveWork(index)}>Remove</button>
                    </>
                )
            })}
            <form action="" onSubmit={handleAddWork}>
                <label htmlFor="oname" className="required">Organization Name</label>
                <input 
                    type="text" 
                    id="oname" 
                    className="oname"
                    onChange={(e) => setCurrentObj({
                        ...currentObj,
                        name:e.target.value
                    })}
                    value={currentObj.name}
                />

                <label htmlFor="position" className="required">Position</label>
                <input 
                    type="text" 
                    id="position" 
                    className="position"
                    onChange={(e) => setCurrentObj({
                        ...currentObj,
                        position:e.target.value
                    })}
                    value={currentObj.position}
                />

                <label htmlFor="location" className="required">Location</label>
                <input 
                    type="text" 
                    id="location" 
                    className="location"
                    onChange={(e) => setCurrentObj({
                        ...currentObj,
                        location:e.target.value
                    })}
                    value={currentObj.location}
                />

                <div className="form-block">
                    <div className="input-block">
                        <label htmlFor="work-mode" className="required">Work Mode</label>
                        <select 
                            name="work-mode" 
                            id="work-mode"
                            required
                            onChange={(e) => setCurrentObj({
                                ...currentObj,
                                workMode:e.target.value
                            })}
                            value={currentObj.workMode}
                        >
                            <option value="Onsite">Onsite</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>
                    <div className="currently-block">
                        <label htmlFor="currently-working" className="required">Currently Working</label>
                        <input 
                            type="checkbox" 
                            name="present" 
                            id="currently-working" 
                            onChange={() => setCurrentObj({
                                ...currentObj,
                                currentlyWorking: !currentObj.currentlyWorking
                            })}
                            checked = {currentObj.currentlyWorking}
                        />
                    </div>
                </div>
                <div className="form-block">
                    <div className="input-block">
                        <label htmlFor="start-month" className="required">Start Month</label>
                        <input 
                            type="month" 
                            name="start-month" 
                            id="start-month"
                            onChange={(e) => setCurrentObj({
                                ...currentObj,
                                startMonth:e.target.value
                            })}
                            value={currentObj.startMonth}
                        />
                    </div>
                    <div className="input-block">
                        {!currentObj.currentlyWorking?
                            <>
                                <label htmlFor="end-month" className="required">End Month</label>
                                <input 
                                    type="month" 
                                    name="end-month" 
                                    id="end-month"
                                    onChange={(e) => setCurrentObj({
                                        ...currentObj,
                                        endMonth:e.target.value
                                    })}
                                    value={currentObj.endMonth}
                                />
                            </>
                            :
                            null
                        }
                    </div>
                </div>

                <label htmlFor="job-description" className="required">Job Description</label>
                <textarea 
                    name="job-description" 
                    id="job-description" cols="30" 
                    rows="10" 
                    placeholder="Write your job description here"
                    onChange={(e) => setCurrentObj({
                        ...currentObj,
                        jobDescription:e.target.value
                    })}
                    value={currentObj.jobDescription}
                >
                </textarea>
                <button type="submit">Add To Resume</button>
            </form>
        </>
    );
}

export default WorkExperience;