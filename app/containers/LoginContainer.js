import React from 'react';

class LoginContainer extends React.Component {

     render() {
        return (
        
            <div className="login login-with-news-feed">
            
                <div className="news-feed">
                    <div className="news-image">
                        <img src="assets/img/login-bg/bg-7.jpg" data-id="login-cover-image" alt="" />
                    </div>
                    <div className="news-caption">
                        <h4 className="caption-title"><i className="fa fa-diamond text-success"></i> Announcing the Color Admin app</h4>
                        <p>
                            Download the Color Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>

                <div className="right-content">

                    <div className="login-header">
                        <div className="brand">
                            <span className="logo"></span> Color Admin
                            <small>responsive bootstrap 3 admin template</small>
                        </div>
                        <div className="icon">
                            <i className="fa fa-sign-in"></i>
                        </div>
                    </div>

                    <div className="login-content">
                        <form action="index.html" method="POST" className="margin-bottom-0">
                            <div className="form-group m-b-15">
                                <input type="text" className="form-control input-lg" placeholder="Email Address" />
                            </div>
                            <div className="form-group m-b-15">
                                <input type="text" className="form-control input-lg" placeholder="Password" />
                            </div>
                            <div className="checkbox m-b-30">
                                <label>
                                    <input type="checkbox" /> Remember Me
                                </label>
                            </div>
                            <div className="login-buttons">
                                <button type="submit" className="btn btn-success btn-block btn-lg">Sign me in</button>
                            </div>
                            <div className="m-t-20 m-b-40 p-b-40">
                                Not a member yet? Click <a href="register_v3.html" className="text-success">here</a> to register.
                            </div>
                            <hr />
                            <p className="text-center text-inverse">
                                &copy; Color Admin All Right Reserved 2015
                            </p>
                        </form>
                    </div>
                </div>
            </div>  
        )
     } 
}

export default LoginContainer