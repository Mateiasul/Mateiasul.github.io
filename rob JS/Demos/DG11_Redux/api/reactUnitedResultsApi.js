class ReactUnitedResultsApi {

    static getResults() {
      return fetch(`http://localhost:3000/results`)
        .then(response => {return response.json();})
        .catch(error => { return error});
    }
  }
  
  export default ReactUnitedResultsApi;