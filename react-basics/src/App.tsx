import './App.css';
import {Subjects} from "./component/Subjects.tsx";

function App() {

    const subjects = [
        {
            sName : 'RAD',
            sDescription : 'lorem ipsum dolor sit amet'
        },
        {
            sName : 'Javascript',
            sDescription : 'lorem ipsum dolor sit amet'
        },
        {
            sName : 'Typescript',
            sDescription : 'lorem ipsum dolor sit amet'
        }
    ]

    const handleClick = (btnName: string) => {
        subjects.map((subject) => {
            if(subject.sName === btnName) {
                alert(subject.sDescription+" "+subject.sName);
            }
        });
    }

    return (
        <>
            <Subjects onselect={handleClick}>{subjects[0].sName}</Subjects>
            <Subjects onselect={handleClick} >{subjects[1].sName}</Subjects>
            <Subjects onselect={handleClick} >{subjects[2].sName}</Subjects>
        </>
    );
}   

export default App;
