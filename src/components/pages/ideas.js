import React, { Component } from 'react'

export default class Ideas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ideas: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("localhost:3000/ideas")
        .then(response => response.json())
        .then(data => {
            this.setState({
                ideas: data,
                loading: false
            })
        })
        .catch(error => {
            console.log("Error getting ideas", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderIdeas() {
        const ideasHtml = this.state.ideas.map(item => (
            <div className="idea-wrapper" key={idea.id}>
                <h3>{idea.name}</h3>
                <p>${idea.ideas.toFixed(2)}</p>
            </div>
        ))

        return ideasHtml
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='ideas-page-wrapper'>
                    <h2>Ideas</h2>
                    <div className='ideas-wrapper'>
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className='ideas-page-wrapper'>
                    <h2>Ideas</h2>
                    <div className='ideas-wrapper'>
                        <div className="error">Oops! No ideas here!... Please try again later.</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='ideas-page-wrapper'>
                    <h2>Ideas</h2>
                    <div className="ideas-wrapper">
                        {this.renderIdeas()}
                    </div>
                </div>
            )
        }
    }
}