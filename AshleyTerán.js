// Activar prompt-sync para entrada por consola
const prompt = require("prompt-sync")({ sigint: true });

// ---------- Punto 1: Estructura de Datos ----------

// 10 libros en el sistema
let libros = [
  { id: 1, titulo: "Aprende JavaScript", autor: "Marcos Núñez", año: 2022, genero: "Programación", disponible: true },
  { id: 2, titulo: "Diseño Web con HTML y CSS", autor: "Laura Gómez", año: 2021, genero: "Diseño", disponible: true },
  { id: 3, titulo: "UX Writing", autor: "Andrés Pérez", año: 2023, genero: "UX", disponible: true },
  { id: 4, titulo: "Inteligencia Artificial 101", autor: "Daniela Mora", año: 2025, genero: "Tecnología", disponible: true },
  { id: 5, titulo: "Pensamiento Computacional", autor: "Carlos Salazar", año: 2020, genero: "Educación", disponible: true },
  { id: 6, titulo: "Lógica de Programación", autor: "Ana Rivera", año: 2019, genero: "Formación", disponible: true },
  { id: 7, titulo: "Programar es fácil", autor: "Juan Ramírez", año: 2024, genero: "Desarrollo", disponible: true },
  { id: 8, titulo: "Diseño centrado en el usuario", autor: "Beatriz Vega", año: 2023, genero: "UX", disponible: true },
  { id: 9, titulo: "Aprendiendo Python", autor: "Lucía Araya", año: 2022, genero: "Programación", disponible: true },
  { id: 10, titulo: "Data Science desde cero", autor: "Rafael Brenes", año: 2021, genero: "Ciencia de datos", disponible: true }
];

// 5 usuarios en el sistema
let usuarios = [
  { id: 1, nombre: "Lucía Rodríguez", email: "lucia@mail.com", librosPrestados: [] },
  { id: 2, nombre: "Mateo Álvarez", email: "mateo@mail.com", librosPrestados: [] },
  { id: 3, nombre: "Daniela Pineda", email: "daniela@mail.com", librosPrestados: [] },
  { id: 4, nombre: "Esteban Sánchez", email: "esteban@mail.com", librosPrestados: [] },
  { id: 5, nombre: "Camila Vega", email: "camila@mail.com", librosPrestados: [] }
];
// ---------- Punto 2: Funciones de gestión de libros ----------

// Mostrar todos los libros disponibles
function mostrarLibros() {
  console.log("\n📚 Lista de Libros:");
  libros.forEach((libro) => {
    console.log(${libro.id}. ${libro.titulo} - ${libro.autor} (${libro.año}) [${libro.disponible ? "Disponible" : "Prestado"}]);
  });
}

// Agregar un nuevo libro
function agregarLibro() {
  const titulo = prompt("Título del libro: ");
  const autor = prompt("Autor del libro: ");
  const año = parseInt(prompt("Año de publicación: "));
  const genero = prompt("Género: ");
  const nuevoLibro = {
    id: libros.length + 1,
    titulo,
    autor,
    año,
    genero,
    disponible: true
  };
  libros.push(nuevoLibro);
  console.log("✅ Libro agregado con éxito.");
}

// Buscar un libro por título
function buscarLibro() {
  const buscar = prompt("Ingrese el título del libro a buscar: ").toLowerCase();
  const resultado = libros.find((libro) => libro.titulo.toLowerCase().includes(buscar));
  if (resultado) {
    console.log("🔍 Libro encontrado:");
    console.log(${resultado.id}. ${resultado.titulo} - ${resultado.autor} (${resultado.año}));
  } else {
    console.log("❌ Libro no encontrado.");
  }
}

// Ordenar libros por título (Bubble Sort)
function ordenarLibros() {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - i - 1; j++) {
      if (libros[j].titulo > libros[j + 1].titulo) {
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp;
      }
    }
  }
  console.log("✅ Libros ordenados alfabéticamente por título.");
}

// Borrar un libro por ID
function borrarLibro() {
  const id = parseInt(prompt("Ingrese el ID del libro a borrar: "));
  const index = libros.findIndex((libro) => libro.id === id);
  if (index !== -1) {
    libros.splice(index, 1);
    console.log("🗑 Libro eliminado con éxito.");
  } else {
    console.log("❌ Libro no encontrado.");
  }
}
// ---------- Punto 3: Funciones de gestión de usuarios ----------

// Mostrar todos los usuarios
function mostrarUsuarios() {
  console.log("\n👥 Lista de Usuarios:");
  usuarios.forEach((usuario) => {
    console.log(${usuario.id}. ${usuario.nombre} - ${usuario.email});
  });
}

// Registrar un nuevo usuario
function registrarUsuario() {
  const nombre = prompt("Nombre del usuario: ");
  const email = prompt("Correo electrónico: ");
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email,
    librosPrestados: []
  };
  usuarios.push(nuevoUsuario);
  console.log("✅ Usuario registrado con éxito.");
}

// Buscar usuario por nombre
function buscarUsuario() {
  const buscar = prompt("Ingrese el nombre del usuario a buscar: ").toLowerCase();
  const resultado = usuarios.find((usuario) => usuario.nombre.toLowerCase().includes(buscar));
  if (resultado) {
    console.log("🔍 Usuario encontrado:");
    console.log(${resultado.id}. ${resultado.nombre} - ${resultado.email});
  } else {
    console.log("❌ Usuario no encontrado.");
  }
}

// Borrar usuario por ID
function borrarUsuario() {
  const id = parseInt(prompt("Ingrese el ID del usuario a eliminar: "));
  const index = usuarios.findIndex((usuario) => usuario.id === id);
  if (index !== -1) {
    usuarios.splice(index, 1);
    console.log("🗑 Usuario eliminado con éxito.");
  } else {
    console.log("❌ Usuario no encontrado.");
  }
}// ---------- Punto 4: Sistema de préstamos ----------

// Prestar un libro a un usuario
function prestarLibro() {
  const idUsuario = parseInt(prompt("ID del usuario que desea un libro: "));
  const usuario = usuarios.find((u) => u.id === idUsuario);
  if (!usuario) {
    console.log("❌ Usuario no encontrado.");
    return;
  }

  const idLibro = parseInt(prompt("ID del libro a prestar: "));
  const libro = libros.find((l) => l.id === idLibro);
  if (!libro) {
    console.log("❌ Libro no encontrado.");
    return;
  }

  if (!libro.disponible) {
    console.log("❌ Libro no disponible.");
    return;
  }

  libro.disponible = false;
  usuario.librosPrestados.push(libro);
  console.log(📚 Libro "${libro.titulo}" prestado a ${usuario.nombre}.);
}

// Devolver un libro
function devolverLibro() {
  const idUsuario = parseInt(prompt("ID del usuario que devuelve un libro: "));
  const usuario = usuarios.find((u) => u.id === idUsuario);
  if (!usuario) {
    console.log("❌ Usuario no encontrado.");
    return;
  }

  const idLibro = parseInt(prompt("ID del libro a devolver: "));
  const libroIndex = usuario.librosPrestados.findIndex((l) => l.id === idLibro);
  if (libroIndex === -1) {
    console.log("❌ El usuario no tiene ese libro prestado.");
    return;
  }

  // Liberar libro
  const libro = usuario.librosPrestados[libroIndex];
  libro.disponible = true;
  usuario.librosPrestados.splice(libroIndex, 1);
  console.log(✅ Libro "${libro.titulo}" devuelto por ${usuario.nombre}.);
}// ---------- Punto 5: Reportes y métodos avanzados ----------

// Reporte de libros (títulos disponibles y total de libros)
function generarReporteLibros() {
  const disponibles = libros.filter((l) => l.disponible);
  const titulos = disponibles.map((l) => l.titulo);
  const total = libros.length;

  console.log("\n📄 Reporte de Libros");
  console.log("📚 Libros disponibles:");
  titulos.forEach((t) => console.log("- " + t));
  console.log(📦 Total de libros en el sistema: ${total});
}

// ---------- Punto 6: Identificación avanzada ----------

// Mostrar libros que contienen palabras específicas en el título
function librosConPalabrasEnTitulo() {
  const palabra = prompt("Ingrese una palabra clave a buscar en los títulos: ").toLowerCase();
  const encontrados = libros.filter((l) => l.titulo.toLowerCase().includes(palabra));

  if (encontrados.length > 0) {
    console.log(🔎 Libros que contienen "${palabra}":);
    encontrados.forEach((l) => console.log(- ${l.titulo} (${l.autor})));
  } else {
    console.log("❌ No se encontraron libros con esa palabra.");
  }
}

// ---------- Punto 7: Estadísticas ----------

// Calcular estadísticas básicas
function calcularEstadisticas() {
  const totalLibros = libros.length;
  const disponibles = libros.filter((l) => l.disponible).length;
  const prestados = totalLibros - disponibles;
  const promedioAño = Math.round(libros.reduce((sum, l) => sum + l.año, 0) / totalLibros);

  console.log("\n📊 Estadísticas del Sistema:");
  console.log(📚 Total de libros: ${totalLibros});
  console.log(✅ Libros disponibles: ${disponibles});
  console.log(📕 Libros prestados: ${prestados});
  console.log(📅 Año promedio de publicación: ${promedioAño});
}// ---------- Punto 8: Normalización de cadenas ----------

// Pasar títulos de libros y nombres de usuario a minúsculas
function normalizarDatos() {
  libros = libros.map((libro) => ({
    ...libro,
    titulo: libro.titulo.toLowerCase()
  }));
  usuarios = usuarios.map((usuario) => ({
    ...usuario,
    nombre: usuario.nombre.toLowerCase()
  }));
  console.log("🔤 Datos normalizados correctamente.");
}

// ---------- Punto 9 y 10: Menú principal y comentarios ----------

function menu() {
  let opcion;
  do {
    console.log("\n📚 Bienvenida al Sistema de Biblioteca — Ashley Terán");
    console.log("1. Mostrar libros");
    console.log("2. Agregar libro");
    console.log("3. Buscar libro");
    console.log("4. Ordenar libros");
    console.log("5. Borrar libro");
    console.log("6. Mostrar usuarios");
    console.log("7. Registrar usuario");
    console.log("8. Buscar usuario");
    console.log("9. Borrar usuario");
    console.log("10. Prestar libro");
    console.log("11. Devolver libro");
    console.log("12. Reporte de libros");
    console.log("13. Libros con palabra clave");
    console.log("14. Estadísticas del sistema");
    console.log("15. Normalizar datos");
    console.log("0. Salir");
    opcion = prompt("Seleccione una opción: ");

    switch (opcion) {
      case "1": mostrarLibros(); break;
      case "2": agregarLibro(); break;
      case "3": buscarLibro(); break;
      case "4": ordenarLibros(); break;
      case "5": borrarLibro(); break;
      case "6": mostrarUsuarios(); break;
      case "7": registrarUsuario(); break;
      case "8": buscarUsuario(); break;
      case "9": borrarUsuario(); break;
      case "10": prestarLibro(); break;
      case "11": devolverLibro(); break;
      case "12": generarReporteLibros(); break;
      case "13": librosConPalabrasEnTitulo(); break;
      case "14": calcularEstadisticas(); break;
      case "15": normalizarDatos(); break;
      case "0": 
        console.log("\n🙏 Gracias por revisar mi proyecto, profe.");
        console.log("💚 Agradezco de corazón su comprensión durante mi recuperación.");
        console.log("👩🏽‍💻 Proyecto realizado por Ashley Terán — Desarrolladora en formación ADA.");
        break;
      default: console.log("❗ Opción inválida. Intente de nuevo.");
    }
  } while (opcion !== "0");
}

// Ejecutar menú
menu();
      