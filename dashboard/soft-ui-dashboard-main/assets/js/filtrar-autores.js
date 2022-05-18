$(() => {

  //Animacion para el formulario
  let aparece = true;  
  $('#agregar').click(function(e){
    if(aparece){
      $('#formAutor').slideDown(800);
      aparece= !aparece;
  }
  else{
    $('#formAutor').slideUp(800);
      aparece= !aparece;
  }    
  });
  //EN PROCESO
  $('td').hover(function(e) {
    $(e.target).css('backgroundColor', '#8A2BE2');
    }, function(e) {
    $(e.target).css('backgroundColor', '#fff');
    });

    //FILTRO
    $('#divBotones')
      .click(function(e) {
        let filtro = $(e.target).val();
        if(filtro=="ALL")
        {
          $('tr').show();
          $('#formAutor').slideUp(800);  
          aparece= !aparece; 
        }
        else if(filtro!=="+ADD AUTHOR"){
          $('tr').hide();        
          $(`tr:contains(${filtro})`).show();

          if(!aparece){
            $('#formAutor').slideUp(800);  
            aparece= !aparece; 
          }
    
        }
  });     
});

//$(".inboxfeedlist li").live('hover',function(){});
