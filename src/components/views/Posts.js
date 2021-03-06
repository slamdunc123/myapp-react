import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Posts.scss';

class Posts extends Component {
  state = {
    postData: [],
    postCommentsData: [],
    postComments: [],
    postId: null,
    showComments: false,
    showPostComments: null
  };
  componentDidMount() {
    const { id } = this.props.match.params;

    // get all posts for a user id
    const urlPosts = `http://localhost:3100/posts?owner.id=${id}`;
    axios
      .get(urlPosts)
      .then(response => {
        this.setState({
          postData: response.data
        });
        // this.setState({
        //   postComments: response.data.filter(
        //     postComment => postComment.id === 23
        //   )
        // });
        console.log(this.state.postData);
        // console.log(this.state.postComments);
      })
      .catch(error => {
        console.log(error);
      });

    //   get all comments for a user id
    const urlComments = `http://localhost:3100/comments?authorId=${id}`;
    axios
      .get(urlComments)
      .then(response => {
        this.setState({
          postCommentsData: response.data
        });
        // this.setState({
        //   postCommentsData: response.data.filter(
        //     postCommentData => postCommentData.postId === 13
        //   )
        // });
        console.log(this.state.postCommentsData);
        // console.log(this.state.postCommentsData);
      })
      .catch(error => {
        console.log(error);
      });
  }

  //   filter comments by post id
  showComments = (post, i) => {
    // console.log('You clicked' + post.id, i);
    const postComments = this.state.postCommentsData.filter(
      postCommentData => postCommentData.postId === post.id
    );
    // console.log(this.state.postCommentsData);
    // console.log(postComments);
    this.setState({
      postId: post.id,
      postComments: postComments,
      // showComments: !this.state.showComments,
      // showPostComments: i
    });
    // console.log(this.state.postComments);
    // console.log(this.state.postComments.length);

    // console.log(this.state.showComments);
    this.setState({
      showComments: true,
      showPostComments: i
    });
  };
  //   filter comments by post id
  hideComments = (post, i) => {
    // console.log('You clicked' + post.id, i);
    const postComments = this.state.postCommentsData.filter(
      postCommentData => postCommentData.postId === post.id
    );
    // console.log(this.state.postCommentsData);
    // console.log(postComments);
    this.setState({
      postId: post.id,
      postComments: postComments,
      // showComments: !this.state.showComments,
      // showPostComments: null
    });
    // console.log(this.state.postComments);
    // console.log(this.state.postComments.length);

    // console.log(this.state.showComments);
    this.setState({
      showComments: false,
      showPostComments: null
    });
  };

  formatDate = (postDate) => {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    let date = new Date(postDate);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  render() {
    // const { image, message, createdAt } = this.state.postData;
    // const showComments = this.state.showComments;
    return (
      <div className='post-container'>
        {/* <div>Posts</div> */}

        {this.state.postData.map((post, index) => (
          <div key={index}>
            <div className='post-block'>
              <div className='post-block__image'>
                <img src={post.image} alt='' />
              </div>

              <div className='post-block__message'>{post.message}</div>
              <div className='post-block__created-at'>Created {this.formatDate(post.createdAt)}</div>

              {/* tags */}
              <div className='post-block__tags'>
                {post.tags.map((tag, index) => (
                  <div key={index}>
                    <div className='post-block__tags--tag'>{tag.title}</div>
                  </div>
                ))}
              </div>

              {/* comments */}
              <div className='post-block__comments'>
                <div>
                  {/* check the boolean value of showComments and the showPostComments values is equal to post index postion  */}
                  {this.state.showComments && this.state.showPostComments === index ? (
                    <div>
                      <a onClick={() => this.hideComments(post, index)}>
                        <i className='fas fa-chevron-circle-up'></i>
                      </a>
                    </div>

                  ) : (
                      <div>
                        <a onClick={() => this.showComments(post, index)}>
                          <i className='fas fa-chevron-circle-down'></i>
                        </a>
                      </div>
                    )}
                </div>
                {this.state.showPostComments === index ? (
                  this.state.postComments.length > 0 ? (
                    this.state.postComments.map((comment, index) => (
                      <div key={index}>
                        <div className='post-block__comments-block'>
                          {comment.id} - {comment.body}
                        </div>
                      </div>
                    ))
                  ) : (
                      <div className='post-block__comments-block'>
                        No comments
                      </div>
                    )
                ) : (
                    <div></div>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
