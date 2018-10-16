export default {
  fetchData: function(query) {
    return fetch('/graphql', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query }),
    })
  },
  fetchEmpById: function(id) {
    return fetch('/graphql', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        query: 
        `query Employee($id: ID) {
          employee(id: $id) {
            firstName
            lastName
          }
        }`,
        variables: {id} 
      })
    })
  }
}