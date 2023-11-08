import { cervezasBD } from '../bd/cervezasBD.js'

// const consoleCervezas = function(cervezasBD)

// Arrow function//
export const consoleCervezas = (cervezasBD) => {
  cervezasBD.forEach(element => {
    console.log('Nombre', element.nombre)
  })
}

// export function consoleCervezas (cervezasBD) {
//   cervezasBD.forEach(element => {
//     console.log('Nombre', element.nombre)
//   })
// }
