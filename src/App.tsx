import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Commodity from "./pages/commodity";
import CommodityDetail from "./pages/commodityDetail";



const routes = [
    {
        path: '/',
        component: Commodity
    },
    {
        path: '/commodity/:id',
        component: CommodityDetail,
    }
]

function App() {
  return (
      <Router>
          {routes.map((route) => (
              <Route
                  path={route.path}
                  key={route.path}
                  component={route.component}
                  exact
              />
          ))}
      </Router>
  );
}

export default App;
