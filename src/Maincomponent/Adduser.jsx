
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState ,useEffect} from 'react';
import "./form.css"
import { useDispatch } from 'react-redux';
import { addusers } from '../redux/action';
import { useParams } from 'react-router-dom';
import Display_Data from './Display_Data';



const Add = () => {

    
  const [state, setstate] = useState({
    country: "",
    city: "",
    population: ""
  })


  const { country, city, population } = state;

  const handlechange = (e) =>{
    let {name,value} = e.target;
  setstate({...state,[name]:value})
}



  const dispatch = useDispatch();



  



  const handlesubmit = (e)=>{
    e.preventDefault();
    if (country==""  || city==""  || population=="" ) {
      alert("all fields required")
    } 
    else{
      dispatch(addusers(state))

      setstate( {country: "",
      city: "",
      population: ""})

      window.location.href="./"

      
      
    }

    
    
    
  

  }
  return (
    <>
     

      <div>
          
      <form
        className='formhandle'
        component="form"
        onSubmit={handlesubmit} 
        sx={{
          '& > :not(style)': { m: 3, width: '45ch', display: "grid", position: "relative", left: "100px" },
        }}
        noValidate
        autoComplete="off"
      >
          <h1>Adduser</h1>

        <TextField id="standard-basic" label="Country" variant="standard" value={country} type="text" name="country"  onChange={handlechange} /><br />
        <TextField id="standard-basic" label="city" variant="standard" value={city} type="text"  name="city" onChange={handlechange}/><br />

        <TextField id="standard-basic" label="population" variant="standard" value={population} type="text"  name="population"  onChange={handlechange}/><br />

        <button type='submit' className="botton">submit</button>

      </form>
      </div>
      
    </>
  )
}

export default Add;
