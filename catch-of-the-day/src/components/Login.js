import React from 'react';

class Login extends React.Component{
    render(){
        return <nav className="login">
            <h2>Inventory Login</h2>
            <p>Sign in to manage the Inventory</p>
            <button className="facebook" onClick={()=> this.props.authenticate("Facebook")}> Login with Facebook</button>
            <button className="twitter" onClick={() => this.props.authenticate("Twitter")}> Login with Twitter</button>
            <button className="github" onClick={() => this.props.authenticate("GitHub")}> Login with GitHub</button>
        </nav>
    }
}

export default Login;