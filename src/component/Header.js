import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class HeaderComp extends Component {
    state={
        active:''
    }
   componentDidMount(){
       switch(window.location.pathname){
           case '/App':
                this.setState({active:'anasayfa'});
                break;
            case '/University':
                this.setState({active:'university'});
                break;
            case '/Students':
                this.setState({active:'students'});
                break;
            case '/UniversityDetail':
                this.setState({active:'university'});
                break;
            default :
                this.setState({active:'anasayfa'});
                break;

       }
   }
   
    render() {
        console.log(window.location.pathname)
        return(
        <Menu  pointing secondary className="headerMenu">
            <img src='/Assets/logo.svg' width="150"/>
            <Menu.Menu position="right"  >
                <Link to="/App"> <Menu.Item as="h3" name='Anasayfa' active={this.state.active === 'anasayfa' ? true : false} /> </Link>
                <Link to="/University"> <Menu.Item as="h3" name='Üniversiteler' active={this.state.active === 'university' ? true : false}   /></Link>
                <Link to="/Students"> <Menu.Item as="h3" name='Öğrenciler' active={this.state.active === 'students' ? true : false}  /> </Link>
            
                
            </Menu.Menu>
        </Menu>
        );
    }
} 

export default HeaderComp;