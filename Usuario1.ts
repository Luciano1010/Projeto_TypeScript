interface UsuarioModelo{
    nome: string
    foto:string
    biografia: string
    amigos: number
    postagens:string
}

const Usuario1:UsuarioModelo ={

    nome: "Luciano Simões",
    foto: 'https://media.licdn.com/dms/image/D4D03AQEQJIJPk-c2vQ/profile-displayphoto-shrink_800_800/0/1697454801337?e=1703116800&v=beta&t=eZVbcVIG5kaYzBcTTUJt3iK5qHYDnh-RbTyNnK6dyRo',
    biografia: 'Luciano é um Dev jr em C#...',
    amigos: 72,
    postagens:'hoje estou fazendo minha primeira interface em TypeScript'
}
console.log(Usuario1)


const Usuario2:UsuarioModelo ={
    nome: 'Tj jr',
    foto:'https://media.licdn.com/dms/image/D4D03AQEQJIJPk-c2vQ/profile-displayphoto-shrink_800_800/0/1697454801337?e=1703116800&v=beta&t=eZVbcVIG5kaYzBcTTUJt3iK5qHYDnh-RbTyNnK6dyRo',
    biografia: 'tj é um louco esquizofrenico',
    amigos: 0,
    postagens:'Mais um dia fazendo loucuras !!!'
}

console.log(Usuario2)