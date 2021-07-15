//Méthode qui se charge de faire l'appel à L'API Back avec le calcul
export default async function appelApi(display) {
    const splittedDisplay = display.split(" ").pop().trim();
    if(splittedDisplay !== "" && !isNaN(splittedDisplay) && !isNaN(parseFloat(splittedDisplay))){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ calcul: display })
          };
          const response = await fetch((process.env.REACT_APP_BACK_URL || "http://localhost:3001/") + 'math/calculer', requestOptions)
          const data = await response.json()
          return data;
    }
    return {isOk:false}
  }