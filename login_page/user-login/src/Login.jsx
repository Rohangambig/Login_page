import React ,{useState} from 'react';
const Login = (props)=>{
    const [email,setemail] = useState('');
    const [password,setpass] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email,password);
    }
    return (
     
        <div className='form-container'>
             <form className='login-form' onSubmit={handleSubmit}>
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
             <button className='btn' onClick={()=>props.onFormSwitch("Register")}>Don't have an account ? Register here</button>
        </div>
    );
}
export default Login;