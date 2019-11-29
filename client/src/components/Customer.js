import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCall from '@material-ui/core/TableCell';


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
      </TableRow>
    )
  }
}

export default Customer;