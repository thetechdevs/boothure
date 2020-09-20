import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './components/Home/Header';
import Latest5Episode from './components/Home/Latest5Episode';
import CategoryOfEpisode from './components/Home/CategoryOfEpisode';
import Footer from './components/Home/Footer';
import BoothFM from './components/BoothFM/BoothFM';
import BoothDotCom from './components/BoothDotCom/BoothDotCom';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
    return (
        // BEM naming convention
        <section className="app">
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Header />
                        <Latest5Episode />
                        <CategoryOfEpisode />
                        <Footer />
                    </Route>

                    <Route path='/boothFM'>
                        <BoothFM />
                        <Footer />
                    </Route>

                    <Route path='/boothDotCom'>
                        <BoothDotCom />
                        <Footer />
                    </Route>

                    <Route path='*'>
                        <PageNotFound />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </section>
    );
}

export default App;
