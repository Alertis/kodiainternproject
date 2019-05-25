import React, { Component } from 'react';
import { Table,  Grid, Container} from 'semantic-ui-react';


class University extends Component {
 
    render() {
        return(
            
            <div className="fullGray">
                 <h2>Üniversite Listesi</h2>
                 <Table basic celled style={{backgroundColor:'white', textAlign:'center'}} >
                    <Table.Header >
                        <Table.HeaderCell style={{width:'5%'}}>ID</Table.HeaderCell>
                        <Table.HeaderCell style={{width:'75%'}}>Üniversite Adı</Table.HeaderCell>
                        <Table.HeaderCell style={{width:'20%'}}>Detay</Table.HeaderCell>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>
                            
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell>tıklayın..</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell>tıklayın..</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                            <Table.Cell><a>tıklayın..</a></Table.Cell>

                        </Table.Row>
                   
                    </Table.Body>
                </Table>
            </div>        
        );
    }
} 

export default University;
