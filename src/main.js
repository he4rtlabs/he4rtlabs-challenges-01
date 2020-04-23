(() => {
	const [resultado, inputs, form, btnCalculaHoras, btnLimpaFormulario] = [document.querySelector('#resultado'), document.querySelectorAll('input'), document.querySelector('#form'), document.querySelector('#calcular'), document.querySelector('#limpar')];
	
	const calculaHoras = () => {	
		let valorHora = 0;
		const [dailyTime, daysWorking, daysVacation, projectValue] = inputs;
		
		valorHora = (projectValue.valueAsNumber / (daysWorking.valueAsNumber * 4 * dailyTime.valueAsNumber) ) + (( daysVacation.valueAsNumber * daysWorking.valueAsNumber * dailyTime.valueAsNumber )) || 0;
		
		exibeResultados(resultado, valorHora)
	}

	const eventos = () => {
		validaInputs(inputs, validaInput);
	
		validaEnvioFormulario(form);
	}	

	const validaEnvioFormulario = (formulario) => {
		formulario.addEventListener('submit', function(e){
			e.preventDefault()
		})
	}

	const validaInput = (input) => {
		input.addEventListener('keydown', (e) => {
			e.stopPropagation()
			const ultimoDigitoCodigo = e.code[e.code.length - 1];
			const invalid = isNaN(ultimoDigitoCodigo) && e.key.length === 1;
			if(invalid){
				e.preventDefault()
			}
		})
	}
	
	const validaInputs = (inputs) => {
		for(let input of inputs){
			validaInput(input);
		}
	}

	const exibeResultados = (resultado, valorHora) => {
		resultado.style="max-height: 5em; color: rgb(255, 255, 255); text-shadow: 1px 1px 1px rgb(0, 53, 0); background-color: rgb(54, 136, 54); padding: 20px 10px" //altera o style de um elemento html
		resultado.innerText = 'O valor total da sua hora é...\nR$'+valorHora.toFixed(2)+'!'
	}

	const limparResultado = () => {
		resultado.style="#resultado"		
	}

	btnCalculaHoras.addEventListener('click', calculaHoras);
	btnLimpaFormulario.addEventListener('click', limparResultado);
	
	eventos()

})()
