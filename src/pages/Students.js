import React, { Component } from 'react';
import { Table,  Modal, Container} from 'semantic-ui-react';


class Students extends Component {
 
    render() {
        return(
            
            <div className="fullGray">
                 <span className="title">Öğrenci Listesi</span>
                 <Table basic celled style={{backgroundColor:'white', textAlign:'center'}} >
                    <Table.Header >
                        <Table.HeaderCell style={{width:'5%'}}>ID</Table.HeaderCell>
                        <Table.HeaderCell style={{width:'50%'}}>Öğrenci Adı</Table.HeaderCell>
                        <Table.HeaderCell style={{width:'45%'}}>Üniversite</Table.HeaderCell>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                        </Table.Row> 
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Muhammed Dilmaç</Table.Cell>
                            <Table.Cell>Karabük Üniversitesi</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Modal size="mini" open={true}>
                    <Modal.Header>Muhammed Dilmaç</Modal.Header>
                    <Modal.Content>
                       <span>ID: </span> 1 <br />
                       <span>Üniversite Adı: </span> Karabük Üniversitesi <br />
                       <span>Başlangıç Tarihi: </span> 2012-01-01 <br />
                       <span>Kuruluş Tarihi: </span> 2000-01-01 <br />
                       <span>Türü: </span> Devlet <br />

                    </Modal.Content>
                    
                </Modal>
            </div>        
        );
    }
} 

export default Students;
