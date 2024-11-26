Simon says
===
## Consegna
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.
**BONUS:**
- Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
- I numeri random generati devono essere univoci

> - Individuate gli elementi di cui avete bisogno per realizzare il programma.
> - Immaginate la logica come fosse uno snack: “Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array”


## Logica
<!-- - genero 5 numeri casuali e gli salvo in un array vuoto (sync)
- il countdown parte all'apertura della pagina (sync)
- non c'è il bottone
- nascondo i numeri visualizzati che vengono salvati nel'array (async) -->
- appare un form in cui inserire i 5 numeri(5 input number), creo un secondo array vuoto per inserire i numeri scritti dall'utente e appare anche il bottone
- clicco il bottone e appare scritta con quanti e quali numeri ho indovinato.
se non ho indovinato numeri mostro un messaggio scritto in rosso con scritto 'nessun numero indovinato'
altrimenti se gli ho indovinati tutti messaggio scritto in verde con la lista dei numeri
Farò una funzione che confronti i 5 numeri inseriti con quelli generati automaticamnete e in base alle corrispondenze mi mostra il messaggio.