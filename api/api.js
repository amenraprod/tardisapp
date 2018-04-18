
const BASE_URL = 'http://localhost:3000/login'
function callApi(endpoint, authenticated) {

  let token = localStorage.getItem('access_token') || null
  let config = {}

  if(authenticated) {
    if(token) {
      config = {
              headers: { 'Authorization': `Bearer ${token}` }
            }
          }
          else {
                throw "No token saved!"
              }
            }

            return fetch(login + endpoint, config)
             .then(response =>
               response.text().then(text => ({ text, response }))
    ).then(({ text, response }) => 
