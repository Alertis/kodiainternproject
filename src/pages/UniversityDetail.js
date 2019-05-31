import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import UniversityDetailInfo from '../component/UniversityDetailInfo';
import UniversityDetailStudents from '../component/UniversityDetailStudents';
import ModalStudentDetail from '../component/ModalStudentDetail';
import ModalAddStudent from '../component/ModalAddStudent';
import ModalInfo from '../component/ModalInfo';

import { connect } from 'react-redux';
import {fetchUniversityDetail, fetchStudentDetail, fetchUniversity, saveStudent} from '../actions/University';
import HeaderComp from '../component/Header';
 
class UniversityDetail extends Component {
    state={
        UniversityDetail:[],
        universities:[],
        modalOpenStudent:false,
        studentDetail:[],
        modalOpenAddStudent:false,
        saveStudent:[],
        modalOpenInfo:false
    }
    componentWillReceiveProps(nextState){
        nextState.University.universityDetail &&  nextState.University.universityDetail.then((data)=>{
            this.setState({UniversityDetail:data})
        });
        nextState.University.studentDetail.length !== 0 &&  nextState.University.studentDetail.then((data)=>{
            this.setState({studentDetail:data})
        });
        nextState.University.universities &&  nextState.University.universities.then((data)=>{
            this.setState({universities:data})
        });
        nextState.University.saveStudent.length !==0 &&  nextState.University.saveStudent.then((data)=>{
            this.setState({saveStudent:data, modalOpenInfo:true, modalOpenAddStudent:false })

        });
    }
    componentDidMount(){
        this.props.fetchUniversityDetail(this.props.location.state);
        this.props.fetchUniversity();
    }
    modalClick = () => {
        this.setState({modalOpenStudent:!this.state.modalOpenStudent})
    }
    modalInfoClick = () => {
        this.setState({modalOpenInfo:!this.state.modalOpenInfo})
    }
    modalAddStudentClick = () => {
        this.setState({modalOpenAddStudent:!this.state.modalOpenAddStudent})
    }
    fetchStudentDetail = (id) => {
        this.props.fetchStudentDetail(id);
        this.modalClick();
    }
    saveStudent = (name, started_at, university) => {
        this.props.saveStudent(name, started_at, university)
    }
    render() {
        return(
            <div>
                <HeaderComp />
                <div className="fullGray">
                    <div className="titleBox">
                        <span className="title">{this.state.UniversityDetail.name} </span> <span>{this.state.UniversityDetail.city}</span>
                        <Button style={{float:'right'}} className="detailButton" onClick={this.modalAddStudentClick}>Öğrenci Ekle</Button>
                    </div> 
                    <UniversityDetailInfo university={this.state.UniversityDetail} />
                    <UniversityDetailStudents students={this.state.UniversityDetail.students} fetch={this.fetchStudentDetail} />
                    <ModalStudentDetail open={this.state.modalOpenStudent} onClose={this.modalClick} detail={this.state.studentDetail} />
                    <ModalAddStudent open={this.state.modalOpenAddStudent} university={this.state.universities} onClose={this.modalAddStudentClick} save={this.saveStudent} />  
                    <ModalInfo open={this.state.modalOpenInfo} onClose={this.modalInfoClick} data={this.state.saveStudent} />
                </div> 
            </div>
                
        );
    }
} 

const mapStateToProps=({University})=>{
    return {University}
}

const mapDispatchToProps={
    fetchUniversityDetail, fetchStudentDetail, fetchUniversity, saveStudent
}

export default connect(mapStateToProps,mapDispatchToProps)(UniversityDetail);
