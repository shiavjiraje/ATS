import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
class NewUsers extends React.Component{
        state={
            firstName:"",
            lastName:"",
        }
    handleSubmit=e=>{
        e.preventDefault();
        this.props.onSubmit({
            firstName:this.state.firstName,
            lastName:this.state.lastName
        });
        this.setState({
            firstName:"",
            lastName:""
        });
        console.log(this.state.firstName, this.state.lastName)
    }
    handleFirstNameChange =e=>{
        this.setState({
            firstName:e.target.value
        })
    }
    handleLastNameChange =e=>{
        this.setState({
            lastName:e.target.value
        })
    }
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input required placeholder="First Name" onChange={this.handleFirstNameChange} value={this.state.firstName}/> 
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input required placeholder="Last Name" onChange={this.handleLastNameChange} value={this.state.lastName}/> 
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color="primary"> Create</Button>
                </FormGroup>
            </Form>
        )
    }
}
export default NewUsers;