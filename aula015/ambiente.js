let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.length // Quantos elementos tem
num.sort() // por em ordem crescente
num.indexOf(7) // para saber a posição do 7

console.log(num)



for(let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}