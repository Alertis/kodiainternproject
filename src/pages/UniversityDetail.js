import React, { Component } from 'react';
import { Table,  Grid, Icon, Button} from 'semantic-ui-react';


class Students extends Component {
 
    render() {
        return(
            
            <div className="fullGray">
                 <div className="titleBox">
                    <span className="title">Karabük Üniversitesi </span> <span>Karabük</span>
                    <Button style={{float:'right'}} className="detailButton">Öğrenci Ekle</Button>
                </div> 
                 <Grid className="Detail" padded style={{backgroundColor:'white',marginTop:'20%'}}>
                    <Grid.Row className="DetailTitle" style={{width:'auto'}}> 
                        <Grid.Column className="DetailTitleColumn" >
                            ID
                        </Grid.Column>
                        <Grid.Column className="DetailTitleColumn" >
                            Kuruluş Tarihi
                        </Grid.Column>
                        <Grid.Column className="DetailTitleColumn" >
                            Türü
                        </Grid.Column>
                        <Grid.Column className="DetailTitleColumn" >
                            Web Sitesi
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column className="DetailTitleColumn" >
                            1
                        </Grid.Column>
                        <Grid.Column className="DetailTitleColumn"  >
                            2000-01-01
                        </Grid.Column>
                        <Grid.Column className="DetailTitleColumn" >
                            Devlet
                        </Grid.Column>
                        <Grid.Column className="DetailTitleColumn" >
                            <a>Ziyaret Et <Icon name="arrow right" /></a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                 <Table basic celled style={{backgroundColor:'white'}} >
                    <Table.Header >
                        <Table.HeaderCell style={{width:'5%'}}>ID</Table.HeaderCell>
                        <Table.HeaderCell style={{width:'50%'}}>Öğrenci Adı</Table.HeaderCell>
                        <Table.HeaderCell style={{width:'45%'}}>Başlama Tarihi</Table.HeaderCell>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>2019-05-25</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>2019-05-25</Table.Cell>
                        </Table.Row> 
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>2019-05-25</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>2019-05-25</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>2019-05-25</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>2019-05-25</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>2019-05-25</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>        
        );
    }
} 

export default Students;
