import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
    const [country, setcountry] = useState("")
    const [state, setstate] = useState("")
    const [number, setnumber] = useState("")
    const [country_data,setcountry_data]=useState([])

    useEffect(()=>{
        getdata()
        
    },[])

    // console.log(country_data)

    const handlesubmit = (e) => {
        e.preventDefault();

        if (country == "" || state == "" || number == "") {
            alert("all fields required")
        }

        else {
            fetch(`http://localhost:3001/data`, {
                method: "POST",
                body: JSON.stringify({
                    country_name: country,
                    state_name: state,
                    population: number
                }),
                headers: {
                    "content-Type": "application/json"
                }
            }).then(getdata).then(filterdata)
            setcountry("")
            setstate("")
            setnumber("")
        }


       


    }

    const getdata = () => {
        fetch(`http://localhost:3001/data`)
        .then(x=>x.json())
        .then(res=>{setcountry_data(res)})
        .catch(err=>{console.log(err.message)})

        
    }

    const filterdata = () =>{
        fetch(`http://localhost:3001/data?country_name=${country}`,
        {
            method:"PUT",
            
            headers: {
                'content-Type': 'application/json'
              },
              body: JSON.stringify({
                country_name:country,
              })
        }
        ).then(response => response.json())
        .then(data => {
          if (data.country_name === country) {
            alert("The Country data  is  Already Exist, Go to page and edit the details ")
          }
        })
    }
    return (

        <div>
            <h1>Home</h1>

            <form onSubmit={handlesubmit}>
                <span>Country Name</span>
                <input type="text" value={country} onChange={(e) => { setcountry(e.target.value) }} /><br />
                <span>City Name</span>
                <input type="text" value={state} onChange={(e) => { setstate(e.target.value) }} /><br />
                <span>Population</span>
                <input type="number" value={number} onChange={(e) => { setnumber(e.target.value) }} /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Home