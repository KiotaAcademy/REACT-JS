import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Resume from "./components/cv-page/cv";

const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/resume" component={Resume} />
    </BrowserRouter>
  </React.StrictMode>
);

// Use ReactDOM.createRoot to render the application
ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
