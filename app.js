//Challenge amigo secreto 2025 curso de oracle !
// Lista de amigos declarada
let Lista_amigosecretos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = (input.value || "").trim();

  if (!nombre) {
    alert("Por favor, se necesita un nombre para jugar.");
    return;
  }

 //evitamos que dos personas participen con el mismo nombre
 if (Lista_amigosecretos.includes(nombre)) {
    alert("Ese nombre ya está participando en el juego");
    input.select();
   return;
 }

  // Añadimos los nombres a la lista
  Lista_amigosecretos.push(nombre);

  // Limpiar la entrada
  input.value = "";

  // Mostrar la lista actualizada
  mostrarLista();
}

// 3) Mostrar la lista 
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar lista con innerhtml
  lista.innerHTML = "";

 // creacion de elementos de lista (<li>) para cada título.
  for (let i = 0; i < Lista_amigosecretos.length; i++) {
    const li = document.createElement("li");
    li.textContent = Lista_amigosecretos[i];
    lista.appendChild(li);
  }

  // limpiar cualquier resultado previo 
  document.getElementById("resultado").innerHTML = "";
}

// 4) Sortear amigo secreto
function sortearAmigo() {
  // No se deja validad si no se ha ingresado algun amigo secreto
  if (Lista_amigosecretos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * Lista_amigosecretos.length);
  const nombreSorteado = Lista_amigosecretos[indiceAleatorio];

  // Mostrar resultado 
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpiar resultados previos
  const li = document.createElement("li");
  li.textContent = `🎉 Tu amigo secreto es: ${nombreSorteado}`;
  resultado.appendChild(li);
}

//  permitir Enter para agregar, sin tocar el HTML
document.getElementById("amigo").addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarAmigo();
});