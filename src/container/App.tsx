import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Dashboard from "./Dashboard";
import History from "./History";
import Inbox from "./Inbox";
import Training from "./Training";
import More from "./More";


const App: React.FC = () => {
    return (
        <Router>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/history" component={History}/>
            <Route path="/training" component={Training}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/more" component={More}/>
        </Router>
    );
};

export default App;
