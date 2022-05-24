import React, {useContext} from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Aboutproject from "../../afterSignIn/project/Aboutproject";
import "./template.css";
import { FormContext } from "../../context/FormContext";

const Index = () => {
    
    const formValue = useContext(FormContext)
    
    return (
        <>
        <div className="template">
            <header className="flex flex-row justify-between p-12">
                <div>{formValue.Projectname}</div>
                <div>
                    <HiMenuAlt3 />
                </div>
            </header>
            {/* herro */}
            <div className="homeAnimations">
                {" "}
                <div className="triangle"></div> <div className="square"></div>{" "}
                <div className="bigCircle"></div>{" "}
                <div className="bottomleft">
                    {" "}
                    <div className="smaller"></div>{" "}
                </div>{" "}
            </div>{" "}
            <div className="homeTexts">
                {" "}
                <h3>{formValue.occupation}</h3>{" "}
                <h1 className="px-40">
                    {formValue.fullname}
                </h1>{" "}
                <div className="homeCta">
                    {" "}
                    <a href="#about" className="homeAbout">
                        About Me
                    </a>{" "}
                    -{" "}
                    <a href="./pages/project.html" className="homeProjects">
                        My Works
                    </a>{" "}
                </div>{" "}
                -{" "}
            </div>


            <section id="about">
                <div id="aboutsect">
                        <h1>About me -</h1>
                        
                </div>
            </section>
        </div>

        </>
    );
};

export default Index;
