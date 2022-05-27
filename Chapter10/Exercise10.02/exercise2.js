$(document).ready(function () { //tan pronto y se hayan cargado los elementos del comunto has la llamada
 
    $.ajax({ //es la configuracion de una llamada usando jquery
        method: 'GET', //post put delete etc  
        dataType: 'json', // vas a intercambiar con formato json
        url: 'https://www.thesportsdb.com/api/v1/json/2/eventslast.php',
        data: {id: 134862}, //eso es el id de la cosa del registro que quiere consultar
        success: function (data) {
		
            // find the most recent game that had a score reported
            const lastGame = data.results.find(g => g.intAwayScore != null && 
                                                    g.intHomeScore != null);
	  
            $("#game_date").html(lastGame.dateEvent); //esa es syntaxis de jquery 
            $("#away_team").html(lastGame.strAwayTeam);
            $("#home_team").html(lastGame.strHomeTeam);
            $("#away_score").html(lastGame.intAwayScore);
            $("#home_score").html(lastGame.intHomeScore);

            $("#game_table").show();
        }
    });
});