// Proyecto Final — Ashley Terán
// Desarrolladora en formación — ADA ❤
// -----------------------------------------

// Requiere prompt-sync para entradas por consola
const prompt = require("prompt-sync")({ sigint: true });

// ---------- Punto 1: Estructura de datos ----------

// Lista de libros
let libros = [
  { id: 1, titulo: "Aprende JavaScript", autor: "Mark Myers", disponible: true },
  { id: 2, titulo: "Clean Code", autor: "Robert C. Martin", disponible: true },
  { id: 3, titulo: "JavaScript: The Good Parts", autor: "Douglas Crockford", disponible: true },
  { id: 4, titulo: "You Don’t Know JS", autor: "Kyle Simpson", disponible: true },
  { id: 5, titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", disponible: true },
  { id: 6, titulo: "Introduction to Algorithms", autor: "Thomas Cormen", disponible: true },
  { id: 7, titulo: "Atomic Habits", autor: "James Clear", disponible: true },
  { id: 8, titulo: "Deep Work", autor: "Cal Newport", disponible: true },
  { id: 9, titulo: "Soft Skills", autor: "John Sonmez", disponible: true },
  { id: 10, titulo: "Design Patterns", autor: "Erich Gamma", disponible: true },
];

// Lista de usuarios
let usuarios = [
  { id: 1, nombre: "Lucía Fernández", librosPrestados: [] },
  { id: 2, nombre: "Carlos Méndez", librosPrestados: [] },
  { id: 3, nombre: "Sofía Ramírez", librosPrestados: [] },
  { id: 4, nombre: "Alejandro Soto", librosPrestados: [] },
  { id: 5, nombre: "Daniela Solís", librosPrestados: [] },
];
// ---------- Punto 2: Funciones de gestión de libros ----------

// Agregar nuevo libro
function agregarLibro() {
  const titulo = prompt("📕 Título del libro: ");
  const autor = prompt("✍ Autor del libro: ");
  const nuevoLibro = {
    id: libros.length + 1,
    titulo,
    autor,
    disponible: true,
  };
  libros.push(nuevoLibro);
  console.log("✅ Libro agregado correctamente.");
}

// Buscar libro por título
function buscarLibro() {
  const titulo = prompt("🔎 Ingrese el título a buscar: ").toLowerCase();
  const encontrados = libros.filter((l) =>
    l.titulo.toLowerCase().includes(titulo)
  );
  if (encontrados.length > 0) {
    console.log("📚 Libros encontrados:");
    encontrados.forEach((l) => {
      console.log(`- ${l.titulo} (${l.autor}) - ${l.disponible ? "Disponible" : "Prestado"}`);
    });
  } else {
    console.log("❌ No se encontraron libros.");
  }
}

// Ordenar libros alfabéticamente (Bubble Sort)
function ordenarLibros() {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - 1 - i; j++) {
      if (libros[j].titulo > libros[j + 1].titulo) {
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp;
      }
    }
  }
  console.log("📚 Libros ordenados alfabéticamente.");
}

// Borrar libro por título
function borrarLibro() {
  const titulo = prompt("🗑 Ingrese el título del libro a borrar: ").toLowerCase();
  const indice = libros.findIndex((l) => l.titulo.toLowerCase() === titulo);
  if (indice !== -1) {
    libros.splice(indice, 1);
    console.log("✅ Libro eliminado correctamente.");
  } else {
    console.log("❌ Libro no encontrado.");
  }
}
// ---------- Punto 2: Funciones de gestión de libros ----------

// Agregar nuevo libro
function agregarLibro() {
  const titulo = prompt("📕 Título del libro: ");
  const autor = prompt("✍ Autor del libro: ");
  const nuevoLibro = {
    id: libros.length + 1,
    titulo,
    autor,
    disponible: true,
  };
  libros.push(nuevoLibro);
  console.log("✅ Libro agregado correctamente.");
}

// Buscar libro por título
function buscarLibro() {
  const titulo = prompt("🔎 Ingrese el título a buscar: ").toLowerCase();
  const encontrados = libros.filter((l) =>
    l.titulo.toLowerCase().includes(titulo)
  );
  if (encontrados.length > 0) {
    console.log("📚 Libros encontrados:");
    encontrados.forEach((l) =>
      console.log(`- ${l.titulo} (${l.autor}) - ${l.disponible ? "Disponible" : "Prestado"}`)
    );
  } else {
    console.log("❌ No se encontraron libros.");
  }
}

// Ordenar libros alfabéticamente (Bubble Sort)
function ordenarLibros() {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - 1 - i; j++) {
      if (libros[j].titulo > libros[j + 1].titulo) {
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp;
      }
    }
  }
  console.log("📚 Libros ordenados alfabéticamente.");
}

// Borrar libro por título
function borrarLibro() {
  const titulo = prompt("🗑 Ingrese el título del libro a borrar: ").toLowerCase();
  const indice = libros.findIndex((l) => l.titulo.toLowerCase() === titulo);
  if (indice !== -1) {
    libros.splice(indice, 1);
    console.log("✅ Libro eliminado correctamente.");
  } else {
    console.log("❌ Libro no encontrado.");
  }
}
// ---------- Punto 3: Funciones de gestión de usuarios ----------

// Registrar nuevo usuario
function registrarUsuario() {
  const nombre = prompt("🧑 Nombre del nuevo usuario: ");
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    librosPrestados: []
  };
  usuarios.push(nuevoUsuario);
  console.log("✅ Usuario registrado correctamente.");
}

// Mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
  console.log("👥 Lista de usuarios:");
  usuarios.forEach((u) => {
    console.log(- ${u.nombre} (ID: ${u.id}) — Libros prestados: ${u.librosPrestados.length});
  });
}

// Buscar usuario por nombre
function buscarUsuario() {
  const nombre = prompt("🔍 Ingrese el nombre del usuario: ").toLowerCase();
  const encontrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(nombre)
  );
  if (encontrados.length > 0) {
    console.log("👤 Usuarios encontrados:");
    encontrados.forEach((u) => {
      console.log(- ${u.nombre} (ID: ${u.id}) — Libros prestados: ${u.librosPrestados.length});
    });
  } else {
    console.log("❌ No se encontraron usuarios.");
  }
}

// Borrar usuario por nombre
function borrarUsuario() {
  const nombre = prompt("🗑 Ingrese el nombre del usuario a borrar: ").toLowerCase();
  const indice = usuarios.findIndex((u) => u.nombre.toLowerCase() === nombre);
  if (indice !== -1) {
    usuarios.splice(indice, 1);
    console.log("✅ Usuario eliminado correctamente.");
  } else {
    console.log("❌ Usuario no encontrado.");
  }
}
// ---------- Punto 3: Funciones de gestión de usuarios ----------

// Registrar nuevo usuario
function registrarUsuario() {
  const nombre = prompt("🧑 Nombre del nuevo usuario: ");
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    librosPrestados: []
  };
  usuarios.push(nuevoUsuario);
  console.log("✅ Usuario registrado correctamente.");
}

// Mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
  console.log("👥 Lista de usuarios:");
  usuarios.forEach((u) => {
    console.log(- ${u.nombre} (ID: ${u.id}) — Libros prestados: ${u.librosPrestados.length});
  });
}

// Buscar usuario por nombre
function buscarUsuario() {
  const nombre = prompt("🔍 Ingrese el nombre del usuario: ").toLowerCase();
  const encontrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(nombre)
  );
  if (encontrados.length > 0) {
    console.log("👤 Usuarios encontrados:");
    encontrados.forEach((u) => {
      console.log(- ${u.nombre} (ID: ${u.id}) — Libros prestados: ${u.librosPrestados.length});
    });
  } else {
    console.log("❌ No se encontraron usuarios.");
  }
}

// Borrar usuario por nombre
function borrarUsuario() {
  const nombre = prompt("🗑 Ingrese el nombre del usuario a borrar: ").toLowerCase();
  const indice = usuarios.findIndex((u) => u.nombre.toLowerCase() === nombre);
  if (indice !== -1) {
    usuarios.splice(indice, 1);
    console.log("✅ Usuario eliminado correctamente.");
  } else {
    console.log("❌ Usuario no encontrado.");
  }
}
// ---------- Punto 5: Reporte con métodos avanzados ----------

function generarReporteLibros() {
  console.log("📄 Reporte de Libros:");

  libros.forEach((libro) => {
    const prestadoA = usuarios.find((u) => u.librosPrestados.includes(libro.id));
    const estado = libro.disponible ? "Disponible ✅" : Prestado a ${prestadoA.nombre} ❌;
    console.log(📘 ${libro.titulo} - ${libro.autor} → ${estado});
  });
}
// ---------- Punto 5: Reporte con métodos avanzados ----------

function generarReporteLibros() {
  console.log("📄 Reporte de Libros:");

  libros.forEach((libro) => {
    const prestadoA = usuarios.find((u) => u.librosPrestados.includes(libro.id));
    const estado = libro.disponible ? "Disponible ✅" : Prestado a ${prestadoA.nombre} ❌;
    console.log(📘 ${libro.titulo} - ${libro.autor} → ${estado});
  });
}
// ---------- Punto 7: Cálculos estadísticos ----------

function calcularEstadisticas() {
  const totalLibros = libros.length;
  const librosDisponibles = libros.filter((l) => l.disponible).length;
  const librosPrestados = totalLibros - librosDisponibles;

  let totalPrestamos = 0;
  usuarios.forEach((u) => {
    totalPrestamos += u.librosPrestados.length;
  });

  console.log("📊 Estadísticas:");
  console.log(📚 Total de libros: ${totalLibros});
  console.log(✅ Libros disponibles: ${librosDisponibles});
  console.log(📕 Libros prestados: ${librosPrestados});
  console.log(👥 Total de préstamos realizados: ${totalPrestamos});
}
// ---------- Punto 8: Manejo de cadenas ----------

function normalizarDatos() {
  libros.forEach((l) => {
    l.titulo = l.titulo.trim().toLowerCase();
    l.autor = l.autor.trim().toLowerCase();
  });

  usuarios.forEach((u) => {
    u.nombre = u.nombre.trim().toLowerCase();
  });

  console.log("🧼 Datos normalizados correctamente.");
}
// ---------- Punto 9: Interfaz de usuario por consola ----------

function menu() {
  let opcion = "";
  do {
    console.log("\n📚 MENÚ PRINCIPAL 📚");
    console.log("1️⃣ Agregar libro");
    console.log("2️⃣ Buscar libro");
    console.log("3️⃣ Ordenar libros");
    console.log("4️⃣ Borrar libro");
    console.log("5️⃣ Registrar usuario");
    console.log("6️⃣ Mostrar todos los usuarios");
    console.log("7️⃣ Buscar usuario");
    console.log("8️⃣ Borrar usuario");
    console.log("9️⃣ Prestar libro");
    console.log("🔟 Devolver libro");
    console.log("🔢 Reporte de libros");
    console.log("🔍 Libros con palabra clave");
    console.log("📊 Calcular estadísticas");
    console.log("🔁 Normalizar datos");
    console.log("0️⃣ Salir");
    opcion = prompt("Seleccione una opción: ");

    switch (opcion) {
      case "1": agregarLibro(); break;
      case "2": buscarLibro(); break;
      case "3": ordenarLibros(); break;
      case "4": borrarLibro(); break;
      case "5": registrarUsuario(); break;
      case "6": mostrarTodosLosUsuarios(); break;
      case "7": buscarUsuario(); break;
      case "8": borrarUsuario(); break;
      case "9": prestarLibro(); break;
      case "10": devolverLibro(); break;
      case "11": generarReporteLibros(); break;
      case "12": librosConPalabrasEnTitulo(); break;
      case "13": calcularEstadisticas(); break;
      case "14": normalizarDatos(); break;
      case "0": console.log("👋 ¡Gracias por usar el sistema!"); break;
      default: console.log("❌ Opción inválida."); break;
    }
  } while (opcion !== "0");
}

// Ejecutar el menú
menu(); 
