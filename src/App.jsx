import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './css/global.css'

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
