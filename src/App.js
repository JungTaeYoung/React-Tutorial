import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCall from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }

})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any/1',
    'name': '정태영',
    'birthday': '991114',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any/2',
    'name': '홍길동',
    'birthday': '950524',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any/3',
    'name': '나동빈',
    'birthday': '990511',
    'gender': '남자',
    'job': '프로그래머'
  }
]
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCall>번호</TableCall>
              <TableCall>이미지</TableCall>
              <TableCall>이름</TableCall>
              <TableCall>생년월일</TableCall>
              <TableCall>성별</TableCall>
              <TableCall>직업</TableCall>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
