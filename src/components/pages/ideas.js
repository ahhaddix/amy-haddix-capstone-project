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
        fetch("http://127.0.0.1:5000/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data,
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

    renderItems() {
        const itemsHtml = this.state.ideas.map(item => (
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
                        {this.renderItems()}
                    </div>
                </div>
            )
        }
    }
}