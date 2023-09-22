var nomealuno = new Array("João da Silva","Lucas de Sousa","Igor Ramos");
var primeiranota = new Array (7,8,9);
var segundanota = new Array (8.5, 9,10);
var peso1 = 0.6;
var peso2 = 0.4;

function firstalert() {
  for (var i=0; i<3; i++) {
    var nota_final = (primeiranota[i] * peso1) + (segundanota[i] * peso2);
    alert("Nome do aluno: " + nomealuno[i] + "\n" + "Nota 1: " + primeiranota[i] + "\n" + "Nota 2: "+segundanota[i] + "\n");
    alert("Nome do aluno: " + nomealuno[i] + "\n" + "Nota final: " + nota_final);
   } 
}

firstalert();