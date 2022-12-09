import styles from './Form.module.css'
import React from 'react';
import validation from './validation';

export default function Form({login}) {

    const [userData, setUserData] = React.useState({ username: '', password: '' });

    const [errors, setErrors] = React.useState({username: '', password: ''});

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})

        setErrors(validation({...userData, [property]: value}))

        
    };

    const handleSubmit = ()=>{
        login(userData)
    }
    
    
    return(
        <div className={styles.divForm}>
            <label>Username:</label>
            <input name='username' type='text' value={userData.username} onChange={handleInputChange}></input>
            <span className={styles.warning}>{errors.username}</span>
            <label>Password:</label>
            <input name='password' type='password' value={userData.password} onChange={handleInputChange}></input>
            <span className={styles.warning}>{errors.password}</span>
            <br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}