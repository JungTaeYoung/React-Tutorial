import React from 'react';
import { post, patch } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import button from '@material-ui/core/button';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/button';

const styles = theme => ({
  hidden: {
    display: 'none'
  }
})


class CustomerUpdate extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.image)
    this.state = {
      file: null,
      userName: props.name,
      birthday: props.birthday,
      gender: props.gender,
      job: props.job,
      fileName: props.image
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.updateCustomer()
      .then((response) => {
        this.props.stateRefresh();
      })
    this.setState({
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    })
  }

  handleFileChange = (e) => {
    console.log(e.target.files[0])
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    })
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  updateCustomer = () => {
    const url = '/api/customersupdate';
    const formData = new FormData();
    formData.append('id', this.props.id)
    formData.append('image', this.state.fileName)
    formData.append('name', this.state.userName)
    formData.append('birthday', this.state.birthday)
    formData.append('gender', this.state.gender)
    formData.append('job', this.state.job)
    console.log(formData)
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
    return post(url, formData, config)

  }

  handleClickOpen = () => {

    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
      file: null,
      userName: this.props.name,
      birthday: this.props.birthday,
      gender: this.props.gender,
      job: this.props.job,
      fileName: this.props.image
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>수정</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>고객 정보 수정</DialogTitle>
          <DialogContent>
            <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} onChange={this.handleFileChange} />
            <label htmlFor="raised-button-file">
              <Button variant="contained" color="primary" component="span" name="file">
                {this.state.fileName === "" ? "프로필 이미지 선택" : this.state.fileName}
              </Button>
            </label>
            <br />
            <TextField label="이름" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br />
            <TextField label="생년월일" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />
            <TextField label="성별" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br />
            <TextField label="직업" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>수정</Button>
            <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CustomerUpdate);
