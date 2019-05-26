import axios from 'axios';
import {API_BASE} from '../config/env';
import store from '../store';

export const FETCH_STUDENTS="FETCH_STUDENTS";
export const FETCH_STUDENT_DETAIL="FETCH_STUDENT_DETAIL";


export function fetchStudents(){
    return dispatch => {
        store.dispatch({
            type:FETCH_STUDENTS,
            payload:axios.get(`${API_BASE}/students`)
            .then(result => (result.data))
        });
    }
}

export function fetchStudentDetail(id){
    return dispatch => {
        store.dispatch({
            type:FETCH_STUDENT_DETAIL,
            payload:axios.get(`${API_BASE}/students/${id}`)
            .then(result => (result.data))
        });
    }
}