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
                {this.props.students ? this.props.students.map(item => (

                    <Table.Row >
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.started_at}</Table.Cell>
                    </Table.Row>
                )):
                <Table.Row >
                    <Table.Cell  collapsing={3}>Görüntülenecek hiç öğrenci yok !</Table.Cell>
                </Table.Row>}
                   
                </Table.Body>
            </Table>
        );
    }
} 

export default UniversityDetailStudents;