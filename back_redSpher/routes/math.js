// Routeur "Math" qui va s'occuper de gérer toutes les méthodes de calcul nécessaire
var express = require('express');
var router = express.Router();

/* Méthode POST qui permet de calculer une expression mathématique (récupérer dans le body de l'appel) */
router.post('/calculer', function(req, res, next) {
  console.log("Réception :",req.body.calcul)
  if (req.body.calcul == undefined){
    res.status(422).send({erreur:"Paramètre incorrect"})
  } else {
    try {
      var calcul = req.body.calcul.replace('÷','/')
      var eval_calc = eval(calcul)
      console.log("Evaluation réussie, résultat : ",eval_calc)
      res.status(200).send({resultat:eval_calc})
    } catch (e) {
        if (e instanceof SyntaxError) {
          res.status(500).send({erreur:"Syntax de l'expression incorrect"})
        }else{
          res.status(500).send({erreur:"Erreur lors du calcul de l'expression"})
        }
    }
  }
});

module.exports = router;

