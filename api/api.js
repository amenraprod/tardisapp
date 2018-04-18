
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
    ).then(({ text, response }) => {
      if (!response.ok) {
        return Promise.reject(text)
      }

      return text
    }).catch(err => console.log(err))
}
export default store => next => action => {

  return callApi(endpoint, authenticated).then(
      response =>
        next({
          response,
          authenticated,
          type: successType
        }),
      error => next({
        error: error.message || 'There was an error.',
        type: errorType
      })
    )
  }
