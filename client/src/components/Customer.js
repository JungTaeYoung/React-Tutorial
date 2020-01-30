import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCall from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';


class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCall>{this.props.id}</TableCall>
        <TableCall><img src={this.props.image} alt="profile" /></TableCall>
        <TableCall>{this.props.name}</TableCall>
        <TableCall>{this.props.birthday}</TableCall>
        <TableCall>{this.props.gender}</TableCall>
        <TableCall>{this.props.job}</TableCall>
        <TableCall><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCall>
      </TableRow>
    )
  }
}

export default Customer;