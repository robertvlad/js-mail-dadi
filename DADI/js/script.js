// 1 - Generare un numero per il pc

let pc_num = Math.floor(Math.random() * 6 + 1)
console.log(pc_num)

// 2 - Generare un numero per lutente

let user_num = Math.floor(Math.random() * 6 + 1)
console.log(user_num)

// 3 - Controllare quale numero è maggiore
// 4 - Mostrare chi ha vinto

if (user_num > pc_num){
    console.log(`Numero user: ${user_num} / Numero pc: ${pc_num} ! USER VINCITORE`)
}
else if (user_num < pc_num){
    console.log(`Numero user: ${user_num} / Numero pc: ${pc_num} ! PC VINCITORE`)
}
else{
    console.log(`Numero user: ${user_num} / Numero pc: ${pc_num} ! PATTA`)
}