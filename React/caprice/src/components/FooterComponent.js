import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            Hong Kong<br />
                            <i className="fa fa-phone fa-lg"/> +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"/> +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"/> <a href="mailto:caprice@food.net">
                            caprice@food.net</a>
                        </address>
                    </div>
                    
                      <div className="col-12 col-sm-4 align-self-center" style={{marginTop: "6px"}} >
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" style={{margin: "2px"}}  href="http://google.com/+"><i className="fa fa-google-plus"/></a>
                            <a className="btn btn-social-icon btn-facebook" style={{margin: "2px"}} href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"/></a>
                            <a className="btn btn-social-icon btn-linkedin" style={{margin: "2px"}} href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"/></a>
                            <a className="btn btn-social-icon btn-twitter" style={{margin: "2px"}} href="http://twitter.com/"><i className="fa fa-twitter"/></a>
                            <a className="btn btn-social-icon btn-google" style={{margin: "2px"}} href="http://youtube.com/"><i className="fa fa-youtube"/></a>
                            <a className="btn btn-social-icon" style={{margin: "2px"}} href="mailto:"><i className="fa fa-envelope-o"/></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Caprice</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
