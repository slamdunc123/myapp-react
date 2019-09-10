import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    console.log('You clicked' + post.id, i);
    const postComments = this.state.postCommentsData.filter(
      postCommentData => postCommentData.postId === post.id
    );
    console.log(this.state.postCommentsData);
    console.log(postComments);
    this.setState({
      postId: post.id,
      postComments: postComments
    });
    console.log(this.state.postComments);
    console.log(this.state.postComments.length);

    this.setState({
      //   showComments: true,
      showPostComments: i
    });
    console.log(this.state.showComments);
  };
  //   filter comments by post id
  hideComments = (post, i) => {
    console.log('You clicked' + post.id, i);
    const postComments = this.state.postCommentsData.filter(
      postCommentData => postCommentData.postId === post.id
    );
    console.log(this.state.postCommentsData);
    console.log(postComments);
    this.setState({
      postId: post.id,
      postComments: postComments
    });
    console.log(this.state.postComments);
    console.log(this.state.postComments.length);

    this.setState({
      //   showComments: true,
      showPostComments: null
    });
    console.log(this.state.showComments);
  };

  render() {
    // const { image, message, createdAt } = this.state.postData;
    // const showComments = this.state.showComments;
    return (
      <div>
        <div>Posts</div>

        {this.state.postData.map((post, index) => (
          <div key={index}>
            <img src={post.image} alt='' />

            <div>{post.message}</div>
            <div>{post.createdAt}</div>

            {/* tags */}
            {post.tags.map((tag, index) => (
              <div key={index}>
                <div>{tag.title}</div>
              </div>
            ))}
            {/* comments */}
            {/* <button onClick={() => this.showComments(post, index)}>
              Comments
            </button> */}
            {this.state.showPostComments === index ? (
              this.state.postComments.length > 0 ? (
                this.state.postComments.map((comment, index) => (
                  <div key={index}>
                    <div>
                      <a onClick={() => this.hideComments(post, index)}>
                        {/* hide */}
                        <i class='fas fa-chevron-circle-up'></i>
                      </a>

                      <div>{comment.id}</div>
                      <div>{comment.body}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <a onClick={() => this.hideComments(post, index)}>
                    {/* hide */}
                    <i class='fas fa-chevron-circle-up'></i>
                  </a>
                  <div>No comments</div>
                </div>
              )
            ) : (
              <div>
                <a onClick={() => this.showComments(post, index)}>
                  {/* show */}
                  <i class='fas fa-chevron-circle-down'></i>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
