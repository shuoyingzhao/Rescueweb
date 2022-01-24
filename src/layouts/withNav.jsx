import React from 'react';
import Header from './Header'
import Footer from './Footer'

const withNav = WrappedComponent => {
    function WithNav(props) {
        return (
            <div>
                <Header />
                <WrappedComponent props={props} />
                <Footer />
            </div>
        )
    }

    return WithNav;
};

export default withNav;