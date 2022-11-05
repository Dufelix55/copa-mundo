//Criar uma função para bandeiras e horas
function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}
/*Acescentado na Aula 4*/
//Criar uma função para criar mais cartões de bandeiras
//As bandeiras e horas vai para a função
let delay = -0.5
function createCard(date, day, games) {
  /*Acescentado na Aula 4*/
  delay = delay + 0.4

  //Reeber o argumento de animação, recebe a variavel delay

  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
} //Toda vez que executar a função retorna a região  bandeiras novas

//vai procurar #app | Transforma este htmla em ""
//Acentos grave = pode quebralinhas

//Agora o conteúdo das bandeiras é o JS que esta fazendo
//Mas os cartões fica para ser criados na função JS
//Jogar os games dentro do card

document.querySelector("#cards").innerHTML =
  /*Trocado card*/
  /* /Aula 4 = voltar o header para o html, deixar só conteúdo das bandeiras\
  <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
  </header>                                   
  */

  /* /Aula 4 = voltar o main para o html, deixar só conteúdo das bandeiras\
  <main id="cards"></main>                                   
  */
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
