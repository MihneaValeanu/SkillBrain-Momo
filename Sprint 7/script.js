// 1.Returnează un boolean dacă un număr este divizibil cu 10

// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

// Exemplu 1:
// Input: 100

// Output: true

// Exemplu 2:

// Input: 23

// Output: false

function DivizibilCuZece(numar){
    if(numar % 10 === 0){
        return true;
    }else{
        return false;
    }
}




// 2.Scrieți o funcție numită tellFortune care:

// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

// Exemplu 1:

// Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”

// Output: “Vei fi un Programator în Italia, căsătorit cu Emanuel și vei avea 3 copii.”

function tellFortune (N,Z,Y,X){
    console.log(`Vei fi un ${X} in ${Y}, castaorit cu ${Z} si vei avea ${N} copii.`)
}






// Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

// Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

// Exemplu 1:

// Input: 1

// Output: “Luni”

// Exemplu 2:

// Input: 5

// Output: “Vineri”

function getDayOfWeek(numarZi) {
    let zi;

    switch (numarZi) {
        case 1:
            zi = "Luni";
            break;
        case 2:
            zi = "Marți";
            break;
        case 3:
            zi = "Miercuri";
            break;
        case 4:
            zi = "Joi";
            break;
        case 5:
            zi = "Vineri";
            break;
        case 6:
            zi = "Sâmbătă";
            break;
        case 7:
            zi = "Duminică";
            break;
        default:
            zi = "Număr invalid! Te rugăm să introduci un număr între 1 și 7.";
    }

    return zi;
}