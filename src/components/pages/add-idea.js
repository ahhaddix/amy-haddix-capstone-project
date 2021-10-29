import React, { Component } from 'react'

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

        fetch("https://ajh-capstone-project.herokuapp.com/idea/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.nameInput,
                idea: parseFloat(this.state.ideaInput)
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.history.push("/items")
            }
        })
        .catch(error => {
            console.log("Error adding item ", error)

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