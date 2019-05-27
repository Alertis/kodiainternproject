import React, { Component } from 'react';
import { Modal, Form, Button  } from 'semantic-ui-react';

const options = [
    { key: '1', text: 'Karabük Üniversitesi', value: '1' },
    { key: '2', text: 'Celal Bayar Üniversitesi', value: '2' },
    { key: '3', text: 'Kocaeli Üniversitesi', value: '3' },
  ]
class ModalAddStudent extends Component {

    render() {
        return(
            <Modal size="tiny" open={this.props.open} onClose={this.props.onClose}>
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
        );
    }
} 

export default ModalAddStudent;