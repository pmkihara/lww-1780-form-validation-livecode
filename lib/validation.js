// TODO: Validar este formulário

// 1. Selecionar os elementos:
// allInputs = todos os campos do formulário menos o checkbox
// tosCheckbox = checkbox com os termos de serviço
// submitButton = botão de submit

// 2. Funções auxiliares:
// markAsValid() = recebe um input, adiciona a classe is-valid, remove a classe
// is-invalid

// markAsInvalid() = recebe um input, remove a classe is-valid, adiciona a
// classe is-invalid

// enableButton() = habilita o submitButton e altera o texto para 'Submit'

// disableButton() = desabilita o submitButton e altera o texto para 'Please
// fill all the fields'

// isValid() = recebe um input, verifica se é válido (se não está vazio) =>
// retornar um boolean
// O campo é válido quando:
// Quando não estiver vazio

// validateInput() = recebe um input e marca como válido ou inválido

// tosChecked() = verifica se o checkbox está checado => retorna um boolean

// allValid() = verifica se todos os inputs são válidos => retorna um boolean
// Dica: Array.prototype.every() => itera sobre todos os elementos e verifica se
// todos passam por um determinado teste
// Dica 2: DOMTokenList: contains() => verifica se uma coleção possui um
// determinado valor

// 3. Juntar tudo no validateForm()
// - Verificar se todos os inputs são válidos
// - Verificar se o checkbox está checado
// - Habilitar o botão se o formulário for válido e desabilitar o botão se não
// for válido

// 4. Adicionar os eventListeners no checkbox e em cada um dos inputs

// 5. Opcional: validar o input de email com regex
// 5.1. Selecionar o emailInput (input do email)
// 5.2. Expandir o validateInput para validar o emailInput com regex
// (/^[\w\-\.]+@([\w\-]+\.)+\w{2,4}$/)
