import React from 'react'
import * as Pages from './pages'
import {
    Switch,
    Route
  } from "react-router-dom";
  
  const mapPages = (pages) => {
    var iteratedPages = new Array
    const iteratePages = (pages) => {
        //get the keys for pages
        Object.getOwnPropertyNames(pages).forEach((key) => {
            //check to see if the return value of the item is also an array, if so iterate through the child array
            if(!!pages[key].__esModule) {
                iteratePages(pages[key])
            // make sure only components are returned and not boolean values
            } else if( typeof pages[key] === "function") {
                iteratedPages.push(
                     <Route key={key} exact path={pages[key].route}>
                         {React.createElement(pages[key])}
                    </Route>
                )
            }
        })
    }
    iteratePages(pages)
    return iteratedPages
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