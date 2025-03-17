let amigos = [];

// Agregar amigos 
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validación de campo vacío
    if (nombreAmigo === "") {
        alert("Inserte un nombre válido");
        return; // Se detiene
    }

    // Validar nombres duplicados
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre '${nombreAmigo}' ya está en la lista`);
        return;
    }

    // Agregar el nombre en el array
    amigos.push(nombreAmigo);

    // Limpiar campo de entrada
    inputAmigo.value = "";

    // Actualizar lista
    actualizarLista();
}

// Actualizar lista de amigos
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    // Limpiar contenido previo
    listaAmigos.innerHTML = "";

    // Recorrer el array con ciclo for
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Seleccionar amigo aleatorio
function sortearAmigo() {
    // Validar amigos disponibles
    if (amigos.length === 0) { // Comprobar array
        alert('No hay amigos disponibles para sortear, agrega un nombre');
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera número aleatorio
    
    // Obtener sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}







