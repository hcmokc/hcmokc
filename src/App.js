import './App.css';
import React, { Component } from 'react';

// React Router Dom
import { Routes, Route } from "react-router-dom";

// User Template
import HomeTemplate from "./_pages_/HomeTemplate";
import MatchTemplate from "./_pages_/MatchTemplate";

// Admin Template
import AdminTemplate from './_pages_/AdminTemplete';

// Page Not Found
// import PageNotFound from './_pages_/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Routes>
        {/* Home Template */}
        <Route exact path="/" element={<HomeTemplate />}></Route>

        {/* Every Match Template*/}
        <Route path="/match-info" element={<MatchTemplate />}></Route>

        {/* Admin Template*/}
        <Route path="/admin-temp" element={<AdminTemplate/>}></Route>

        {/* Admin Template */}
        {/* <AdminProtectedRoute exact path="/admin" component={AdminTemplate} /> */}
        {/* <Route path="admin" element={<AdminTemplate/>} /> */}

        {/* Page Not Found */}
        {/* <Route path="" component={PageNotFound} /> */}
      </Routes>
    )
  };
};