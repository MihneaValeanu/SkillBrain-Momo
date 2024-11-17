//  1.Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

//  Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.

//  Exemplu 1:

//  Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]

//  Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

//  Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

//  Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

//  Exemplu 1:

//  Input: obiect = { a: 1, b: 2 }, proprietate = “b”

//  Output: { a: 1 }

function creaReteta(titlu, portii, ingrediente) {
  
  const reteta = {
    titlu: titlu,
    portii: portii,
    ingrediente: ingrediente,
  };


  console.log(`Titlu: ${reteta.titlu}`);
  console.log(`Porții: ${reteta.portii}`);
  console.log(`Ingrediente: ${reteta.ingrediente.join(", ")}`);

  return reteta;
}

 


// 2.Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

// Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

// Exemplu 1:

// Input: obiect = { a: 1, b: 2 }, proprietate = “b”

// Output: { a: 1 }

function eliminaProprietate(obiect, proprietate) {
    // Creăm un nou obiect
    const nouObiect = { ...obiect }; 

    
    delete nouObiect[proprietate];

    
    return nouObiect;
}



// 3.Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).

// Scrieți o funcție care:

// Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.
// Exemplu 1:

// Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];

// Output:

// “Carte 1 de Autor 1”
// ”Ai citit deja “Carte 1” de Autor 1”
// ”Carte 2 de Autor 2”
// ”Trebuie sa citesti “Carte 2” de Autor 2”




const carti = [
    { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },
    { titlu: "1984", autor: "George Orwell", esteCitita: false },
    { titlu: "Mândrie și prejudecată", autor: "Jane Austen", esteCitita: true }
];


function afiseazaCarti(carti) {
    for (const carte of carti) {
        console.log(`${carte.titlu} de ${carte.autor}`);
        
        if (carte.esteCitita) {
            console.log(`Ai citit deja "${carte.titlu}" de ${carte.autor}`);
        } else {
            console.log(`Trebuie să citești "${carte.titlu}" de ${carte.autor}`);
        }
    }
}


afiseazaCarti(carti);
