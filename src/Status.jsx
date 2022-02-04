import React from 'react';
import { NavLink } from 'react-router-dom';
import Citiess from './Citiess';
import classes from './Status.module.css'
import Form from './Form';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        // console.log(this.state.status)
        this.setState({
            editMode: !this.state.editMode
        })
        // console.log(this.state.status)
    }

    onStatusChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {

        return <div className={classes.status}>
            <div className={classes.statusName}>
               <b> <span className={classes.statusNameFirst}>Здравствуйте,</span> <span>Человек №3596941</span></b>
                <NavLink to={'/'} onClick={this.activateEditMode} className={classes.statusLink}>Cменить статус</NavLink>
            </div>

            <textarea onChange={this.onStatusChange} placeholder={"Прежде чем действовать,надо понять"} disabled={!this.state.editMode} className={classes.statusInput} value={this.props.status} />
            <div>
                <Citiess />
                <Form />
            </div>


        </div>

    }




}


export default Status;