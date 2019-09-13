import React, { Component } from 'react';
import axios from 'axios';

import './Activity.scss'

class Activity extends Component {
  state = {
    commentsData: [], // all comments for user
    postCommentsData: [] // all comments for user filtered by specific post id
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `http://localhost:3100/comments?authorId=${id}`;
    axios
      .get(url)
      .then(response => {
        this.setState({
          commentsData: response.data
        });
        // this.setState({
        //   postCommentsData: response.data.filter(
        //     postCommentData => postCommentData.postId === 13
        //   )
        // });
        console.log(this.state.commentsData);
        // console.log(this.state.postCommentsData);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {/* <div>Activity</div> */}

        {this.state.commentsData
          //   .filter(postCommentData => postCommentData.postId === 13)
          .map(comment => (

            <div key={comment.id} className="comments-container">
              <div className="comments-container__id" >Comment: {comment.id}</div>
              <div className="comments-container__body" >{comment.body}</div>
              <div><hr /></div>
            </div>
          ))}
      </div>
    );
  }
}

export default Activity;
