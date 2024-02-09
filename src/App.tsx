import './App.css';
import "tachyons";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import {useEffect, useReducer, useState} from "react";
import fetchReducer from "./fetchReducer.tsx";

const INITIAL_STATE = {
    loading: false,
    list: [],
    error: false
}

type Robots = {
    id: number
    name: string
    username: string
    email: string
}

const App = () => {
    const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE)
    const [search, setSearch] = useState<string>('');

    const fetchRobots = async (): Promise<Robots[]> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        return await response.json();
    };

    useEffect(() => {

        if (!search) {
            dispatch({type: 'FETCH'})
        }

        fetchRobots()
            .then(data => dispatch({type: 'RESOLVE', payload: data}))
            .catch(error => {
                console.log(error)
                dispatch({type: 'REJECT'})
            });
    }, [search]);


    return (
        <div className={"tc"}>
            <h1 className={"f1"}>RobotFriends</h1>
            <SearchBox setSearch={setSearch}/>
            {
                state.loading
                    ? <h2>Loading...</h2>
                : <CardList robots={state.list} search={search}/>
            }

        </div>
    );
};

export default App;
