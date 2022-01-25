import React from 'react';

const Footer = () => {
    return(
        <div style={{width:'100%',display:'inline-block'}}>
            <hr/>
            <center>
               <h3>&copy Developer Funnel</h3>
               <a href="www.facebook.com">
                    <img src="images/facebook.png" className="socialIcon"/>
                </a>
                <a href="www.instagram.com">
                    <img src="images/insta.png" className="socialIcon"/>
                </a>
            </center>
        </div>
    )
}

export default Footer;