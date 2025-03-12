class MaquinaDeCafe {
    constructor() {
      this.vasosDisponibles = 10;  // Número de vasos disponibles
      this.azucarDisponible = 10;  // Número de cucharadas de azúcar disponibles
      this.cafeDisponible = 10;    // Número de "Oz" de café disponible
    }
  
    // Función para seleccionar tamaño de vaso
    seleccionarVaso(tamaño) {
      if (this.vasosDisponibles <= 0) {
        return "No hay vasos disponibles";
      }
      let tamañoVaso;
  
      switch (tamaño) {
        case 'pequeño':
          tamañoVaso = 3; // Oz de café
          break;
        case 'mediano':
          tamañoVaso = 5; // Oz de café
          break;
        case 'grande':
          tamañoVaso = 7; // Oz de café
          break;
        default:
          return "Tamaño de vaso no válido";
      }
  
      if (this.cafeDisponible < tamañoVaso) {
        return "No hay suficiente café para este tamaño de vaso";
      }
  
      this.cafeDisponible -= tamañoVaso;
      this.vasosDisponibles -= 1;
      return `Vaso ${tamaño} seleccionado con ${tamañoVaso} Oz de café.`;
    }
  
    // Función para seleccionar cucharadas de azúcar
    seleccionarAzucar(cucharadas) {
      if (this.azucarDisponible <= 0) {
        return "No hay azúcar disponible";
      }
  
      if (cucharadas > this.azucarDisponible) {
        return `No hay suficiente azúcar. Solo quedan ${this.azucarDisponible} cucharadas.`;
      }
  
      this.azucarDisponible -= cucharadas;
      return `${cucharadas} cucharadas de azúcar añadidas.`;
    }
  
    // Función para recolectar el vaso
    recolectarVaso() {
      if (this.vasosDisponibles <= 0) {
        return "No hay vasos disponibles para recoger";
      }
      return "Vaso recogido, disfrute su café.";
    }
  }
  
  module.exports = MaquinaDeCafe;  // Para usar en las pruebas unitarias
  