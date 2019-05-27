import {FETCH_STUDENTS, FETCH_STUDENT_DETAIL} from '../actions/Student';

const initialState={
    student:[],
    studentDetail:[]
}

export default (state=initialState, {type,payload}) => {

    switch(type){
        case FETCH_STUDENTS:
            return{
                ...state,
                student:payload
            };
        case FETCH_STUDENT_DETAIL:
            return{
                ...state,
                studentDetail:payload
            };
        default:
            return state;     
    }

};
