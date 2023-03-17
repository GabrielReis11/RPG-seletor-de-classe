
function escolher(){
    var classe = document.getElementById('classe').value
    var msg = document.getElementById('msg')
    var foto = document.getElementById('img')

    var forca = document.getElementById('forca')
    var agilidade = document.getElementById('agilidade')
    var inteligencia = document.getElementById('inteligencia')
    var furtividade = document.getElementById('furtividade')

    var fortxt = document.getElementById('for-txt')
    var agitxt = document.getElementById('agi-txt')
    var inttxt = document.getElementById('int-txt')
    var furttxt = document.getElementById('furt-txt')

    console.log(classe)
    if (classe == `guerreiro`){
        msg.innerHTML = `Voce selecionou Guerreiro`
        foto.src = `./imagens/guerreiro.gif`
        foto.style.width = `400px`
        forca.value = 10
        agilidade.value = 6
        inteligencia.value = 4
        furtividade.value = 2
        fortxt.innerHTML = forca.value
        agitxt.innerHTML = agilidade.value
        inttxt.innerHTML = inteligencia.value
        furttxt.innerHTML = furtividade.value
    } else if (classe ==`arqueiro`){
        msg.innerHTML = `Voce selecionou Arqueiro`
        foto.src = `./imagens/arqueiro.gif`
        foto.style.width = `400px`
        forca.value = 6
        agilidade.value = 10
        inteligencia.value = 6
        furtividade.value = 8
        fortxt.innerHTML = forca.value
        agitxt.innerHTML = agilidade.value
        inttxt.innerHTML = inteligencia.value
        furttxt.innerHTML = furtividade.value
    } else if (classe == `mago`){
        msg.innerHTML = `Voce selecionou Mago`
        foto.src = `./imagens/mago.gif`
        foto.style.width = `400px`
        forca.value = 2
        agilidade.value = 4
        inteligencia.value = 10
        furtividade.value = 3
        fortxt.innerHTML = forca.value
        agitxt.innerHTML = agilidade.value
        inttxt.innerHTML = inteligencia.value
        furttxt.innerHTML = furtividade.value
    } else if (classe == `ninja`){
        msg.innerHTML = `Voce selecionou Ninja`
        foto.src = `./imagens/ninja.gif`
        foto.style.width = `400px`
        forca.value = 5
        agilidade.value = 8
        inteligencia.value = 5
        furtividade.value = 10
        fortxt.innerHTML = forca.value
        agitxt.innerHTML = agilidade.value
        inttxt.innerHTML = inteligencia.value
        furttxt.innerHTML = furtividade.value
    } else {
        msg.innerHTML = `Selecione uma classe`
        foto.src = `./imagens/boy.gif`
        foto.style.width = `550px`
        forca.value = 0
        agilidade.value = 0
        inteligencia.value = 0
        furtividade.value = 0
        fortxt.innerHTML = forca.value
        agitxt.innerHTML = agilidade.value
        inttxt.innerHTML = inteligencia.value
        furttxt.innerHTML = furtividade.value
    }
}