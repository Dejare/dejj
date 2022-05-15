import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Left from "../dashboard/Left";

const Aboutproject = (props, { display }) => {
    const history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();
      history.push("/new")
        const data = {
            fullname: fullname,
            location: location,
            Projectname: Projectname,
            occupation: occupation,
            skills: skills,
            about: about,
            // display: display
        };
        props.onAddData(data);
        formData.current.style.display = `${display}`;
    }
    const [Projectname, setProjectname] = useState("");
    const [fullname, setfullname] = useState("");
    const [location, setlocation] = useState("");
    const [occupation, setoccupation] = useState("");
    const [skills, setskills] = useState("");
    const [about, setabout] = useState("");
    // console.log(Projectname);
    const formData = useRef();
    return (
        <div className="dashboard flex flex-row">
            <div className="dashboard_left bg-blue-600 flex flex-col">
                <Left />
            </div>
            <div className="center">
                <div className="m-24" ref={formData}>
                    <div>
                        <h1 className="m-12 text-5xl mb-4 coolvetica text-blue-600">
                            Project form
                        </h1>
                        <p className="ml-12 mb-12">
                            Please fill this exactly how you'd like it to be on
                            your website.
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col ml-12"
                    >
                        <div>
                            <h1>Project Name / Site Name</h1>
                            <input
                                type="text"
                                onChange={(e) => setProjectname(e.target.value)}
                                value={Projectname}
                                className="uppercase w-3/4 md:w-2/4 h-10 ml-8 mt-0 bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                                required
                            />
                        </div>
                        <div>
                            <h1>Full Name</h1>
                            <input
                                type="text"
                                required
                                onChange={(e) => setfullname(e.target.value)}
                                value={fullname}
                                className="w-3/4 md:w-2/4 h-10 ml-8 mt-0 bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                            />
                        </div>
                        <div>
                            <h1>Location</h1>
                            <input
                                type="text"
                                required
                                onChange={(e) => setlocation(e.target.value)}
                                value={location}
                                className="w-3/4 md:w-2/4 h-10 ml-8 mt-0 bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                            />
                        </div>
                        <div>
                            <h1>Occupation</h1>
                            <input
                                type="text"
                                onChange={(e) => setoccupation(e.target.value)}
                                value={occupation}
                                required
                                className="w-3/4 md:w-2/4 h-10 ml-8 mt-0 bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                            />
                        </div>
                        <div>
                            <h1>Skills</h1>
                            <input
                                type="text"
                                onChange={(e) => setskills(e.target.value)}
                                value={skills}
                                required
                                className="w-3/4 md:w-2/4 h-10 ml-8 ml-8 bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                            />
                        </div>
                        <div>
                            <h1>About</h1>
                            <textarea
                                name=""
                                required
                                id=""
                                cols="30"
                                rows="10"
                                className="w-3/4 h-1/4 md:w-2/4 h-80 ml-8 mt-0 bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                                onChange={(e) => setabout(e.target.value)}
                                value={about}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="cta bg-blue-600 text-white flex w-1/4 m-12 rounded-xl"
                        >
                            Create Site.
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Aboutproject;