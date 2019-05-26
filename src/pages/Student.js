import React, { Component } from 'react';
import { Table,  Modal, Container} from 'semantic-ui-react';
import Students from '../component/Students'
import { connect } from 'react-redux';
import {fetchStudents} from '../actions/Student';

class Student extends Component {
    state={
        Students:[]
    }
    componentDidMount(){
        this.props.fetchStudents();
    }
    componentWillReceiveProps(nextState){
        nextState.Student.student &&  nextState.Student.student.then((data)=>{
            this.setState({Students:data})
        })
    }
    render() {
        return(
            
            <div className="fullGray">
                 <span className="title">Öğrenci Listesi</span>
                <Students students={this.state.Students}/>
                <Modal size="mini" open={false}>
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

const mapStateToProps=({Student})=>{
    return {Student}
}

const mapDispatchToProps={
    fetchStudents
}

export default connect(mapStateToProps,mapDispatchToProps)(Student);

