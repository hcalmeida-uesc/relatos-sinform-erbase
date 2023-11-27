showCourse(null);
function showCourse(courseId) {
    const minicursos = document.getElementsByClassName('minicurso');

    // Usando um loop tradicional para iterar sobre a coleção
    for (const el of minicursos) {
        el.style.display = "none";
    }

    if (courseId == null) {
        document.getElementById("minicurso-github").style.display = "block";
        return;
    }
    // Exibindo o elemento com o ID fornecido
    document.getElementById(courseId).style.display = "block";
}
