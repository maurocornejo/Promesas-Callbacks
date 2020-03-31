// Promise.race([promesaLenta, promesaMedia, promesaRapida])

import { heroesCiclo, heroeIfAwait } from "./js/await";


heroesCiclo();

heroeIfAwait('iron');

// .then(mensaje => console.log(mensaje))
//     .catch(console.warn);

// console.time('await');

// obtenerHeroeAwait('capi2')
//     .then(heroe => {
//         console.log(heroe);

//         console.timeEnd('await');

//     }).catch(console.warn);