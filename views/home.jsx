const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img width="500px" src="/images/home-img.jpg" alt="A restauant"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@shawnanggg">shawnanggg</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    );
};

module.exports = home;