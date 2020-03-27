import React, { Component } from "react";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import "./Post.css";

class Post extends Component {
  render() {
    dayjs.extend(relativeTime);

    const {
      category,
      description,
      createdAt,
      userImage,
      userHandle
    } = this.props.post;

    return (
      <Card className="card">
        <CardHeader
          avatar={<Avatar src={userImage}></Avatar>}
          title={userHandle}
          subheader={`${category} · ${dayjs(createdAt).fromNow()}`}
          component={Link}
          to={`/users/${userHandle}`}
        />
        <CardContent className="card-content">
          <Typography variant="body1">{description}</Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="thumbs up">
            <ThumbUpIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default Post;
