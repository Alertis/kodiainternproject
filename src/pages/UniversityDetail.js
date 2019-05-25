import React, { Component } from 'react';
import { Table,  Grid, Icon, Button, Modal, Form} from 'semantic-ui-react';

const options = [
    { key: '1', text: 'Karabük Üniversitesi', value: '1' },
    { key: '2', text: 'Celal Bayar Üniversitesi', value: '2' },
    { key: '3', text: 'Kocaeli Üniversitesi', value: '3' },
  ]
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
                <Modal size="tiny" open={true}>
                    <Modal.Header>Öğrenci Ekle</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field >
                                <label >Öğrenci Adı</label>
                                <input placeholder='Öğrenci adını yazınız..' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Select fluid label='Üniversite' options={options} placeholder='Üniversite Seçiniz' />
                            </Form.Field>
                            <Form.Field>
                                <label>Başlama Tarihi</label>
                                <input placeholder='Başlangıç tarihini yazınız..' />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic style={{float:'left'}}>İptal Et</Button>
                        <Button primary content='Oluştur' />
                    </Modal.Actions>
                </Modal>
            </div>        
        );
    }
} 

export default Students;
