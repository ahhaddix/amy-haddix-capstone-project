import React, { Component } from 'react';
import axios from 'axios';
import { response } from 'express';

export default class Ideas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ideas: [],
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        axios
        .get("https://ajh-capstone-project.herokuapp.com/idea/get"
            )
            //.then(response => response.json())
            .then(data => {
                this.setState({getIdeas: response.data.ideas
                })
            })
        .catch(error => {
            console.log("errorIdeas", error)
        });



    renderIdeas() 
        const ideasHtml = this.state.ideas.map(idea=> (
            <div className="idea-wrapper" key={idea.id}>
                <h3>{idea.name}</h3>
                <p>{description}</p>
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
                        <div className="error">Oops! No ideas here... Please try again later.</div>
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