import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Intro from "../components/Intro";

const Welcome = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <Navbar toggle={toggle}/>
        <section id="welcome">
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Intro />
        </section>
        </>
    )
}

export default Welcome;