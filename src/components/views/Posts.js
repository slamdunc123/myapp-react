import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  state = {
    postData: []
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `http://localhost:3100/posts?owner.id=${id}`;
    axios
      .get(url)
      .then(response => {
        this.setState({
          postData: response.data
        });
        console.log(this.state.postData);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    // const { image, message, createdAt } = this.state.postData;
    return (
      <div>
        <div>Posts</div>

        {this.state.postData.map(post => (
          <div key={post.id}>
            <img src={post.image} alt='' />

            <div>{post.message}</div>
            <div>{post.createdAt}</div>
            {post.tags.map(tag => (
              <div key={tag.title}>
                <div>{tag.title}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
