//1. Scrivo il ciclo per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    //2. Lo stampo in console
    //3. °Stampo "Fizz" per i multipli di 3
    //   °Stampo "Buzz" per i multipli di 5
    //   °Stampo "FizzBuzz" per i multipli di entrambi
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log ('FizzBuzz')
    } else if (i % 3 === 0){
    console.log ('Fizz')
    } else if (i % 5 === 0) {
        console.log ('Buzz')
    } else {
        console.log (i)
    };
};
    
//4. Stampo la lista nell'html
//5. Applico un po di style css
     