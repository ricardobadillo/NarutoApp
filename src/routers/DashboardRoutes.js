import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { ProtagonistaScreen } from '../components/Protagonista/ProtagonistaScreen';
import { SecundarioScreen } from '../components/Secundario/SecundarioScreen';
import { AntagonistaScreen } from '../components/Antagonista/AntagonistaScreen';
import { NinjaScreen } from '../components/Ninjas/NinjaScreen';
import { SearchScreen } from '../components/Search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/Protagonista" component={ProtagonistaScreen} />
                    <Route exact path="/Ninja/:ninjaId" component={NinjaScreen} />
                    <Route exact path="/Secundario" component={SecundarioScreen} />
                    <Route exact path="/Antagonista" component={AntagonistaScreen} />
                    <Route exact path="/Search" component={SearchScreen} />
                    
                    <Redirect to="/Protagonista" component={ProtagonistaScreen}/>
                </Switch>
            </div>
        </>
    )
}
