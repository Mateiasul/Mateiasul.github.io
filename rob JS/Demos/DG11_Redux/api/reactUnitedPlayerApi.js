class ReactUnitedPlayerApi {

  static getSquad() {
    return fetch(`http://localhost:3000/players`)
      .then(response => {return response.json();})
      .catch(error => { return error});
  }
}

export default ReactUnitedPlayerApi;
