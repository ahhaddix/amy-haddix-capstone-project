import React, { Component } from 'react';
import axios from 'axios';

export default class Ideas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ideas: [],
            loading: true,
            error: false
        };
    }

       
        
        componentDidMount() {
            this.grabIdeas();
            }


        grabIdeas() {
            axios
            .get("https://ajh-capstone-project.herokuapp.com/idea/get")
            .then(response => {
                this.setState({
                    ideas: response.data,
                    loading:false
                }), (error) => {
            console.log("errorIdeas", error)
           }
        })
        }

    
    renderIdeas() {
        const ideasHtml = this.state.ideas.map(ideas=> (
            <div className="idea-wrapper" key={ideas.id}>
                <h3>{ideas.name}</h3>
                <p>{ideas.idea}</p>
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