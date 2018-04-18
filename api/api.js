
const BASE_URL = 'http://localhost:3000/api/'
function callApi(endpoint, authenticated) {

  let token = localStorage.getItem('access_token') || null
  let config = {}

  if(authenticated) {
    if(token) {
