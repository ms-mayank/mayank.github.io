import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(<App />, document.querySelector("#root"));
serviceWorkerRegistration.register();

