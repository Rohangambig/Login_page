import React ,{useState} from 'react';
const Register= (props)=>{
    const [email,setemail] = useState('');
    const [password,setpass] = useState('');
    const [name,setname] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(
            "Name : "+name+"\nEmail : "+email+"\nPassword : "+password
        );
    }
    return (
        <div form-container>
       
             <form className='register-form' onSubmit={handleSubmit}>
             <label  htmlFor='name'>Enter your name </label>
             <input onChange={(e)=>{setname(e.target.value)}} type='text' id='name' name='name' placeholder='Ex : xyz'></input>
             <label htmlFor='email'>Email</label>
             <input value={email} onChange={(e)=>{
                setemail(e.target.value)
             }} type="text" placeholder="Name123@gmail.com" id="email" name="email"></input>
             <label htmlFor='password'>Password</label>
             <input onChange={(e)=>{
                setpass(e.target.value)
             }} value={password} type="password" placeholder="********" id="password" name="password"></input>
             <button type='submit'>Login</button>
             </form>
             <button className='btn' onClick={()=>props.onFormSwitch("Login")}>Already have an account ? login here</button>
        </div>
    );
}
export default Register;