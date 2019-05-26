import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Universities extends Component {

    
    render() {
        return(
            <Table basic celled style={{backgroundColor:'white', textAlign:'center'}} >
                <Table.Header >
                    <Table.HeaderCell style={{width:'5%'}}>ID</Table.HeaderCell>
                    <Table.HeaderCell style={{width:'75%'}}>Üniversite Adı</Table.HeaderCell>
                    <Table.HeaderCell style={{width:'20%'}}>Detay</Table.HeaderCell>
                </Table.Header>

                <Table.Body>
                    {this.props.universities ? this.props.universities.map(item => (
                        <Table.Row >
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell><Link to={{pathname:'UniversityDetail', state:{id:item.id}}}>tıklayın..</Link></Table.Cell>
                        </Table.Row>
                    )):
                    <Table.Row >
                        <Table.Cell  collapsing={3}>Görüntülenecek hiç üniversite yok !</Table.Cell>
                    </Table.Row>}
                </Table.Body>
            </Table>
        );
    }
} 

export default Universities;