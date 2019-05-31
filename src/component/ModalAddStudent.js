import React, { Component } from 'react';
import { Modal, Form, Button, Message  } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import moment from 'moment';
import 'moment/locale/tr';
const options = []
class ModalAddStudent extends Component {
    state = {
        name: '',
        university: '',
        started_at: '',
        err:''
    }
    handleChange=(e)=>{
        this.setState({ [e.target.name]:e.target.value });
    }
    selectChange = (e,data) => {
        this.setState({ [data.name]:data.value });

    }
    dateChange=(event, {name, value})=>{
        if(value>=moment().format('YYYY-MM-DD')){
            this.setState({ [name]: value });
            this.setState({ err: '' });

        }else{
            this.setState({ err: 'Girilen tarih bugünden küçük olamaz' });
        }
    }
    saveClick = () => {
        if(this.state.name !== '' && this.state.started_at !== '' && this.state.university !== '')
            this.props.save(this.state.name, this.state.started_at, this.state.university)
        else
            this.setState({ err: 'Lütfen formdaki boşlukları doldurunuz.' });

    }
    componentWillReceiveProps(){
        this.props.university.map(data=>{
            options.push({key: data.id, text: data.name, value: data.id})
        })
       
    }
    render() {
        return(
            <Modal size="tiny" open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header>Öğrenci Ekle</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field >
                            <label >Öğrenci Adı</label>
                            <input
                                placeholder='Öğrenci adını yazınız..' 
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Select fluid
                                label='Üniversite'
                                options={options}
                                placeholder='Üniversite Seçiniz'
                                name="university"
                                value={this.state.university}
                                onChange={this.selectChange}  />
                        </Form.Field>
                        <Form.Field>
                            <label>Başlama Tarihi</label>
                            <DateInput
                                placeholder='Başlangıç tarihini yazınız..'
                                name="started_at"
                                iconPosition="left"
                                value={this.state.started_at}
                                onChange={this.dateChange}
                                localization='tr'
                                dateFormat="YYYY-MM-DD"  />
                        </Form.Field>
                    </Form>
                    {this.state.err && <Message color='red'>{this.state.err}</Message>}
                </Modal.Content>
                <Modal.Actions>
                    <Button basic style={{float:'left'}} onClick={this.props.onClose}>İptal Et</Button>
                    <Button primary content='Oluştur' onClick={ this.saveClick} />
                </Modal.Actions>
            </Modal>
        );
    }
} 

export default ModalAddStudent;