const opt = {
  base:{
    demand: true,
    alias: 'b'
  },
  limite:{
    demand:false,
    alias:'l',
    default:10
  }
}

const argv =require('yargs')
.command('listar','Imprime en consola en la tabla de multiplicar',opt)
.command('crear','Crea el archivo de la tabla de multiplicar',opt)
.help()
.argv;


module.exports = {
  argv
}
