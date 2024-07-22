import './Person.css'

interface Props {
    name:       string;
    email:      string;
    age:        number;
    isDeveloper:boolean;    
    hobbies:    string[];
}

export const Person = (props: Props) => {
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This Person {props.isDeveloper? "is":"is not"} a Developer</h1>
            {props.hobbies.map((hobby: string)=>{
                return <h1>{hobby}</h1>
            })}
        </div>
    );
};