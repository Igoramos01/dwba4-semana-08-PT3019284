class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }
  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }
  media(){
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4)
  }
  situacao() {
    return this.media() > 6 ? 'Aprovado' : 'Reprovado';
  }
}

const alunos = [
  new Aluno('João', 'Silva', 7.5, 8.0),
  new Aluno('Josefa', 'Oliveira', 2.0, 5.5),
  new Aluno('Marcelo', 'Fernandes', 7.5, 5.0),
  new Aluno('Ana', 'Beatriz', 9.0, 9.5),
  new Aluno('Luiz', 'Albano', 4.0, 6.8)
];

function mostrarInformacoesAlunos(alunos) {
  for (const aluno of alunos) {
    alert('Nome completo: ' + aluno.nomeCompleto());
    alert('Média: ' + aluno.media().toFixed(2));
    alert('Situação: ' + aluno.situacao());
  }
}
mostrarInformacoesAlunos(alunos);

