function DateFormaterHandler(publishedAt: Date): string {
  const fechaPublicacion = new Date(publishedAt)
  const fechaActual = new Date()

  // Calcula la diferencia en milisegundos
  const diferenciaEnMilisegundos: number = fechaActual.getTime() - fechaPublicacion.getTime()

  // Convierte la diferencia a días y años
  const diferenciaEnDias: number = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24))
  const diferenciaEnAnios: number = Math.floor(diferenciaEnDias / 365)

  // Compara con umbrales y muestra el resultado
  if (diferenciaEnDias > 365) {
    return `Hace ${diferenciaEnAnios} año${diferenciaEnAnios !== 1 ? 's' : ''}`
  } else if (diferenciaEnDias > 1) {
    return `Hace ${diferenciaEnDias} día${diferenciaEnDias !== 1 ? 's' : ''}`
  } else {
    return 'Menos de un día'
  }
}
export default DateFormaterHandler
