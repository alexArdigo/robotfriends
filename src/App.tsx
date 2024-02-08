import './App.css';
import "tachyons";
import {robots} from "./assets/robots.ts";
import CardList from "./Components/CardList";

const App = () => {
    return (
        <CardList robots={robots}/>
    );

};

export default App;
