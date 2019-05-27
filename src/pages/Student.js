import React, { Component } from 'react';
import Students from '../component/Students'
import { connect } from 'react-redux';
import {fetchStudents, fetchStudentDetail} from '../actions/Student';
import ModalStudentDetail from '../component/ModalStudentDetail';
import HeaderComp from '../component/Header'

class Student extends Component {
    state={
        Students:[],
        studentDetail:[],
        modalOpen:false
    }
    modalClick = () => {
        this.setState({modalOpen:!this.state.modalOpen})
    }
    fetchDetail = (id) => {
        this.props.fetchStudentDetail(id);
        this.modalClick();
    }
    componentDidMount(){
        this.props.fetchStudents();
    }
    componentWillReceiveProps(nextState){
        nextState.Student.student &&  nextState.Student.student.then((data)=>{
            this.setState({Students:data})
        });

        nextState.Student.studentDetail.length !== 0 &&  nextState.Student.studentDetail.then((data)=>{
            this.setState({studentDetail:data})
        });
    }
    render() {
        return(
            <div>
                <HeaderComp />            

                <div className="fullGray">
                 <span className="title">Öğrenci Listesi</span>
                <Students students={this.state.Students}  fetch={this.fetchDetail} />
                <ModalStudentDetail open={this.state.modalOpen} onClose={this.modalClick} detail={this.state.studentDetail} />
                
            </div>  
            </div>
                  
        );
    }
} 

const mapStateToProps=({Student})=>{
    return {Student}
}

const mapDispatchToProps={
    fetchStudents, fetchStudentDetail
}

export default connect(mapStateToProps,mapDispatchToProps)(Student);

