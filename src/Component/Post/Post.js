import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
  },
  mainBtn: {
    background: 'blue',
    borderRadius: 4,
    border: 0,
    color: 'white',
    height: 48,

    // padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  linkBtn: {
    margin: 'auto',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const Post = (props) => {
  const classes = useStyles();

  const { title, body, id } = props.post;
  return (
    <Box m="50px" boxShadow={3} bgcolor="lightblue" p={2} >
    <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      {props.showBtn && (
        <Link to={'/post/' + id} className={classes.linkBtn}>
          <Button size="small" variant="contained" className={classes.mainBtn}>
            Post Details
          </Button>
        </Link>
      )}
    </CardActions>
  </Card>
  </Box>
  );
};

export default Post;