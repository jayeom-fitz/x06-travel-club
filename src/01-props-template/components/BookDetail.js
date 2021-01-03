import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth : 450,
  },
  image: {
    width : '70%',
    height : '70%',
  }
};

class BookDetail extends React.Component {
  render() {
    const { book, classes } = this.props;

    return(
      <Card className={classes.root}>
        <CardHeader title={book.title} subheader={book.author} />
        <CardMedia className={classes.image} component='img' image={book.imgUrl} />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'> {book.introduce} </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(BookDetail);
