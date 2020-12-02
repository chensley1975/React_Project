import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <a className="btn btn-social-icon btn-instagram mt-3" href="https://www.instagram.com/">
                            <i className="fa fa-instagram" />
                        </a>
                        <a className="btn btn-social-icon btn-facebook mt-3" href="https://www.facebook.com/">
                            <i className="fa fa-facebook" />
                        </a>
                        <a className="btn btn-social-icon btn-twitter mt-3" href="https://www.twitter.com/">
                            <i className="fa fa-twitter" />
                        </a>
                        <a className="btn btn-social-icon btn-youtube mt-3" href="https://www.youtube.com/">
                            <i className="fa fa-youtube" />
                        </a>
                    </div>
                </div>
                <br/>
                <div className="row text-center">
                    <div className="col">
                        <a role="button" className="btn btn-link list-items" href="tel:+14054968178">
                            <i className="fa fa-phone" /> (405) 496-8178
                        </a>
                        <br/>
                        <a role="button" className="btn btn-link list-items" href="mailto:chensley@porchangdgable.com">
                            <i className="fa fa-envelope-o" /> chensley@porchandgable.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;