import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import User from "./features/User/User";
import Role from "./features/Role/Role";
import { withRouter } from 'react-router-dom';

class App extends React.Component {

    render = () => {
        return (
            <div>
                <MainLayout {...this.props}>
                    <Switch>
                        <Route path={'/'} exact>
                            <User/>
                        </Route>

                        <Route path={'/role'} exact>
                            <Role/>
                        </Route>
                    </Switch>
                </MainLayout>
            </div>
        )
    }
}

export default withRouter(App);
