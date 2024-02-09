import './style.scss';
import React from "react";

type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
const SearchBox = ({setSearch}: Props) => {
        return (
            <div className="pa2">
                <input
                    className={"pa3 ba b--green bg-lightest-blue"}
                    type={"search"}
                    placeholder={"Search robots"}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        );
}

export default SearchBox