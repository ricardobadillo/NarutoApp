import React, { useState, useMemo } from 'react';
import { NinjaCard } from '../Ninjas/NinjaCard';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import {getNinjaByName} from '../../selectors/getNinjaByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    
    const [state, setState] = useState({
        searchText: q
    });

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    const {searchText} = state;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    const ninjasFilter = useMemo(() => getNinjaByName(q), [q]);

    return (
        <div>
            <h1>Search</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Busca tu ninja</h4>
                    <hr/>

                    <form
                        onSubmit={handleSearch}
                    >
                        <input
                            type="text"
                            placeholder="Ingrese un nombre..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        >
                        </input>

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-dark"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    { (q==='') 
                        && 
                        <div className="alert alert-info">
                            Aún no se ha buscado ningún ninja. 
                        </div>
                    }

                    { (q !=='' && ninjasFilter.length === 0)
                        && 
                        <div className="alert alert-danger">
                            No hay resultados de ninjas con la palabra {q}.
                        </div>
                    }

                    {
                        ninjasFilter.map(ninja => (
                            <NinjaCard
                                key={ninja.id}
                                {...ninja}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
