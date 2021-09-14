import React from 'react'
import * as Pages from './pages'
import {
    Switch,
    Route
  } from "react-router-dom";
  

  const mapPages = (pages) => {
    const routeWithConventions = (name) => {
        name
        debugger
    }

    //get function names belonging to Pages. iterate through the array
    Object.getOwnPropertyNames(pages).map((page,index) => {
        //only return a Route if the property is a component belonging to Pages
        if (typeof pages[page] === "function") {
            return(
                <Route path={routeWithConventions(page)}>
                    {React.createElement(pages[page])}
                </Route>
            )
        }
    })
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