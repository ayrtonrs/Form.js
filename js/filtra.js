let campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    let pacientes = document.querySelectorAll(".paciente") // chamando a TR paciente

    if(this.value.length > 0){ //se o valor for maior que zero, executar o comando abaixo
        for (let i = 0; i < pacientes.length; i++){ //loop ao final da execução do comando
            let paciente = pacientes[i] //
            let tdNome = paciente.querySelector(".info-nome")
            let nome = tdNome.textContent
            let expressao = new RegExp(this.value,"i") // Expressão regular para buscar tudo
            
            if (!expressao.test(nome)){ //! para reverter o efeito da função
                paciente.classList.add("invisivel")                
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{
        for (let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }

    
})