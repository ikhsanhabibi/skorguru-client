import React, { Component } from "react";
import { Link } from "react-router-dom/Link";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Icon from "@material-ui/core/Icon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import "./Post.css";

dayjs.extend(relativeTime);

class Post extends Component {
  render() {
    //console.log(this.props.post);

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
          title={`${userHandle} · ${dayjs(createdAt).fromNow()}`}
          subheader={category}
          component={Link}
          to={`/users/${userHandle}`}
          color="primary"
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
          <IconButton onClick="" aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default Post;
