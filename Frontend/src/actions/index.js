import axios from 'axios'
const API_URL = 'http://localhost:9999/api/curriculums';

//Read
export function getCurriculums() {
  const response = axios.get(API_URL);
  console.log('get Curriculums', response);
  return{
    type: 'GET_CURRICULUMS',
    payload: response
  }
}

//CREATE
export function createCurriculums(data) {
  const response = axios.post(API_URL, data);
  return {
    type: 'GET_CURRICULUMS',
    payload: response
  }
}

//DELETE
export function deleteCurriculums(id) {
  const response = axios.delete(API_URL + '/' + id);
  return {
    type: 'GET_CURRICULUMS',
    payload: response
  }
}

