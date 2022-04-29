
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState ,useEffect} from 'react';
import "./form.css"
import { useDispatch,useSelector } from 'react-redux';
import { editdusers } from '../redux/action';
import { useParams } from 'react-router-dom';
import "./form.css"


const Edit = () => {
  const [state, setstate] = useState({
    country: "",
    city: "",
    population: ""
  })


  const dispatch = useDispatch()
  let {id} = useParams()

  useEffect(()=>{
    dispatch(editdusers(id))
  },[])


// useEffect(()=>{
//   if(user){
//     setstate(...user)
//   }
// },[user])

  const { country, city, population } = state;


  const {user} = useSelector((state)=>state.data)

  const handlechange = (e) =>{
    setstate(e.target.value)
  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    if (country === "" || city === "" || population === "") {
      alert("all fields required")
    } 
    else{
      dispatch(editdusers(state))
      setstate({
        country:"",
        city:"",
        population:""
      })
    }

    window.location.href = "./"
   
    
    
  

  }
  return (
    <>
     

      <form
        className='formhandle'
        component="form"
        onSubmit={handlesubmit} 
        sx={{
          '& > :not(style)': { m: 3, width: '45ch', display: "grid", position: "relative", top: "-200px", left: "100px" },
        }}
        noValidate
        autoComplete="off"
      >

        <TextField id="standard-basic" label="Country" variant="standard" value={country} type="text" onChange={handlechange} /><br />
        <TextField id="standard-basic" label="city" variant="standard" value={city} type="text" onChange={handlechange} /><br />

        <TextField id="standard-basic" label="population" variant="standard" value={population} type="text" onChange={handlechange} /><br />

        <button type='submit' className="botton">submit</button>

      </form>
      
    </>
  )
}

export default Edit;
