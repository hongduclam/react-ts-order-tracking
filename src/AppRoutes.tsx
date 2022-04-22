import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import * as PageRoutes from './components/pages/PageRoutes';
import FeatureLayout from "./components/ui/FeatureLayout";
import {RouteParams} from "./types";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Switch>
        <>
          {Object.values(PageRoutes).map((routeTableItem: RouteParams) => {
            const {path, exact, component: Component, pageTitle, goBackPath} = routeTableItem;
            return (
              <Route key={path} path={path} exact={exact}>
                <FeatureLayout pageTitle={pageTitle} goBackPath={goBackPath}>
                  <Component/>
                </FeatureLayout>
              </Route>
            );
          })
          }
        </>
        <Route>
          <div>404 - Not Found</div>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
