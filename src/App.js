import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom" // on importe les outils du router
import Home from "./component/Home"
import Favorites from "./component/Favorites"
import Popular from "./component/Popular"
import PageNotFound from "./component/PageNotFound"
import WeeklyBattle from "./component/WeeklyBattle"
import PopularBattle from "./component/PopularBattle"
import Weekly from "./component/Weekly"

const App =()=> {

 
    return (
      <BrowserRouter> {/* on place ce composant autour de tout le reste de l'application */}         
            {/* ici, la nav apparaîtra sur toutes les pages, donc on ne l'appelle qu'une fois dans App */}
            {/* Chaque lien est un composant <Link> */} 

            <div className="navbar navbar-light bg-dark">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/Weekly">Weekly</Link>
          <Link className="nav-link" to="/WeeklyBattle">WeeklyBattle</Link>
          <Link className="nav-link" to="/Popular">Popular</Link>
          <Link className="nav-link" to="/PopularBattle">PopularBattle</Link>
          <Link className="nav-link" to="/Favorites">Favorites</Link>
           </div>

          {/* Ce composant ne s'affichera pas à l'écran, il liste les chemins possibles */}
            <Switch>
            <Route exact path="/" component={Home} /> 
             {/* Chaque route est un composant <Route> */}                                         
            <Route path="/Weekly" component={Weekly} />
            <Route path="/WeeklyBattle" component={WeeklyBattle} />
            <Route path="/Popular" component={Popular} />
            <Route path="/PopularBattle" component={PopularBattle} />
            <Route path="/Favorites" component={Favorites} />
            <Route path="*" component={PageNotFound} />
          </Switch>
       
       
      </BrowserRouter>
    );

}
export default App;
