import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';



class HeaderComp extends Component {
   
    render() {
        return(
        <Menu  pointing secondary className="headerMenu">
            <img src='https://www.medicana.com.tr/assets/uploads/medicana-logo.png' width="150"/>
            <Menu.Menu position="right"  >
                <Menu.Item as="h3"  name='Anasayfa' active={true} onClick={this.handleItemClick} />
                <Menu.Item as="h3" name='Üniversiteler' onClick={this.handleItemClick} />
                <Menu.Item   as="h3" name='Öğrenciler' onClick={this.handleItemClick}
                />
            
            </Menu.Menu>
        </Menu>
        );
    }
} 

export default HeaderComp;