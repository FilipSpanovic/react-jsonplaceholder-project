import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PostsProvider } from "context";
import { Post, Posts } from "pages";
import { Layout } from "hoc/Layout";

function App() {
  const propsMessage = "Hello from";

  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <PostsProvider propsMessage={propsMessage}>
              <Route
                exact
                path="/posts"
                render={(props) => (
                  <Posts propsMessage={propsMessage} {...props} />
                )}
              />

              <Route
                path="/post/:id"
                render={(props) => (
                  <Post propsMessage={propsMessage} {...props} />
                )}
              />
            </PostsProvider>

            <Route path="">
              <Redirect to="/posts" />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
