//chamando a classe adicionar-paciente e transformando em variavel
let botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault()//previne a função padrão do botão

    //criando variavel para adicionar dados ao formulario
    let form = document.querySelector("#form-adiciona")
        //coletando dados e montando TR
    let paciente = obtemPacienteDoFormulario(form)
    let pacienteTr = montaTr(paciente)

    let erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
     
    if(!validaPaciente(paciente)){
        console.log("paciente invalido")
        swal("Paciente com peso ou altura invalido");
        return  //encerra aqui caso for inválido o paciente
        }

    //inserindo TR dentro do HTML visualmente
    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    adicionaPacienteNaTabela(paciente)

    form.reset()//limpando o formulario após clicar em adicionar
    let mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""
})

function adicionaPacienteNaTabela(paciente){ //código disponivel no buscar-paciente.js
    let pacienteTr = montaTr(paciente)
    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
}

function exibeMensagensDeErro(erros){
    let ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erros.forEach(function(erro) {
        let li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });
}

//obtendo valores do formulário
function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value ,
        peso: form.peso.value ,
        altura: form.altura.value ,
        gordura: form.gordura.value ,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
        return paciente
}
    //criando a TR no documento
function montaTr(paciente){
    let pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")
    
    //inserindo TD dentro da TR com a função montaTd
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))
    return pacienteTr
}
    //função montaTd que roda no comando acima
function montaTd(dado, classe){
    let td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){
    let erros = []

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido")
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida")
    if(paciente.nome.length == 0) erros.push("Nome não pode estar em branco")
    if(paciente.peso.length ==0) erros.push("Peso não pode estar em branco")
    if(paciente.altura.length ==0) erros.push("Altura não pode estar em branco")
    if(paciente.gordura.length ==0) erros.push("Gordura não pode estar em branco")
       
    return erros
}
