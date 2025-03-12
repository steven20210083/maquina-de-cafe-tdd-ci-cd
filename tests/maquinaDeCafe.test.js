const MaquinaDeCafe = require('../src/maquinaDeCafe');

describe('Pruebas para la Máquina de Café', () => {
  let maquina;

  beforeEach(() => {
    maquina = new MaquinaDeCafe(); // Se crea una nueva máquina antes de cada prueba
  });

  test('Seleccionar un vaso pequeño', () => {
    const resultado = maquina.seleccionarVaso('pequeño');
    expect(resultado).toBe('Vaso pequeño seleccionado con 3 Oz de café.');
  });

  test('Seleccionar un vaso mediano', () => {
    const resultado = maquina.seleccionarVaso('mediano');
    expect(resultado).toBe('Vaso mediano seleccionado con 5 Oz de café.');
  });

  test('Seleccionar un vaso grande', () => {
    const resultado = maquina.seleccionarVaso('grande');
    expect(resultado).toBe('Vaso grande seleccionado con 7 Oz de café.');
  });

  test('No hay suficiente café para un vaso grande', () => {
    maquina.cafeDisponible = 3;  // Reducimos el café disponible
    const resultado = maquina.seleccionarVaso('grande');
    expect(resultado).toBe('No hay suficiente café para este tamaño de vaso');
  });

  test('Seleccionar azúcar cuando no hay disponible', () => {
    maquina.azucarDisponible = 0;
    const resultado = maquina.seleccionarAzucar(1);
    expect(resultado).toBe('No hay azúcar disponible');
  });

  test('Seleccionar azúcar cuando hay suficiente', () => {
    const resultado = maquina.seleccionarAzucar(2);
    expect(resultado).toBe('2 cucharadas de azúcar añadidas.');
  });

  test('Recolectar un vaso cuando hay disponibles', () => {
    const resultado = maquina.recolectarVaso();
    expect(resultado).toBe('Vaso recogido, disfrute su café.');
  });

  test('Recolectar un vaso cuando no hay disponibles', () => {
    maquina.vasosDisponibles = 0;
    const resultado = maquina.recolectarVaso();
    expect(resultado).toBe('No hay vasos disponibles para recoger');
  });
});
