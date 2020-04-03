let Elementos = (function(){
	'use strict'

	let _elementos = function() {
		let resultado = document.getElementById('resultado')
		let inputs = document.getElementsByTagName('input')
		let form = document.getElementById('form')

		this.$resultado = function(){
			return resultado
		}

		this.$inputs = function(){
			return inputs
		}
		
		this.$form = function(){
			return form
		}
		
		this.buscaElemento = function(idElemento, nodeList){
			for(let elemento of nodeList){
				if(idElemento === elemento.id){
					return elemento
				}
			}
		}

		this.eventos = function(e){
			this.adicionaEvento(this.$inputs())

			this.adicionaEvento(this.$form())
		}	

		this.adicionaEvento = function(elemento){
			let $elementoEvento = elemento
			let formulario = $elementoEvento.id === 'form'
			if(formulario){
				this.validaEnvioFormulario($elementoEvento)
			} else {
				this.validaNodeList($elementoEvento, this.validaInput)
			}
		}

		this.validaEnvioFormulario = function(formulario){
			formulario.addEventListener('submit', function(e){
				e.preventDefault()
			})
		}

		this.validaInput = function(input){
			input.addEventListener('keydown', function(e){
				e.stopPropagation()
				let ultimoDigitoCodigo = e.code[e.code.length - 1]
				let invalid = isNaN(ultimoDigitoCodigo) && e.key.length === 1
				if(invalid){
					e.preventDefault()
				}
			})
		}

		this.validaNodeList = function(nodeList, funcaoASerExecutada){
			for(let elemento of nodeList){
				funcaoASerExecutada(elemento)
			}
		}
	}
	
	return _elementos
})()

function getElementos(){
	let elementos = new Elementos()
	return elementos
}

getElementos().eventos()

function calculaHoras(){	
	let valorHora = 0
	let elementos = getElementos()
	let $resultado = elementos.$resultado()
	let $dailyTime = elementos.buscaElemento('daily-time', elementos.$inputs()).value
	let $daysWorking = elementos.buscaElemento('days-working', elementos.$inputs()).value
	let $daysVacation = elementos.buscaElemento('days-vacation', elementos.$inputs()).value
	let $projectValue = elementos.buscaElemento('project-value', elementos.$inputs()).value
	
	converteResultados($dailyTime, $daysWorking, $daysVacation, $projectValue)
	
	valorHora = ($projectValue / ($daysWorking * 4 * $dailyTime) ) + (( $daysVacation * $daysWorking * $dailyTime )) || 0	
	exibeResultados($resultado, valorHora)
}	

function converteResultados(){
	for(variavel of arguments){
		variavel = parseFloat(variavel)
	}
}

function exibeResultados($resultado, valorHora){
	$resultado.style="max-height: 5em; color: rgb(255, 255, 255); text-shadow: 1px 1px 1px rgb(0, 53, 0); background-color: rgb(54, 136, 54); padding: 20px 10px" //altera o style de um elemento html
	$resultado.innerText = 'O valor total da sua hora é...\nR$'+valorHora.toFixed(2)+'!'
}

function limparResultado(){
	let resultado = getElementos().$resultado()
	resultado.style="#resultado"		
}
