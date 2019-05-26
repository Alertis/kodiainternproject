import React, { Component } from 'react';
import { Table,  Grid, Icon, Button, Modal, Form} from 'semantic-ui-react';
import UniversityDetailInfo from '../component/UniversityDetailInfo';
import UniversityDetailStudents from '../component/UniversityDetailStudents';


const options = [
    { key: '1', text: 'Karabük Üniversitesi', value: '1' },
    { key: '2', text: 'Celal Bayar Üniversitesi', value: '2' },
    { key: '3', text: 'Kocaeli Üniversitesi', value: '3' },
  ]
class Students extends Component {
 
    render() {
        console.log(this.props.location.state)
        return(
            
            <div className="fullGray">
                 <div className="titleBox">
                    <span className="title">Karabük Üniversitesi </span> <span>Karabük</span>
                    <Button style={{float:'right'}} className="detailButton">Öğrenci Ekle</Button>
                </div> 
                 <UniversityDetailInfo />
                <UniversityDetailStudents />
                <Modal size="tiny" open={false}>
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
