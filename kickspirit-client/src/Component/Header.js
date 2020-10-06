import React, {useEffect} from 'react';

function Header(){

    useEffect(() => {
        
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Kick Spirit</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                    <h1 className="font-weight-light">Vertically Centered Masthead Content</h1>
                    <p className="lead">A great starter layout for a landing page</p>
                </div>
                </div>
            </div>
            </header>
            <section className="py-5">
            <div className="container">
                <h2 className="font-weight-light">Page Content</h2>
                =
            </div>
            </section>
        </header>
    )

}

export default Header;