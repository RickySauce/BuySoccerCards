import React from 'react'
import * as Pages from './pages'
import {
    Switch,
    Route
  } from "react-router-dom";
  

  const mapPages = (pages) => {
    const routeWithConventions = (name) => {
       var route = "/"
       if(name !== 'Home') {
        name.split('').forEach((letter, index) => {
            if (letter === name[0]){
                 route = route + letter.toLowerCase()
            } else if (letter === letter.toLowerCase()) {
                route = route + letter
            } else {
                route = route + "-" + letter.toLowerCase()
            }
        })
       }
       return route
    }

    //get function names belonging to Pages. iterate through the array
    return ( 
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