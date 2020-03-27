import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import Post from "../components/Post";

import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

import "./home.css";

class home extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        console.log(res.data);
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
      <Grid direction="row" className="grid-container">
        <Grid item sm={2} xs={0} spacing={3} className="left-grid">
          <IconButton onClick="" aria-label="show more">
            <HomeIcon />
          </IconButton>
          <p>log in</p>
          <p>log in</p>
        </Grid>

        <Grid
          item
          sm={10}
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          spacing={3}
          className="right-grid"
        >
          {recentPost}
        </Grid>
      </Grid>
    );
  }
}

export default home;
