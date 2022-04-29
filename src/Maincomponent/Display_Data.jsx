
import { Route, Link } from "react-router-dom"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { deletedusers, loadusers } from "../redux/action";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'
import Home from "../components/Home";

import "./display.css"

// import { Link } from "react-router-dom";


const classes = {
  flexContainer: 'ReactVirtualizedDemo-flexContainer',
  tableRow: 'ReactVirtualizedDemo-tableRow',
  tableRowHover: 'ReactVirtualizedDemo-tableRowHover',
  tableCell: 'ReactVirtualizedDemo-tableCell',
  noClick: 'ReactVirtualizedDemo-noClick',
};






function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const Display_Data = () => {




  const handledelete = (id) => {
    if (window.confirm("u wanted to delete the data")) {
      dispatch(deletedusers(id))


    }
  }


  const { users } = useSelector(state => state.data)


  let dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(loadusers())
    }, [])

  return (
    <div>

      <h1 className="country">Country Details</h1>

      <button className="reactbutton"> <Link to="/add">Add Country</Link></button>

      


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>S.NO</TableCell> */}
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Population</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">{user.id}</TableCell> */}
                <TableCell align="center">{user.country}</TableCell>
                <TableCell align="center">{user.city}</TableCell>
                <TableCell align="center">{user.population}</TableCell>
                <TableCell align="center"><ButtonGroup disableElevation variant="contained">
                  <Button onClick={() => { handledelete(user.id) }}>DELETE</Button>
                </ButtonGroup></TableCell>
                <TableCell align="center"><ButtonGroup disableElevation variant="contained">
                  <Link to ="/edit">Edit</Link>
                </ButtonGroup></TableCell>
              </TableRow>


            ))}
          </TableBody>
        </Table>
      </TableContainer>


    </div>
  )
}

export default Display_Data;