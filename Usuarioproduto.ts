interface UsuarioProduto{
    nome: string
    descricao: string
    preco:number
}

const UsuarioProduto1: UsuarioProduto = {
    nome: 'Quadro Ilustrativo',
    descricao: 'Quadro do filme Interstellar',
    preco:100.50
}

const UsuarioProduto2: UsuarioProduto = {
    nome: 'Moldura Quadro',
    descricao: 'Moldura de madeira para variados tipos de quadros',
    preco:60.50
}

const listaProduto1 =['Quadro Ilustrativo','Quadro do filme Interstellar',100.50]
const listaProduto2 = ['Moldura Quadro','Moldura de madeira para variados tipos de quadros',60.50]

const arrayCombinado = [...listaProduto1, ...listaProduto2];

console.log(arrayCombinado);




