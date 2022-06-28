// Crie um objeto que receba ao menos três propriedades sobre você.
let thais = {
  Cor: "Azul",
  Comida: "Lasanha",
  Bebida: "Suco de goiaba"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
  
thais.musica = "Backstreet Boys"

// Remova uma propriedade desse objeto.

delete thais.musica

//Mostre no console todas as propriedades desse objeto.

console.log(thais)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 

const cadastro =[{
  Nome: "Samara",
  Idade:18,
  Telefone:99999-9999,
  Amigos: ["Kauê","Yasmin","Monalisa","Caio"],
},{
  Nome: "Samuel",
  Idade:14,
  Telefone:88888-8888,
  Amigos: ["Miguel","Julia","Lucas","Maju"],
},{
  Nome: "Renan",
  Idade:12,
  Telefone:77777-7777,
  Amigos: ["Arthur","Carlos","Ana Julia","Larissa"],
},{
  Nome: "Thayllan",
  Idade:10,
  Telefone:55555-5555,
  Amigos:["João","Gabriel","Bruno","Maria"],
},{
  Nome: "Allan",
  Idade:20,
  Telefone:22222-2222,
  Amigos:["Kael","Bruna","Flavio","Tulio"],
}]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].Amigos[0])
console.log(cadastro[1].Amigos[1])
console.log(cadastro[2].Amigos[2])
console.log(cadastro[3].Amigos[3])
console.log(cadastro[4].Amigos[3])
