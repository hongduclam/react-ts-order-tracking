import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppLayout from "./components/ui/AppLayout";
import AppRoutes from "./AppRoutes";
import "antd/dist/antd.min.css";
function App() {
  return (
   <BrowserRouter>
     <AppLayout>
       <AppRoutes />
     </AppLayout>
   </BrowserRouter>
  );
}

export default App;
