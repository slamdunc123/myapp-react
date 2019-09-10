import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  state = {
    postData: [],
    postCommentsData: [],
    postComments: [],
    postId: null
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
  showPostComments = post => {
    console.log('You clicked' + post.id);
    const p = this.state.postCommentsData.filter(
      postCommentData => postCommentData.postId === post.id
    );
    console.log(this.state.postCommentsData);
    console.log(p);
    this.setState({
      postId: post.id,
      postComments: p
    });
    console.log(this.state.postComments);
  };

  render() {
    // const { image, message, createdAt } = this.state.postData;
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
            {/* comment */}
            <button onClick={() => this.showPostComments(post)}>
              Comments
            </button>
            {this.state.postComments.map((comment, index) => (
              <div key={index}>
                <div>{comment.id}</div>
                <div>{comment.body}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
