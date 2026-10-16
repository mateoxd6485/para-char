
function mostrar(opcion) {
    let mensaje = "";

    if (opcion == 1) {
        mensaje = "Porque tienes una forma de ser que me gusta mucho y siempre  me sacas  una sonrisa cada que estoy contigo. ❤️";
    } else if (opcion == 2) {
        mensaje = "Me gustan tus hoyuelos cuando sonríes, tus ojos tu forma de ser y tu voz que es chistosa y tierna a la vez. 😻";
    } else if (opcion == 3) {
        mensaje = "Me gusta verte jugar voleibol y fijarme en esos pequeños detalles que te hacen ser tú misma . 🏐💕";
    } else if (opcion == 4) {
        mensaje = "Char creo que ya sabias lo que siento porque la verdad aveces soy muy obvioo. Me gustas y  la verdad quería hacer algo especial para decírtelo. ";
    }

    document.getElementById("frase").innerHTML = mensaje;
}
