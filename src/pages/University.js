import React, { Component } from 'react';
import Universities from '../component/Universities';
import { connect } from 'react-redux';
import {fetchUniversity} from '../actions/University';
import HeaderComp from '../component/Header'

class University extends Component {
    state={
        University:[]
    }
    componentWillReceiveProps(nextState){
        nextState.University.universities &&  nextState.University.universities.then((data)=>{
            this.setState({University:data})
        })
    }
    componentDidMount(){
        this.props.fetchUniversity();
    }
    render() {
        return(
            <div>
                <HeaderComp />
                <div className="fullGray">
                    <span className="title">Üniversite Listesi</span>
                    <Universities universities={this.state.University} />
                </div>   
            </div>
                 
        );
    }
} 

const mapStateToProps=({University})=>{
    return {University}
}
const mapDispatchToProps={
    fetchUniversity
}

export default connect(mapStateToProps,mapDispatchToProps)(University);
