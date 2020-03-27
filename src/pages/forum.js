import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import Post from "../components/Post";

import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

import "./forum.css";

class forum extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let recentPost = this.state.posts ? (
      this.state.posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>loading...</p>
    );
    return (
      <Grid
        container
        direction="row"
        className="grid-container"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item sm={3} xs={3}></Grid>
        <Grid item sm={6} xs={6}>
          {recentPost}
        </Grid>
        <Grid item sm={3} xs={3}></Grid>
      </Grid>
    );
  }
}

export default forum;
