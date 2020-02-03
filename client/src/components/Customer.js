import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCall from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
import CustomerUpdate from './CustomerUpdate';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  profileImage: {
    width: 64,
    height: 64
  }
})

class Customer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <TableRow>
        <TableCall>{this.props.id}</TableCall>
        <TableCall><img src={this.props.image} alt="profile" className={classes.profileImage} /></TableCall>
        <TableCall>{this.props.name}</TableCall>
        <TableCall>{this.props.birthday}</TableCall>
        <TableCall>{this.props.gender}</TableCall>
        <TableCall>{this.props.job}</TableCall>
        <TableCall>
          <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} />
          <CustomerUpdate stateRefresh={this.props.stateRefresh} id={this.props.id} image={this.props.image} fileName={this.props.fileName} name={this.props.name} birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
        </TableCall>
      </TableRow>
    )
  }
}

export default withStyles(styles)(Customer);