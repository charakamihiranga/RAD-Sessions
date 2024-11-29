import './App.css';
import { Subjects } from "./component/Subjects.tsx";
import { useState } from "react";

function App() {
    const subjects = [
        { sName: 'RAD', sDescription: 'lorem ipsum dolor sit amet' },
        { sName: 'Javascript', sDescription: 'lorem ipsum dolor sit amet' },
        { sName: 'Typescript', sDescription: 'lorem ipsum dolor sit amet' }
    ];

    const [content, setContent] = useState("default");

    const handleClick = (name: string) => {
        const selectedSubject = subjects.find(subject => subject.sName === name);
        if (selectedSubject) {
            // Alert before updating state
            alert(`${selectedSubject.sDescription} - ${selectedSubject.sName}`);
            setContent(`${selectedSubject.sDescription} - ${selectedSubject.sName}`);
        }
    };

    return (
        <>
            {subjects.map(subject => (
                <Subjects key={subject.sName} onselect={() => handleClick(subject.sName)}>
                    {subject.sName}
                </Subjects>
            ))}
            <br />
            <p>{content}</p>
        </>
    );
}

export default App;
