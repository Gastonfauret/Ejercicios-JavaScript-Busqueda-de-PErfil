var contactos = [
    { 
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "054256",
        "gustos": ["Pizza", "Programacion"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "985206",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Lionel",
        "apellido": "Messi",
        "numero": "000010",
        "gustos": ["Reggae", "Hacele Upa"]
    }
];

function findProfile(nombre, propiedad) {
    for(var i = 0; contactos.length; i++) {
        if(contactos[i].nombre === nombre) {
            return  contactos[i][propiedad] || "La propiedad no existe.";
        }
    }
    return "El contacto no esta en la lista.";
}

console.log(findProfile("Nora", "gustos")); // ["Pizza", "Programacion"]
console.log(findProfile("Harry", "numero")); // 985206
console.log(findProfile("Lionel", "apellido")); // Messi
console.log(findProfile("Nora", "Email")); // La propiedad no existe.
console.log(findProfile("Ramiro", "gustos")); // El contacto no esta en la lista.