import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCall from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
import CustomerUpdate from './CustomerUpdate';


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
        <TableCall>
          <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} />
          <CustomerUpdate stateRefresh={this.props.stateRefresh} id={this.props.id} image={this.props.image} name={this.props.name} birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
        </TableCall>
      </TableRow>
    )
  }
}

export default Customer;