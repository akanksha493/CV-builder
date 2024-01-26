function GeneralInformation(props){
    const handleChange = (e) => {
        const newInfo = {...props.initial}
        newInfo[e.target.name] = e.target.value;
        props.changeHandler(newInfo);
    };


    return (
        <>
            <h2>General Information</h2>
            <form action="" >
                <div className="input-container">
                    <label htmlFor="fname" className="required">First Name</label>
                    <input
                        type="text" 
                        id="fname" 
                        name = "fname"
                        className="fname"
                        required
                        onChange={handleChange}
                        value={props.initial.fname}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="lname">Last Name</label>
                    <input 
                        type="text" 
                        id="lname" 
                        name = "lname"
                        className="lname"
                        onChange={handleChange}
                        value={props.initial.lname}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="email" className="required">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        className="email"
                        required
                        onChange={handleChange}
                        value={props.initial.email}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="phno" className="required">Phone Number</label>
                    <input 
                        type="text" 
                        id="phno" 
                        name="phno"
                        className="phno"
                        required
                        pattern="[1-9][0-9]{9}"
                        onChange={handleChange}
                        value={props.initial.phno}
                    />
                </div>

                {/* add social media input  */}
                
                {/* {(Object.values(info))&&(info!==null)} */}
            </form>
        </>
    );
}

export default GeneralInformation;