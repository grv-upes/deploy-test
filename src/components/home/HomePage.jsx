import React from 'react';
import './HomePage.css'
import avatar from '../../images/avatar.png'

const HomePage = () => {
    return(
        <main className="main-main">
            <img src={avatar} alt="It's me!!!" title="Gaurav Goyal"/>
            {/* <section className="some-more">
                <button>About</button>
                <button>Blogs</button>
            </section> */}
        </main>
    );
}

export default HomePage;