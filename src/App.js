import './App.css';
import React, { Component } from 'react';

// React Router Dom
import { Routes, Route } from "react-router-dom";

// User Template
import HomeTemplate from "./_pages_/HomeTemplate";

// Admin Template
// import AdminTemplate from './_pages_/AdminTemplate';

// Page Not Found
// import PageNotFound from './_pages_/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Routes>
        {/* Home Template */}
        <Route exact path="https://rmit-kendo-club.github.io/rmit-kendo-club-website/" element={<HomeTemplate />}></Route>

        {/* Every Match Template*/}
        {/* <Route path="/score-board" element={}></Route> */}
        
        {/* Admin Template */}
        {/* <AdminProtectedRoute exact path="/admin" component={AdminTemplate} /> */}
        {/* <Route path="admin" element={<AdminTemplate/>} /> */}
        
        {/* Page Not Found */}
        {/* <Route path="" component={PageNotFound} /> */}
      </Routes>
    )
  };
};