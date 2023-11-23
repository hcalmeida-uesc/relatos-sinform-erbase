function showCourseInfo(courseId) {
    // Simule informações dinâmicas do minicurso (substitua com seus próprios dados)
    const courseData = {
        minicurso1: {
            title: "Introdução ao HTML",
            description: "Aprenda os conceitos básicos do HTML.",
            image: "caminho/para/imagem1.jpg",
            // Adicione mais informações conforme necessário
        },
        minicurso2: {
            title: "CSS Avançado",
            description: "Explore recursos avançados do CSS para estilizar suas páginas.",
            image: "caminho/para/imagem2.jpg",
            // Adicione mais informações conforme necessário
        }
        // Adicione mais minicursos conforme necessário
    };

    // Atualize a seção de informações do minicurso com os dados correspondentes
    document.getElementById('course-title').textContent = courseData[courseId].title;
    document.getElementById('course-description').textContent = courseData[courseId].description;
    document.getElementById('course-image').src = courseData[courseId].image;

    // Exiba a seção de informações do minicurso
    document.getElementById('course-info').style.display = 'block';
}