import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const Comment = (props) => {
    const classes = useStyles();
    const {email, body} = props.comment;
    return (
        <div>
        <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src="https://i.ibb.co/CJWtNNq/images.jpg" alt=""/></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{email}</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
            <Typography>{body}</Typography>
          </Grid>
      </Paper>      
        </div>
    );
};

export default Comment;