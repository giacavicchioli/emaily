import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SourveyNew = () => <h2>SourveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SourveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;