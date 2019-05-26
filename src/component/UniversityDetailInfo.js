import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

class UniversityDetailInfo extends Component {

    
    render() {
        return(
            <Grid className="Detail" padded style={{backgroundColor:'white',marginTop:'20%'}}>
                <Grid.Row className="DetailTitle" style={{width:'auto'}}> 
                    <Grid.Column  >
                        ID
                    </Grid.Column>
                    <Grid.Column  >
                        Kuruluş Tarihi
                    </Grid.Column>
                    <Grid.Column  >
                        Türü
                    </Grid.Column>
                    <Grid.Column  >
                        Web Sitesi
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column  >
                        1
                    </Grid.Column>
                    <Grid.Column   >
                        2000-01-01
                    </Grid.Column>
                    <Grid.Column  >
                        Devlet
                    </Grid.Column>
                    <Grid.Column  >
                        <a>Ziyaret Et <Icon name="arrow right" /></a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
} 

export default UniversityDetailInfo;