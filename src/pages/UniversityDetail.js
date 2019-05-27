import React, { Component } from 'react';
import { Button, Modal, Form} from 'semantic-ui-react';
import UniversityDetailInfo from '../component/UniversityDetailInfo';
import UniversityDetailStudents from '../component/UniversityDetailStudents';
import ModalStudentDetail from '../component/ModalStudentDetail';
import ModalAddStudent from '../component/ModalAddStudent';

import { connect } from 'react-redux';
import {fetchUniversityDetail, fetchStudentDetail} from '../actions/University';

class UniversityDetail extends Component {
    state={
        University:[],
        modalOpenStudent:false,
        studentDetail:[],
        modalOpenAddStudent:false
    }
    componentWillReceiveProps(nextState){
        nextState.University.universities &&  nextState.University.universities.then((data)=>{
            this.setState({University:data})
        });
        nextState.University.studentDetail.length !== 0 &&  nextState.University.studentDetail.then((data)=>{
            this.setState({studentDetail:data})
        });
    }
    componentDidMount(){
        this.props.fetchUniversityDetail(this.props.location.state)
    }
    modalClick = () => {
        this.setState({modalOpenStudent:!this.state.modalOpenStudent})
    }
    modalAddStudentClick = () => {
        this.setState({modalOpenAddStudent:!this.state.modalOpenAddStudent})
    }
    fetchStudentDetail = (id) => {
        this.props.fetchStudentDetail(id);
        this.modalClick();
    }
    render() {
        return(
            
            <div className="fullGray">
                 <div className="titleBox">
                    <span className="title">{this.state.University.name} </span> <span>{this.state.University.city}</span>
                    <Button style={{float:'right'}} className="detailButton" onClick={this.modalAddStudentClick}>Öğrenci Ekle</Button>
                </div> 
                 <UniversityDetailInfo university={this.state.University} />
                <UniversityDetailStudents students={this.state.University.students} fetch={this.fetchStudentDetail} />
                <ModalStudentDetail open={this.state.modalOpenStudent} onClose={this.modalClick} detail={this.state.studentDetail} />
                <ModalAddStudent open={this.state.modalOpenAddStudent} onClose={this.modalAddStudentClick} />
                
            </div>        
        );
    }
} 

const mapStateToProps=({University})=>{
    return {University}
}

const mapDispatchToProps={
    fetchUniversityDetail, fetchStudentDetail
}

export default connect(mapStateToProps,mapDispatchToProps)(UniversityDetail);
