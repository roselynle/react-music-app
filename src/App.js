import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from './pages';
import { Header, Footer } from './layout';

import './App.css';

function App() {
    return (
     <>
        <Header />
        <Switch>
           <Route exact path="/" component={Pages.Homepage} />
           <Route path="/about" component={Pages.About} />
           <Route path="/lyrics" component={Pages.Lyrics} />
           <Route component={Pages.NotFound} />
        </Switch>
        <Footer />
     </>
    );
}

export default App;
