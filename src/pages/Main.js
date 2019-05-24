import React, { Component } from 'react';
import { Button,  Grid, Container} from 'semantic-ui-react';
import HeaderComp from '../component/Header'


class Main extends Component {
 
    render() {
        return(
            <Container >
               <HeaderComp />
                <Grid columns={2}>
                    <Grid.Column verticalAlign="middle">
                        <p className="mainTitleText"><span className="title">Güvenliğinizi</span> Yeniden Tanımlayın!</p>
                        <p  className="mainText">Kodia’nın geliştirdiğini yeni nesil siber güvenlik ürünleriyle kurumsal güvenliğinizi artırın. Güvenlik araçlarınızı tek bir merkezden yöneterek proaktif güvenlik sağlayın.</p>
                        <Button className="mainTextButton" position="left">Üniversite Listesi</Button>
                    </Grid.Column>
                    <Grid.Column><img src='Assets/software.png'/></Grid.Column>
                </Grid>
            </Container>
               
           

            
        );
    }
} 

export default Main;