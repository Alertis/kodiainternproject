import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Students extends Component {

    
    render() {
        console.log(this.props.students)
        return(
            <Table basic celled style={{backgroundColor:'white', textAlign:'center'}} >
            <Table.Header >
                <Table.HeaderCell style={{width:'5%'}}>ID</Table.HeaderCell>
                <Table.HeaderCell style={{width:'50%'}}>Öğrenci Adı</Table.HeaderCell>
                <Table.HeaderCell style={{width:'45%'}}>Üniversite</Table.HeaderCell>
            </Table.Header>

            <Table.Body>
            {this.props.students ? this.props.students.map(item => (

                <Table.Row >
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.university}</Table.Cell>
                </Table.Row>
            )):<Table.Row >
                    <Table.Cell  collapsing={3}>Görüntülenecek hiç Öğrenci yok !</Table.Cell>
                </Table.Row>}
               
            </Table.Body>
        </Table>
        );
    }
} 

export default Students;