var express = require('express');
var appli = express();


appli.get(
	'/',
	function(request,response){
		response.send("nan nan rien a changé , tout tout a continué");
	}
);

appli.get(
	'/user',
	function(resquest,response){
		var retour = {
			"nom" : "castro",
			"prenom" : "ludovic"
		};
		response.json(retour);
		}
);



appli.listen(12107, function(){
	console.log('salut ç v la fammile , je suis un viyageur de futur que la vide ma mettre sur route toi ami ribery enfant meurt , vite aide moi steplait ami')
});
