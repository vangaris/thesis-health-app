import React from "react";
import { Switch, Route } from "react-router";
import Examinations from "./pages/examinations";

const useStyles = makeStyles({
  main: {
    paddingTop: appBarHeight,
  },
});

const AppRouter = () => {
  const styles = useStyles();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Switch>
          <Route path="/examinations" render={() => <Examinations />} />
          {/* <Route path="/my-account" render={() => <MyAccount />} />
          <Route path="/error" render={() => <Error />} />
          <Route path="/login" render={() => <Login />} /> */}
        </Switch>
      </main>
    </>
  );
};

export default AppRouter;
