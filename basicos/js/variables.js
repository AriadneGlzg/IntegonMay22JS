//var y let nos dejan declarar variables let tiene la ventaja de que las variables solamente viven en el espacio donde se encuentran, solo vive para ese contexto
//hahi hay un alcance global
//let datoGeneral = 100; //camelCasing aqui al ponerla asi esa variable va a ser digamos global se declara en ese punto y va a ser esa pa todo el codigo existente menos si se redeclara en algun punto dentro de llaves
calculo1();
calculo2();
console.log(datoGeneral);
function calculo1(){ //si comentamos let datoGeneral en la parte de ariba habra problemas ya que 
   //datoGeneral=100;
    let datoGeneral=100; //si datoGeneral esta definida solo en function, esa variable solo va a vivir para ese contexto
   datoGeneral+=5;  // por lo tanto en calculo2 habra problemas porque no existe esa variable datoGeneral
} // al descomentar el let dato general no va a afectar a calculo1 porque le da preferencia al datoGeneral que esta dentro de las llaves, le hace overshadow a la del contexto general que seria la de la primer linea

function calculo2(){ //
    datoGeneral+=10;
}

//en resumen let solo vive para el contexto del bloque el bloque es todo lo que este dentro de sus llavesitas pero del mas interno su propio bloquesito {} var si sobreviviria en bloques de mas afuera {{{var}}} vive en todos los bloques, {{{let}}} vive solo (o es solo valida) en su bloquesito interno
//al usar var es digamos en un contexto mas global 
// let no se pude estar redefiniendo y redefiniendo 