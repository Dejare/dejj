import React, { useState, useRef } from "react";
import { Link ,useHistory } from "react-router-dom";
import CenterCards from "../dashboard/CenterCards";
import Aboutproject from "./Aboutproject";
import {HiMenuAlt3} from 'react-icons/hi'

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
            <header className="text-blue-600 p-12 flex flex-row justify-between">
                <div>
                    Yoursite!
                </div>
                <div>
                    <HiMenuAlt3/>
                </div>
            </header>

            <div className="md:m-12 m-4 mt-20 md:mt-52" ref={newProject}>
                <h1 className="text-5xl coolvetica md:m-12 m-4">
                    New Project <br /> <span className="coolvetica"></span>
                </h1>
                <h1 className="m-12 ml-4 text-5xl mb-4 coolvetica text-blue-600">
                    Tell us a little about yourself / project
                </h1>
                <p className="md:ml-12 ml-4 mb-12">
                    We use this to tailor your site according to your
                    information.
                </p>
                <button
                    className="cta rounded-xl text-white bg-blue-600 md:ml-12 ml-4"
                    onClick={startProject}
                >
                    Start&rarr;
                </button>
            </div>

            <div>
                {" "}
                {start ? (
                    <>
                        <h1 className="md:m-24 m-8 capitalize m-24 text-5xl mb-4 coolvetica text-blue-600">
                            You have no new Projects Currrently
                        </h1>
                        <div className="md:m-24 m-8">
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
