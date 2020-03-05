import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    state = {
        id: -1,
        name: '이름',
        birthday: '000000',
        gender: '성별',
        job: '직업'

    }
    
    render(){
        const {
            id, name, birthday, gender, job
        } = this.props.info;

        return(
            // <div>
            //     <div><h2>{this.state.name}</h2></div>
            //     <div>{this.state.id}</div>
            //     <div>{this.state.birthday}</div>
            //     <div>{this.state.gender}</div>
            //     <div>{this.state.job}</div>

            //     <div><b>{name}</b></div>
            //     <div>{id}</div>
            //     <div>{birthday}</div>
            //     <div>{gender}</div>
            //     <div>{job}</div>
            // </div>
            <TableRow>
                <TableCell><b>{name}</b></TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{birthday}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{job}</TableCell>    
            </TableRow>
            
        );
    }
}

export default Customer;