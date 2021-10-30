import React, { Component } from 'react';
import axios from 'axios';

export default class AddIdea extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: "",
            ideaInput: "",
            loading: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        axios
        .post("https://ajh-capstone-project.herokuapp.com/idea/add", {
                name: this.state.nameInput,
                idea: parseFloat(this.state.ideaInput)
            })
        

        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.history.push("/ideas")
            }
        })
        .catch(error => {
            console.log("Error adding idea", error)

            this.setState({
                loading: false,
                error: true
            })
        })
    }

    render() {
        return (
            <div className='add-idea-wrapper'>
                <h2>Add Your Idea</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Name"
                        name="nameInput" 
                        value={this.state.nameInput}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="ideaInput"
                        placeholder="Idea"
                        value={this.state.ideaInput}
                        onChange={this.handleChange}
                    />

                    <button type="submit" disabled={this.state.loading}>Submit</button>
                </form>

                {this.state.loading ? <div className="loading">Submitting...</div> : null}

                {this.state.error ? <div className="error">An error occured... Please try again later.</div> : null}
            </div>
        )
    }
}