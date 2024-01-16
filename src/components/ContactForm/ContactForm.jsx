import { Component } from "react";
import {Form, Label, Input} from './ContactForm.styled'

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = (e) => {
    this.setState({[e.target.name]: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number);
        this.setState({ name: '',
        number: '',});
    }

    render() {
        return <div><Form action="submit" onSubmit={this.handleSubmit}>
            <div><Label>Name<Input onChange={this.handleChange} type="text" value = {this.state.name} name="name" required /></Label></div>
            <div><Label>Number<Input onChange={this.handleChange} type="tel" value = {this.state.number} name="number"/></Label></div> 
            <button type="submit">Add contact</button></Form>
        </div>;
      }
}