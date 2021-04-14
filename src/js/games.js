async function getjson(url) {
  const response = await fetch(url)
  const Json = await response.json()
  return Json
}
let gameslist = getjson("./src/js/data.json")
gameslist.then(Json =>gameslist = Json
).then(function(gameslist) {
    swflist = gameslist.swf.sort(function(a, b) {
      return a.nome < b.nome ? -1: a.nome > b.nome ? 1: 0;
    })
    apklist = gameslist.apk.sort(function(a, b) {
      return a.nome < b.nome ? -1: a.nome > b.nome ? 1: 0;
    })
    jarlist = gameslist.jar.sort(function(a, b) {
      return a.nome < b.nome ? -1: a.nome > b.nome ? 1: 0;
    })
    mapalist = gameslist.eventos
    tabelaslist = gameslist.tabelas
    emuladoresswflist = gameslist.emuladorswf
    swflist.forEach(function gamecard(game) {
      const games = document.querySelector('#swf-games')
      games.innerHTML += `
      <div class="game-card">
      <img src="${game.img}" alt="${game.nome}" />

      <div class="card-bottom">
      <p>
      ${game.nome}
      </p>
      <a href="${game.link}" target="_blank">Download</a>
      </div>
      </div>
      `
    })
    jarlist.forEach(function gamecard(game) {
      const games = document.querySelector('#jar-games')
      games.innerHTML += `
      <div class="game-card">
      <img src="${game.img}" alt="${game.nome}" />

      <div class="card-bottom">
      <p>
      ${game.nome}
      </p>
      <a href="${game.link}" target="_blank">Download</a>
      </div>
      </div>
      `
    })
    apklist.forEach(function gamecard(game) {
      const games = document.querySelector('#apk-games')
      games.innerHTML += `
      <div class="game-card">
      <img src="${game.img}" alt="${game.nome}" />

      <div class="card-bottom">
      <p>
      ${game.nome}
      </p>
      <a href="${game.link}" target="_blank">Download</a>
      </div>
      </div>
      `
    })
    mapalist.forEach(function gamecard(mapa) {
      const mapas = document.querySelector('#container-mapas')
      mapas.innerHTML += `
      <div class="game-card">
      <img src="${mapa.img}" alt="${mapa.nome}" />

      <div class="card-bottom">
      <p>
      ${mapa.nome}
      </p>
      <a href="${mapa.link}" target="_blank">Download</a>
      </div>
      </div>
      `
    })
    tabelaslist.forEach(function gamecard(tabela) {
      const tabelas = document.querySelector('#container-tabelas')
      tabelas.innerHTML += `
      <div class="game-card">
      <img src="${tabela.img}" alt="${tabela.nome}" />

      <div class="card-bottom">
      <p>
      ${tabela.nome}
      </p>
      <a href="${tabela.link}" target="_blank">Download</a>
      </div>
      </div>
      `
    })
    emuladoresswflist.forEach(function gamecard(tabela) {
      const emulador = document.querySelector('#container-emuladorswf')
      emulador.innerHTML += `
      <div class="game-card">
      <img src="${tabela.img}" alt="${tabela.nome}" />

      <div class="card-bottom">
      <p>
      ${tabela.nome}
      </p>
      <a href="${tabela.link}" target="_blank">Download</a>
      </div>
      </div>
      `
    })
  })