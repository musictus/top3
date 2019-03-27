import React from "react";
import {Footer} from 'react-materialize'

function FooterBottom() {
    
    return (

        <Footer
            copyrights="© 2019 Copyright Top3"
            moreLinks={
                <a className="grey-text text-lighten-4 right" href="#!">Sign Out</a>
            }
            links={
                <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Our Story</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                </ul>
            }
            className='#ff7043 deep-orange lighten-1'
        >
            <h5 className="white-text">Top3</h5>
            {/* <p className="grey-text text-lighten-4">Search our Top3 choice by Food</p> */}
        </Footer>

    )
        }

export default FooterBottom;