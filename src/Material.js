import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Copyright from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 2, 7),
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 0),
  },
  button: {
    marginTop: "1rem",
  },
  cardGrid: {
    padding: "20px",
    // paddingTop: "50px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  cardMedia: {
    paddingTop: "56.25%",
    // height: "56.2px",
    // width: "200px",
  },
  cardContent: {
    // flexGrow: 1,
  },
  footer: {
    // marginTop: "2rem",
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));

function Material() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='primary'
              gutterBottom
              // paragraph
            >
              Photo Album
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color='textSecondary'
              // paragraph
              gutterBottom
            >
              Writing some random text to make it a meaning full information for
              the theme that I have choosen to make this website on.
            </Typography>
            <div>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button
                    className={classes.button}
                    variant='contained'
                    color='primary'
                  >
                    Explore the Album
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.button}
                    variant='outlined'
                    color='primary'
                  >
                    Generate Album
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://picsum.photos/200'
                    title='I am title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                      This is heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet hey just writing one more lline
                      to see how it goes
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button color='primary' size='large'>
                      Know More
                    </Button>
                    <Button color='primary' size='small'>
                      Save
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer} align='center'>
        <Typography variant='h5' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Copyrights not reserved <Copyright />
        </Typography>
      </footer>
    </>
  );
}

export default Material;
