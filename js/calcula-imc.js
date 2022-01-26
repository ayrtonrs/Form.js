var pacientes = document.querySelectorAll(".paciente") // TR individual
for(var i = 0; i < pacientes.length; i++){ //Loop Determinando quantidade de TR para ser calculada
    let paciente = pacientes[i] //pacientes = <TR> "0" próxima TR a cada fim de loop

    let tdPeso = paciente.querySelector(".info-peso")//tag TD completa dentro da TR
    let peso = tdPeso.textContent   // Busca o valor em Texto da TD

    let tdAltura = paciente.querySelector(".info-altura")
    let altura = tdAltura.textContent

    let tdImc = paciente.querySelector('.info-imc')

    let pesoEValido = validaPeso(peso)      //Declarando variaveis boolean
    let alturaEValida = validaAltura(altura)    

        if(!pesoEValido){
            pesoEValido = false;
            tdImc.textContent = "Peso Inválido!"
            paciente.classList.add("paciente-invalido") // cor na linha
        }
        if(!alturaEValida){
            alturaEValida = false;
            tdImc.textContent = "Altura Inválida!"
            paciente.classList.add("paciente-invalido")
        }
        if(alturaEValida && pesoEValido){
            let imc = calculaImc(peso,altura)
            tdImc.textContent = imc
    }
}

function validaPeso(peso){
    if(peso >=0 && peso < 999){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <=3.0){
        return true
    }else{
        return false
    }
}

function calculaImc(peso,altura){
    let imc = 0
    imc = peso / (altura* altura)

    return imc.toFixed(2)
}