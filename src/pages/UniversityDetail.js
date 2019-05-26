import React, { Component } from 'react';
import { Button, Modal, Form} from 'semantic-ui-react';
import UniversityDetailInfo from '../component/UniversityDetailInfo';
import UniversityDetailStudents from '../component/UniversityDetailStudents';
import { connect } from 'react-redux';
import {fetchUniversityDetail} from '../actions/University';


const options = [
    { key: '1', text: 'Karabük Üniversitesi', value: '1' },
    { key: '2', text: 'Celal Bayar Üniversitesi', value: '2' },
    { key: '3', text: 'Kocaeli Üniversitesi', value: '3' },
  ]
class UniversityDetail extends Component {
    state={
        University:[]
    }
    componentWillReceiveProps(nextState){
        nextState.University.universities &&  nextState.University.universities.then((data)=>{
            this.setState({University:data})
        })
    }
    componentDidMount(){
        this.props.fetchUniversityDetail(this.props.location.state)
    }
    render() {
        return(
            
            <div className="fullGray">
                 <div className="titleBox">
                    <span className="title">{this.state.University.name} </span> <span>{this.state.University.city}</span>
                    <Button style={{float:'right'}} className="detailButton">Öğrenci Ekle</Button>
                </div> 
                 <UniversityDetailInfo university={this.state.University} />
                <UniversityDetailStudents students={this.state.University.students} />
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

const mapStateToProps=({University})=>{
    return {University}
}

const mapDispatchToProps={
    fetchUniversityDetail
}

export default connect(mapStateToProps,mapDispatchToProps)(UniversityDetail);
