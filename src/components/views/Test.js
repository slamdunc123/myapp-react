import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Test extends Component {


    state = {
        show: true,
        comments: true
    }

    handleShowClick = () => {
        this.setState({
            show: !this.state.show
        })
        console.log('show')
    }

    handleHideClick = () => {
        this.setState({
            show: !this.state.show
        })
        console.log('hide')
    }

    renderComments = () => {
        return (
            <div>
                <div>Comment 1</div>
                <div>Comment 2</div>
                <div>Comment 3</div>
                <div>Comment 4</div>
            </div>

        )
    }

    render() {
        const { show, comments } = this.state;
        return (
            <div>
                {show ? (
                    <div>
                        <NavLink to="" onClick={() => this.handleShowClick()}>Hide</NavLink>
                        {comments ? (
                            this.renderComments()
                        ) : (
                                <div>No comments</div>
                            )}

                    </div>
                ) : (
                        <div>
                            <NavLink to="" onClick={() => this.handleHideClick()}>Show</NavLink>
                            <div></div>
                        </div>
                    )}
            </div>
        );
    }
}

export default Test
