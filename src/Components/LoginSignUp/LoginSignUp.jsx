import {useState,useEffect} from "react"
import axios from "axios"


export const LoginSignUp = () => {

  const [inputdata,setInputdata]= useState("")
  const [text,setText] =useState([])


  const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/users",{inputdata}).then((text)=>{

     
       setText(text)
     })
 }
 
  const handlechange =(e)=> {
    const {id,value} = e.target

    setInputdata({
        ...inputdata,
        [id] : value

    })
  }
 




  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handlesubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          id="name"
          onChange={handlechange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          id="password"
          onChange={handlechange}
          required
        />
        <br />
        <select value={""} className="location" id="location" onChange={handlechange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          id="technology"
          onChange={handlechange}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food"  id="food" onChange={handlechange} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" id="movies" onChange={handlechange} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" id="culture" onChange={handlechange} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" id="art" onChange={handlechange} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" id="drama" onChange={handlechange} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          id="image"
          onChange={handlechange}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={handlesubmit}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};

