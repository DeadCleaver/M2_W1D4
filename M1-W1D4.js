/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  
    Number -  sono i numeri
    String - sono parole o frasi
    Boolean - corrisponde a una risposta "sì" oppure "no" ad una domanda (oppure "vero" e "falso")
    Undefined - Il tipo di dato non è definito (non si sa se è un numero, una stringa, un boolean...)
    Null - rappresenta un dato assente, vuoto (non zero che invece sarebbe numerico), come quando hai una scatola con dentro nulla
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
Un oggetto in Javascript è un raggruppamento di variabili di diverso tipo appartenenti allo stesso gruppo/record, associate a coppie chiave:valore
un esempio possono essere i dati di un artista registrato su un sito di musica, oggetto "artist", che può contenere a sua volta delle variabili come: "genre", "label", "views", "age", "site-url" ecc...
 */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
let somma = number1 + number2;
console.log(somma); 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


let x = 12;
console.log(x);


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


let name = "Andrea";
console.log(name);
/* 
perché mi barra "name" come deprecato?
 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


let subtraction = 4 - x;
console.log(subtraction);


/* ESERCIZIO 6B
Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby) */

let mySelf = {
    name: "Andrea",
    surname: "Montefiori", 
    hobby: "Gioco di Ruolo", 
}
console.log(mySelf);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
let verify1 = name1 === name2;
console.log(verify1);
let verify2 = name1 === name2.toLowerCase();
console.log(verify2);

