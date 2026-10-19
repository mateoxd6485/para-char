
function mostrar(opcion) {
    let mensaje = "";

    if (opcion == 1) {
        mensaje = "Porque tienes una forma de ser que me gusta mucho y siempre  me sacas  una sonrisa cada que estoy contigo aunque estes enojadaaaa. 👻";
    } else if (opcion == 2) {
        mensaje = "Me gustan tus hoyuelos cuando sonríes, tus ojos tu forma de ser y tu voz que es chistosa y tierna a la vez. Aunque aveces me das miedo cuando te enojas  🦦";
    } else if (opcion == 3) {
        mensaje = "Me gusta cuando juegas voleibol y fijarme en esos pequeños detalles que te hacen especial  al jugar. 🦭🏐";
    } else if (opcion == 4) {
        mensaje = "Char 🐯 creo que ya sabias lo que siento porque la verdad aveces soy muy obvioo. Me gustas  ya desde hace mucho tiempo y  la verdad quería hacer algo especial para decírtelo. Espero que te guste este detalle que hize con todo lo que siento por ti aunque las palabras no sean suficientes para expresar  lo que siento es algo que hize con todo mi corazon 🐯 espero que te gustee mucho. ";
    }

    document.getElementById("frase").innerHTML = mensaje;
}
