import { CLEAR,UPDATE,RESULT } from "../actions/typeAction";
//Etat de base du state
const initialState = {
    display: '0',
    accumulated: "0",
    historyCalcul: '0',
    historyResult: '0',
    lastInputOperation: "operator"
  }
  
  //Reducer de base de l'application
  export default function (state = initialState, action) {
    switch (action.type) {
      //Quand on veut update l'affichage (Nouvelle touche)
        case UPDATE: {
            const updateDisplay = action.payload;
            if ((state.display.includes('.') && updateDisplay.input === ".")) {
              const splittedDisplay = state.display.split(" ").pop();
              // On vérifie qu'on ajoute pas un nouveau . sur le même nombre deux fois
              if(splittedDisplay.includes('.')){
                return {
                  ...state,
                }
              }
            }
            var boolSliceNeeded = false

            // Si l'input est un opérateur alors...
            if (updateDisplay.operation === "operator"){
              // On vérifie que le dernier update de l'affichage n'était pas déjà un opérateur
              //On ajoute un espace avant et après l'input
              if(updateDisplay.input === "/")
              updateDisplay.input = "÷"

              updateDisplay.input = " " + updateDisplay.input + " "
              if (state.lastInputOperation === "operator"){
                boolSliceNeeded = true
              }
            }
            return {
              ...state,
              display: state.display === '0' ? updateDisplay.input
            : (boolSliceNeeded? state.display.slice(0,-3) : state.display) + updateDisplay.input,
              historyCalcul: "Ans = "+ state.historyResult,
              lastInputOperation: updateDisplay.operation
            }
        }

        /*
          On va mettre à jour le state avec ce cas
          On a obtenu le résultat du calcul via l'API
        */
        case RESULT:{
          const apiReturn = action.payload
          if (apiReturn.error !== "" && apiReturn.error !== undefined){
          }else{
            return {
              ...state,
              display: Number(apiReturn.resultat).toString(),
              historyCalcul: state.display + " =",
              historyResult: Number(apiReturn.resultat).toString(),
            }
          }
        }
        //Quand on appuie sur "AC" pour nettoyer l'opération en cours
        case CLEAR: {
            return initialState
        }
        default:
        return state;
    }

}