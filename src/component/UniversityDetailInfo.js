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
                        {this.props.university.id}
                    </Grid.Column>
                    <Grid.Column   >
                        {this.props.university.founded_at}                        
                    </Grid.Column>
                    <Grid.Column  >
                        {this.props.university.type}  
                    </Grid.Column>
                    <Grid.Column  >
                        <a href={this.props.university.web_page}>Ziyaret Et <Icon name="arrow right" /></a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
} 

export default UniversityDetailInfo;