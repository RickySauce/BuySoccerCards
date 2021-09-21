import React from 'react'
import * as Pages from './pages'
import { routeWithConventions } from 'src/functions';
import {
    Switch,
    Route
  } from "react-router-dom";
  
  const mapPages = (pages) => {
    //get function names belonging to Pages. iterate through the array
    return ( 
        Object.getOwnPropertyNames(pages).map((page,index) => {
            //only return a Route if the property is a component belonging to Pages
            if (typeof pages[page] === "function") {
                return(
                    <Route key={page} exact path={routeWithConventions(page)}>
                        {React.createElement(pages[page])}
                    </Route>
                )
            }
        })
    )
}

const Main = () => {
    return(
        <div className="main">
            <Switch>
                {mapPages(Pages)}
            </Switch>
        </div>
    )
}

export default Main