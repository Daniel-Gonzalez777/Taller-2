let check = false 
let saldoCuenta = 30000

do{
    alert(`Bienvenido, seleccione \n 1. consultar saldo  \n 2.retirar`)
    let opcion=Number(prompt(`Ingrese la opcion`))
    switch(opcion){
        case 1:
        alert(`Su saldo es ${saldoCuenta}`)
        break

        case 2:{
            let retiro = Number(prompt(`Ingrese el valor a retirar`))
            saldoCuenta-=retiro
            alert(`Su saldo es ${saldoCuenta}`)
            break
        }

        case 3: check=true
        break

        default:
            alert("Esta opcion no esta disponible")
            break
    }
}while(check!=true)