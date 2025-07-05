const prompt = require("prompt-sync")({ sigint: true });
// Datos iniciales
let libros = [
  { id: 1, titulo: "Aprende JavaScript", autor: "Marcos Núñez", año: 2022, genero: "Programación", disponible: true },
  { id: 2, titulo: "Diseño Web con HTML y CSS", autor: "Laura Gómez", año: 2021, genero: "Diseño", disponible: true },
  { id: 3, titulo: "UX Writing", autor: "Andrés Pérez", año: 2023, genero: "UX", disponible: true },
  { id: 4, titulo: "React Moderno", autor: "Ana Silva", año: 2024, genero: "Programación", disponible: false },
  { id: 5, titulo: "Inteligencia Artificial para Todos", autor: "Carlos Rojas", año: 2025, genero: "IA", disponible: true }
];

let usuarios = [
  { id: 1, nombre: "Lucía Rodríguez", email: "lucia@mail.com", librosPrestados: [4] },
  { id: 2, nombre: "Mateo Álvarez", email: "mateo@mail.com", librosPrestados: [] }
];

// Funciones principales (solo las básicas por ahora)
function mostrarMenu() {
  let opcion;
  do {
    console.log("\n📚 SISTEMA DE BIBLIOTECA");
    console.log("1. Ver libros");
    console.log("2. Ver usuarios");
    console.log("3. Salir");
    opcion = prompt("Elegí una opción: ");

    switch (opcion) {
      case "1":
        console.log("\n📖 Lista de libros:");
        console.log(libros);
        break;
      case "2":
        console.log("\n👤 Lista de usuarios:");
        console.log(usuarios);
        break;
      case "3":
        console.log("Gracias por usar el sistema.");
        break;
      default:
        console.log("Opción inválida.");
    }
  } while (opcion !== "3");
}

// Iniciar menú
mostrarMenu();
const prompt = require("prompt-sync")({ sigint: true });
let libros = [
  { id: 1, titulo: "Aprende JavaScript", autor: "Marcos Núñez", año: 2022, genero: "Programación", disponible: true },
  { id: 2, titulo: "Diseño Web con HTML y CSS", autor: "Laura Gómez", año: 2021, genero: "Diseño", disponible: true },
  { id: 3, titulo: "UX Writing", autor: "Andrés Pérez", año: 2023, genero: "UX", disponible: true }
];

let usuarios = [
  { id: 1, nombre: "Lucía Rodríguez", email: "lucia@mail.com", librosPrestados: [] },
  { id: 2, nombre: "Mateo Álvarez", email: "mateo@mail.com", librosPrestados: [] }
];

function mostrarLibros() {
  console.log("\n📚 Lista de libros:");
  libros.forEach(libro => {
    console.log(${libro.id}. ${libro.titulo} - ${libro.autor} (${libro.año}) - ${libro.disponible ? "Disponible" : "Prestado"});
  });
}

function mostrarUsuarios() {
  console.log("\n👤 Lista de usuarios:");
  usuarios.forEach(usuario => {
    console.log(${usuario.id}. ${usuario.nombre} - ${usuario.email});
  });
}function menu() {
  let opcion = "";

  do {
    console.log("\n📖 MENÚ PRINCIPAL");
    console.log("1. Ver libros");
    console.log("2. Ver usuarios");
    console.log("3. Salir");

    opcion = prompt("Elegí una opción (1, 2 o 3): ");

    switch (opcion) {
      case "1":
        mostrarLibros();
        break;
      case "2":
        mostrarUsuarios();
        break;
      case "3":
        console.log("👋 ¡Gracias por usar el sistema de biblioteca!");
        break;
      default:
        console.log("❌ Opción inválida. Por favor intentá de nuevo.");
    }
  } while (opcion !== "3");
}

// Ejecutar menú
menu();