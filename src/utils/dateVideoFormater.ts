export function dateVideoFormater(fecha: string): string {
    const fechaPublicacion = new Date(fecha);
    const fechaActual = new Date();
    const diferencia = fechaActual.getTime() - fechaPublicacion.getTime();
  
    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const anios = Math.floor(meses / 12);
  
    if (anios > 0) {
      return `${anios} año${anios !== 1 ? 's' : ''} atrás`;
    } else if (meses > 0) {
      return `${meses} mes${meses !== 1 ? 'es' : ''} atrás`;
    } else if (dias > 0) {
      return `${dias} día${dias !== 1 ? 's' : ''} atrás`;
    } else if (horas > 0) {
      return `${horas} hora${horas !== 1 ? 's' : ''} atrás`;
    } else if (minutos > 0) {
      return `${minutos} minuto${minutos !== 1 ? 's' : ''} atrás`;
    } else {
      return `${segundos} segundo${segundos !== 1 ? 's' : ''} atrás`;
    }
}
