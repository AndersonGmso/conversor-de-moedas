const amount = document.getElementById ("amount")

//Manipulando o input para receber apenas números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})