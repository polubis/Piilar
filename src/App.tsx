import { Route, Switch } from 'react-router-dom';
import { Container, Theme, createStyles } from '@material-ui/core';
import React, { useEffect } from 'react';

import Navbar from './shared/components/navbar';
import { Routes } from './models/Routes';
import TasksPage from './pages/tasks-page/TasksPage';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '72px 0 0 0'
    }
  })
);

const App = () => {
  const classes = useStyles();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth={false} className={classes.root}>
        <Switch>
          <Route exact path={Routes.TASKS} component={TasksPage} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
