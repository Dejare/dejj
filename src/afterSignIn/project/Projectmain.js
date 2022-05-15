import React, { useState, useRef } from "react";
import { Link ,useHistory } from "react-router-dom";
import CenterCards from "../dashboard/CenterCards";
import Aboutproject from "./Aboutproject";

import Projectcard from "./Projectcard";

const Projectmain = () => {
    const history = useHistory();
    // form.current.style.visibility = "hidden";
    const [start, setstart] = useState(true);
    const [ProjectCreated, setProjectCreated] = useState([]);
    const [Load, setLoad] = useState(false);
    const [Noproject, setNoproject] = useState(false);
    function startProject() {
        setstart(false);
        history.push("/newtransfer")
    }
    const newProject = useRef();
    const getData = function (data) {
        console.log(data);
        setProjectCreated((prevData) => {
            return [...prevData, data];
        });
        console.log(ProjectCreated);
        setLoad(true);
    };
    return (
        <div>
            {/* {Noproject ? } */}

            <div className="m-12 mt-52" ref={newProject}>
                <h1 className="text-5xl coolvetica m-12">
                    New Project <br /> <span className="coolvetica"></span>
                </h1>
                <h1 className="m-12 text-5xl mb-4 coolvetica text-blue-600">
                    Tell us a little about yourself / project
                </h1>
                <p className="ml-12 mb-12">
                    We use this to tailor your site according to your
                    information.
                </p>
                <button
                    className="cta rounded-xl text-white bg-blue-600 ml-12"
                    onClick={startProject}
                >
                    Start&rarr;
                </button>
            </div>

            <div>
                {" "}
                {start ? (
                    <>
                        <h1 className="m-24 capitalize m-24 text-5xl mb-4 coolvetica text-blue-600">
                            You have no new Projects Currrently
                        </h1>
                        <div className="m-24">
                            <Projectcard
                                num="0"
                                projectProgress="0%"
                                projectName="No Project"
                            />
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Projectmain;
