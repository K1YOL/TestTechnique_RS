
import { CLEAR,UPDATE,RESULT } from "./typeAction";


export const clearDisplay = content => ({
    type: CLEAR,
    payload: {
      operation: "clear"
    }
  })

  export const updateDisplay = (content,type) => ({
    
    type: UPDATE,
    payload: {
      input: content,
      operation: type
    }
  })

  export const apiReturn = (content,error) => ({
    
    type: RESULT,
    payload: {
      resultat: content,
      error: error
    }
  })