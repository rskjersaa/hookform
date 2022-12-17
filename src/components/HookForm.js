import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [confirm, setConfirm] = useState ("");
    const [newUser, setNewUser] = useState([])

    const createUser = (e) => {
        e.preventDefault();
            console.log(e.target.value)
        const newUser = {firstname, lastname, email, password, confirm};
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirm("")
        
    
    };
    return(
        <>
        <form onSubmit = { createUser }>
            <div>
                <label htmlFor=''>First Name:</label>
                <input type="text" value={firstname} onChange={ (e)=> setFirstname(e.target.value)}/>
                
            </div>
            <div>
                <label htmlFor=''>Last Name:</label>
                <input type="text" value={lastname} onChange={ (e)=> setLastname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='   '>Email Address:</label>
                <input type="text" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={ (e)=> setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirm} onChange={ (e)=> setConfirm(e.target.value)}/>
            </div>
            <input type="submit" value="Create User"/>
        </form>

        <h3>Your Form Data</h3>
        <p>
            <label>First Name: </label> { firstname }
        </p>
        <p>
        <label>Last Name: </label> { lastname }
        </p>
        <p>
        <label>Email: </label>  { email }
        </p>
        <p>
        <label>Password: </label> { password }
        </p>
        <p>
        <label>Confirm Password: </label>  { confirm }
    </p>
    </>
    );
};


export default UserForm;