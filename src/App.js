import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PostsProvider } from "context";
import { Post, Posts } from "pages";

function App() {
  const propsMessage = "Hello from";

  return (
    <div className="App">
      <Router>
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
