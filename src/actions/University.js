import axios from 'axios';
import {API_BASE} from '../config/env';
import store from '../store';

export const FETCH_UNIVERSITIES="FETCH_UNIVERSITIES";
export const FETCH_UNIVERSITY_DETAIL="FETCH_UNIVERSITY_DETAIL";
export const FETCH_STUDENT_DETAIL="FETCH_STUDENT_DETAIL";
export const SAVE_STUDENT="SAVE_STUDENT";



export function fetchUniversity(){
    return dispatch => {
        store.dispatch({
            type:FETCH_UNIVERSITIES,
            payload:axios.get(`${API_BASE}/universities`)
            .then(result => (result.data))
        });
    }
}

export function fetchUniversityDetail(id){
    return dispatch => {
        store.dispatch({
            type:FETCH_UNIVERSITY_DETAIL,
            payload:axios.get(`${API_BASE}/universities/${id}`)
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

export function saveStudent(name, started_at, university){
    return dispatch => {
        store.dispatch({
            type:SAVE_STUDENT,
            payload:axios.post(`${API_BASE}/students`,{name, started_at, university})
            .then(result => (result.data))
        });
    }
}

