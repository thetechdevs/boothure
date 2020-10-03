import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <div></div>
                        <h1>404</h1>
                    </div>
                    <h2>Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link href="/">home page</Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;