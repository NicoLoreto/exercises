// De acuerdo con la Tercera Ley de Kepler, el período orbital  T
//   de dos puntos se orbitan mutuamente en una órbita circular o elíptica es://

// T=2πa3μ−−−√
//
// a
//   es el eje semi-mayor de la órbita
// μ=GM
//   es el parámetro gravitatorio estándar
// G
//   es la constante gravitatoria,
// M
//   es la masa del cuerpo más masivo.
// Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).//

// El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.//

// Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.//

// El radio de la tierra es de, 6367.4447 kilómetros y el valor GM de la tierra es de, 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  const GM = 398600.4418; // Valor GM de la Tierra en km^3/s^2
  const earthRadius = 6367.4447; // Radio de la Tierra en kilómetros

  // Función para calcular el período orbital en segundos
  function calculateOrbitalPeriod(avgAlt) {
    const a = earthRadius + avgAlt; // Eje semi-mayor en kilómetros
    const T = 2 * Math.PI * Math.sqrt((a * a * a) / GM); // Fórmula Kepler
    return Math.round(T); // Redondear al entero más cercano
  }

  // Mapear el arreglo de objetos
  return arr.map(function (element) {
    const period = calculateOrbitalPeriod(element.avgAlt);
    return { name: element.name, orbitalPeriod: period };
  });
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
