import React, { Component } from 'react';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';


import './App.css';

class App extends Component {
  state = {
    data: [
      {
        id: 0,
        name: 'kim',
        birthday: '960222',
        gender: 'M',
        job: 'Doctor'
      },
      {
        id: 1,
        name: 'park',
        birthday: '920123',
        gender: 'F',
        job: 'Teacher'
      },
      {
        id: 2,
        name: 'choi',
        birthday: '900304',
        gender: 'M',
        job: 'Trainer'
      },
    ]
  }

  render() {
    const { data } = this.state;
    const list = data.map(
      info => (
        <Customer
          key={info.id}
          info={info}
        />
      )
    )
    return (

      <div>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>No.</TableCell>
          <TableCell>ID</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <TableBody>
        {list}
      </TableBody>
      </div>
    );
  }
}

export default App;
