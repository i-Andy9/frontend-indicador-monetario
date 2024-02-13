export const transformDates = (date: any) : any=>{
    // Si la fecha es un objeto de fecha, simplemente obtenemos sus componentes de año, mes y día
    if (date instanceof Date && !isNaN(date)) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Agregar ceros a la izquierda si es necesario
      const day = String(date.getDate()).padStart(2, '0'); // Agregar ceros a la izquierda si es necesario
      return `${year}-${month}-${day}`;
    } else {
      // Si la fecha no es un objeto de fecha válido, intentamos convertirla a un objeto de fecha
      const parsedDate:any = new Date(date);
      if (!isNaN(parsedDate)) {
        return transformDates(parsedDate); // Llamamos recursivamente a la función con la fecha convertida
      } else {
        // Si no se pudo convertir a un objeto de fecha válido, devolvemos null
        return null;
      }
    }
};
