// Botão "Ver meus projetos"

const botaoProjetos = document.getElementById("botaoProjetos");

botaoProjetos.addEventListener("click", function () {

    const projetos = document.getElementById("projetos");

    projetos.scrollIntoView({
        behavior: "smooth"
    });

});


// Botão "Mostrar projeto"

const botaoBuscar = document.getElementById("botaoBuscar");

botaoBuscar.addEventListener("click", function () {

    const tecnologia = document.getElementById("tecnologia").value;
    const resultado = document.getElementById("resultado");

    if (tecnologia === "java") {

        resultado.innerHTML = `
            <h3>Detector de Golpes Digitais</h3>
            <p>
                Projeto desenvolvido em Java para identificar
                possíveis sinais de golpes digitais.
            </p>
        `;

    } else if (tecnologia === "frontend") {

        resultado.innerHTML = `
            <h3>Portfólio Pessoal</h3>
            <p>
                Projeto desenvolvido utilizando HTML,
                CSS e JavaScript.
            </p>
        `;

    } else {

        resultado.innerHTML = `
            <p>Selecione uma tecnologia.</p>
        `;

    }

});