// TODO: Validar este formulário

// 1. Selecionar os elementos:
// allInputs = todos os campos do formulário menos o checkbox
const allInputs = document.querySelectorAll(".form-control");

// tosCheckbox = checkbox com os termos de serviço
const tosCheckbox = document.querySelector("#tos");

// submitButton = botão de submit
const submitButton = document.querySelector(".btn");

// [opcional] Selecionar o emailInput (input do email)
const emailInput = document.querySelector('#email')

// 2. Funções auxiliares:
// markAsValid() = recebe um input, adiciona a classe is-valid, remove a classe
// is-invalid
const markAsValid = (input) => {
  input.classList.add("is-valid");
  input.classList.remove("is-invalid");
};

// markAsInvalid() = recebe um input, remove a classe is-valid, adiciona a
// classe is-invalid
const markAsInvalid = (input) => {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
};

// enableButton() = habilita o submitButton e altera o texto para 'Submit'
const enableButton = () => {
  submitButton.disabled = false;
  submitButton.innerText = "Submit";
};

// disableButton() = desabilita o submitButton e altera o texto para 'Please
// fill all the fields'
const disableButton = () => {
  submitButton.disabled = true;
  submitButton.innerText = "Please fill all the fields";
};

// isValid() = recebe um input, verifica se é válido (se não está vazio) =>
// retornar um boolean
// O campo é válido quando:
// Quando não estiver vazio
// [opcional] Expandir o validateInput para validar o emailInput com regex
const isValid = (input) => {
  if (input === emailInput) {
    return /^[\w\-\.]+@([\w\-]+\.)+\w{2,4}$/.test(input.value)
  } else {
    return input.value !== '';
  }
};

// validateInput() = recebe um input e marca como válido ou inválido
const validateInput = (input) => {
  if (isValid(input)) {
    markAsValid(input);
  } else {
    markAsInvalid(input);
  }
};

// tosChecked() = verifica se o checkbox está checado => retorna um boolean
const tosChecked = () => {
  return tosCheckbox.checked;
};

// allValid() = verifica se todos os inputs são válidos => retorna um boolean
// Dica: Array.prototype.every() => itera sobre todos os elementos e verifica se
// todos passam por um determinado teste
// Dica 2: DOMTokenList: contains() => verifica se uma coleção possui um
// determinado valor
const allValid = () => {
  const allInputsArray = Array.from(allInputs);
  return allInputsArray.every((input) => {
    return input.classList.contains('is-valid');
  });
};

// 3. Juntar tudo no validateForm()
// - Verificar se todos os inputs são válidos
// - Verificar se o checkbox está checado
// - Habilitar o botão se o formulário for válido e desabilitar o botão se não
// for válido
const validateForm = () => {
  if (allValid() && tosChecked()) {
    enableButton();
  } else {
    disableButton();
  }
};

// 4. Adicionar os eventListeners no checkbox e em cada um dos inputs
tosCheckbox.addEventListener('change', () => {
  validateForm();
});

allInputs.forEach((input) => {
  input.addEventListener('blur', () => {
    validateInput(input);
    validateForm();
  });
});

// 5. Opcional: validar o input de email com regex
// 5.1. [opcional] Selecionar o emailInput (input do email)
// 5.2. [opcional] Expandir o validateInput para validar o emailInput com regex
// (/^[\w\-\.]+@([\w\-]+\.)+\w{2,4}$/)
