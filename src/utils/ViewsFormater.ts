export function formatearNumero(numero: string): string {
  const numParsed = +numero

  if (numParsed >= 1000000) {
    // Divide el número por un millón y redondea a un decimal
    numero = (numParsed / 1000000).toFixed(1) + 'M'
  } else if (numParsed >= 1000) {
    // Divide el número por mil y redondea sin decimales
    numero = Math.floor(numParsed / 1000) + 'K'
  }

  return numero
}
