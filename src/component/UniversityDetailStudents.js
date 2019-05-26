import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class UniversityDetailStudents extends Component {

    
    render() {
        return(
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
        );
    }
} 

export default UniversityDetailStudents;