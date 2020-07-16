import React,{Component} from 'react';
import './login.css';
import { Image} from 'semantic-ui-react';
import ImageLogin from './Rectangle_28.png';

class Login extends Component{
    render(){
        return(
            <div className="form-box">
                <div className="image-login" >
                <Image  src={ ImageLogin} />
                </div>
            </div>
        )
    }
}

export default Login;