//Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo
// argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.
//
//cid es un arreglo 2D que enumera las monedas disponibles.
//
//La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.
//
//Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el
// cambio exacto.
//
//Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.
//
//En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a
// menor, como valor de la clave change.
//
//Unidad Monetaria	Importe
//Penny	$0.01 (PENNY)
//Nickel	$0.05 (NICKEL)
//Dime	$0.1 (DIME)
//Quarter	$0.25 (QUARTER)
//Dollar	$1 (ONE)
//Five Dollars	$5 (FIVE)
//Ten Dollars	$10 (TEN)
//Twenty Dollars	$20 (TWENTY)
//One-hundred Dollars	$100 (ONE HUNDRED)
//A continuación, un ejemplo del efectivo en caja en formato de arreglo:
//
//[
//  ["PENNY", 1.01],
//  ["NICKEL", 2.05],
//  ["DIME", 3.1],
//  ["QUARTER", 4.25],
//  ["ONE", 90],
//  ["FIVE", 55],
//  ["TEN", 20],
//  ["TWENTY", 60],
//  ["ONE HUNDRED", 100]
//]

//function checkCashRegister(price, cash, cid) {
//  const insufficient = 'INSUFFICIENT_FUNDS';
//  const closed = 'CLOSED';
//  const open = 'OPEN';
//
//  const caja = cid.map((m) => m[1]);
//
//  const cajaTotal = caja.reduce((r) => r + r);
//
//  const change = cash - price;
//
//  switch (change) {
//    case cajaTotal < change:
//      return {
//        state: insufficient,
//        change: [],
//      };
//
//    case cajaTotal === change:
//      return {
//        state: closed,
//        change: [change],
//      };
//
//    default:
//      let totalADevolver = 0;
//      let cambio = change;
//
//      console.log(cambio);
//
//      let penny = 0;
//      let nickel = 0;
//      let dime = 0;
//      let quarter = 0;
//      let one = 0;
//      let five = 0;
//      let ten = 0;
//      let twenty = 0;
//      let oneHundred = 0;
//
//      while (cambio > 0) {
//        if (cambio < 100 && cambio > 20) {
//          twenty += 20;
//          cambio = cambio - twenty;
//        } else if (cambio < 20 && cambio > 10) {
//          ten += 10;
//          cambio = cambio - ten;
//        } else if (cambio < 10 && cambio > 5) {
//          five++;
//          cambio = cambio - five;
//        } else if (cambio < 5 && cambio > 1) {
//          one++;
//          cambio = cambio - one;
//        } else if (cambio < 1 && cambio > 0.25) {
//          quarter++;
//          cambio = cambio - quarter;
//        } else if (cambio < 0.25 && cambio > 0.1) {
//          dime++;
//          cambio = cambio - dime;
//        } else if (cambio < 0.1 && cambio > 0.05) {
//          nickel++;
//          cambio = cambio - nickel;
//        } else if (cambio < 0.05 && cambio > 0.01) {
//          penny++;
//          cambio = cambio - penny;
//        }
//      }
//      return {
//        state: open,
//        change: [twenty],
//      };
//  }
//}
//
//console.log(
//  checkCashRegister(3, 100, [
//    ['PENNY', 1.01],
//    ['NICKEL', 2.05],
//    ['DIME', 3.1],
//    ['QUARTER', 4.25],
//    ['ONE', 90],
//    ['FIVE', 55],
//    ['TEN', 20],
//    ['TWENTY', 60],
//    ['ONE HUNDRED', 100],
//  ])
//);

// function checkCashRegister(price, cash, cid) {
//   let change;
//   let penny;
//   let nickel;
//   let dime;
//   let quarter;
//   let one;
//   let five;
//   let ten;
//   let twenty;
//   let oneHundred;//

//   for (let i = 0; i < cid.length; i++) {
//     cid[i].map((m) => {
//       switch (m) {
//         case 'PENNY':
//           penny = cid[i][1];
//           break;//

//         case 'NICKEL':
//           nickel = cid[i][1];
//           break;//

//         case 'DIME':
//           dime = cid[i][1];
//           break;
//         case 'QUARTER':
//           quarter = cid[i][1];
//           break;
//         case 'ONE':
//           one = cid[i][1];
//           break;
//         case 'FIVE':
//           five = cid[i][1];
//           break;
//         case 'TEN':
//           ten = cid[i][1];
//           break;
//         case 'TWENTY':
//           twenty = cid[i][1];
//           break;
//         case 'ONE HUNDRED':
//           oneHundred = cid[i][1];
//           break;
//       }
//     });
//   }//

//   // sumar total en caja//

//   const totalEnCaja = [
//     penny,
//     nickel,
//     dime,
//     quarter,
//     one,
//     five,
//     ten,
//     twenty,
//     oneHundred,
//   ];//

//   const sumaCaja = totalEnCaja.reduce((m) => m + m);
//   console.log('sumaCaja ', sumaCaja);//

//   // cambio a dar//

//   change = cash - price;//

//   console.log('cambio', change);//

//   if (sumaCaja < change) {
//     return { status: 'INSUFFICIENT_FUNDS', change: [] };
//   } else if (change === sumaCaja) {
//     const newMap = totalEnCaja.map((m) => (m = 0));
//     return { status: 'CLOSED', change: [newMap] };
//   } else {
//     let cambioEntregado;
//     while (cambioEntregado != change) {
//       if (penny && change > 0.01 && change < 0.05) {
//         penny -= change;
//         cambioEntregado = change;
//       }
//       if (nickel && change >= 0.05 && change < 0.1) {
//         nickel -= change;
//         cambioEntregado = change;
//         return {
//           status: 'OPEN',
//           change: [
//             ['TWENTY', twenty],
//             ['TEN', ten],
//             ['FIVE', five],
//             ['ONE', one],
//             ['QUARTER', quarter],
//             ['DIME', dime],
//             ['PENNY', penny],
//           ],
//         };
//       }
//       if (dime && change >= 0.1 && change < 0.25) {
//         dime -= change;
//         cambioEntregado = change;
//         return {
//           status: 'OPEN',
//           change: [
//             ['TWENTY', twenty],
//             ['TEN', ten],
//             ['FIVE', five],
//             ['ONE', one],
//             ['QUARTER', quarter],
//             ['DIME', dime],
//             ['PENNY', penny],
//           ],
//         };
//       }
//       if (quarter && change >= 0.25 && change < 1) {
//         quarter -= change;
//         cambioEntregado = change;
//         return {
//           status: 'OPEN',
//           change: [
//             ['TWENTY', twenty],
//             ['TEN', ten],
//             ['FIVE', five],
//             ['ONE', one],
//             ['QUARTER', quarter],
//             ['DIME', dime],
//             ['PENNY', penny],
//           ],
//         };
//       }
//       if (one && change >= 1 && change < 5) {
//         one -= change;
//         cambioEntregado = change;
//         return {
//           status: 'OPEN',
//           change: [
//             ['TWENTY', twenty],
//             ['TEN', ten],
//             ['FIVE', five],
//             ['ONE', one],
//             ['QUARTER', quarter],
//             ['DIME', dime],
//             ['PENNY', penny],
//           ],
//         };
//       }
//       if (five && change >= 5 && change < 10) {
//         ten -= change;
//         cambioEntregado = change;
//         return {
//           status: 'OPEN',
//           change: [
//             ['TWENTY', twenty],
//             ['TEN', ten],
//             ['FIVE', five],
//             ['ONE', one],
//             ['QUARTER', quarter],
//             ['DIME', dime],
//             ['PENNY', penny],
//           ],
//         };
//       }
//       if (twenty && change >= 10 && change < 100) {
//         twenty -= change;
//         cambioEntregado = change;
//         return {
//           status: 'OPEN',
//           change: [
//             ['TWENTY', twenty],
//             ['TEN', ten],
//             ['FIVE', five],
//             ['ONE', one],
//             ['QUARTER', quarter],
//             ['DIME', dime],
//             ['PENNY', penny],
//           ],
//         };
//       }
//       if (oneHundred && change >= 100) {
//         oneHundred -= change;
//         cambioEntregado = change;
//         return {
//           status: 'OPEN',
//           change: [
//             ['TWENTY', twenty],
//             ['TEN', ten],
//             ['FIVE', five],
//             ['ONE', one],
//             ['QUARTER', quarter],
//             ['DIME', dime],
//             ['PENNY', penny],
//           ],
//         };
//       }
//     }
//   }//

//   const dineroEnLaCaja = new Object({
//     penny: penny,
//     nickel: nickel,
//     dime: dime,
//     quarter: quarter,
//     one: one,
//     five: five,
//     ten: ten,
//     twenty: twenty,
//     oneHundred: oneHundred,
//   });
//   return dineroEnLaCaja;
// }//

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

// SOLUCION

function checkCashRegister(precio, efectivo, caja) {
  // Define el valor de cada moneda/billete en centavos
  const denominaciones = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    'ONE HUNDRED': 10000,
  };

  // Calcula el cambio en centavos
  let cambioPendiente = efectivo * 100 - precio * 100;

  // Calcula el total en efectivo en la caja en centavos
  let totalEnCaja = 0;
  for (let i = 0; i < caja.length; i++) {
    totalEnCaja += caja[i][1] * 100;
  }

  // Inicializa el objeto de cambio a entregar
  let cambio = [];

  // Calcula el cambio a entregar
  for (let i = caja.length - 1; i >= 0; i--) {
    const nombreMoneda = caja[i][0];
    const valorMoneda = denominaciones[nombreMoneda];
    let monedasDisponibles = caja[i][1] * 100;

    let contadorMonedas = 0;
    while (monedasDisponibles > 0 && cambioPendiente >= valorMoneda) {
      cambioPendiente -= valorMoneda;
      monedasDisponibles -= valorMoneda;
      contadorMonedas++;
    }

    if (contadorMonedas > 0) {
      cambio.push([nombreMoneda, (contadorMonedas * valorMoneda) / 100]);
    }
  }

  // Determina el state y el cambio a entregar
  if (cambioPendiente === 0) {
    if (totalEnCaja === efectivo * 100 - precio * 100) {
      return { state: 'CLOSED', change: caja };
    } else {
      return { state: 'OPEN', change: cambio };
    }
  } else {
    return { state: 'INSUFFICIENT_FUNDS', cambio: [] };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);

/*

let coinCount = 0;
while (coinAvailable > 0 && changeDue >= coinValue) {
  changeDue -= coinValue;
  coinAvailable -= coinValue;
  coinCount++;
}

if (coinCount > 0) {
  change.push([coinName, (coinCount * coinValue) / 100]);
}
Este bloque de código se encarga de calcular cuántas monedas (o billetes) de un cierto tipo (representado por coinName) deben ser entregadas como parte del cambio, dado un valor de cambio (changeDue), el valor de una sola moneda de ese tipo (coinValue), y la cantidad disponible de esa moneda en la caja (coinAvailable).

A continuación, desglosaré lo que hace cada parte del código:

let coinCount = 0;: Esto inicializa una variable llamada coinCount a 0. Esta variable se utiliza para llevar un registro de cuántas monedas de un cierto tipo se están entregando como parte del cambio.

while (coinAvailable > 0 && changeDue >= coinValue) {: Este es un bucle while que se ejecuta mientras se cumplan dos condiciones:

coinAvailable > 0: Significa que todavía hay monedas de este tipo disponibles en la caja. El bucle continuará mientras haya monedas disponibles.
changeDue >= coinValue: Significa que el valor de cambio pendiente (changeDue) es igual o mayor que el valor de una sola moneda de este tipo (coinValue). Esto asegura que solo se entreguen monedas si es posible y necesario para completar el cambio.
changeDue -= coinValue; y coinAvailable -= coinValue;: Dentro del bucle, estas dos líneas restan el valor de una moneda de la variable changeDue (el cambio pendiente) y de coinAvailable (la cantidad disponible en la caja). Esto simula la entrega de una moneda y reduce la cantidad de cambio pendiente y la cantidad de monedas disponibles en la caja.

coinCount++;: Incrementa la variable coinCount en 1 en cada iteración del bucle, lo que significa que se está entregando una moneda más como parte del cambio.

if (coinCount > 0) { ... }: Después de salir del bucle while, se verifica si coinCount es mayor que 0. Esto se hace para asegurarse de que al menos una moneda de este tipo se haya entregado como parte del cambio. Si es así, se ejecuta el bloque de código dentro del if.

change.push([coinName, (coinCount * coinValue) / 100]);: En este punto, sabemos que al menos una moneda de este tipo se ha entregado como parte del cambio. Entonces, se agrega un elemento al arreglo change que contiene dos partes:

coinName: El nombre de la moneda (por ejemplo, "PENNY" o "NICKEL").
(coinCount * coinValue) / 100: El valor total de las monedas entregadas en esta denominación, calculado multiplicando la cantidad de monedas (coinCount) por el valor de una sola moneda (coinValue) y dividiendo por 100 para convertirlo de centavos a dólares.

*/
