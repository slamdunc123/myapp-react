import React, { Component } from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import './Activity.scss';



class Activity extends Component {
  state = {
    commentsData: [], // all comments for user
    postCommentsData: [], // all comments for user filtered by specific post id
    activePage: 1,
    itemsPerPage: 5,
    pageRange: 10
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

  handlePageChange(pageNumber) {
    console.log(this.state.commentsData.length)
    console.log(pageNumber);
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: Number(pageNumber) });
  }

  render() {

    var indexOfLastTodo = this.state.activePage * this.state.itemsPerPage;
    var indexOfFirstTodo = indexOfLastTodo - this.state.itemsPerPage;
    var renderedProjects = this.state.commentsData.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log(renderedProjects)



    return (
      <div>
        {/* <div>Activity</div> */}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsPerPage}
          totalItemsCount={this.state.commentsData.length}
          pageRangeDisplayed={this.state.pageRage}
          onChange={(e) => this.handlePageChange(e)}
          prevPageText='Previous'
          nextPageText='Next'
        />

        {renderedProjects
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
