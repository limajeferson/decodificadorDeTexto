document.addEventListener('DOMContentLoaded', function () {
    const entradaTexto = document.getElementById('entradaTexto');
    const criptografarBtn = document.getElementById('criptografarBtn');
    const descriptografarBtn = document.getElementById('descriptografarBtn');
    const saidaTexto = document.getElementById('saidaTexto');
    const copiarBtn = document.getElementById('copiarBtn');

    criptografarBtn.addEventListener('click', function () { // clique passa a função para o botão
        const textoCriptografado = criptografar(entradaTexto.value);
        saidaTexto.textContent = textoCriptografado;
        saidaTexto.style.display = 'block'; // block para ficar visível o resultado
    });

    descriptografarBtn.addEventListener('click', function () { // clique passa a função para o botão
        const textoDescriptografado = descriptografar(entradaTexto.value);
        saidaTexto.textContent = textoDescriptografado;
        saidaTexto.style.display = 'block'; // block para ficar visível o resultado
    });

    copiarBtn.addEventListener('click', function () { // clique passa a função para o botão
        const textoParaCopiar = saidaTexto.textContent;
        navigator.clipboard.writeText(textoParaCopiar); // copiando o texto
        alert('Texto copiado para a área de transferência!'); //Informar que o texto foi copiado para área de transferência
    });


    // o g busca globalmente dentro da string a letra dentro da expressão `/`
    // replace troca o primeiro item buscado pelo segundo indicado
    function criptografar(texto) {
        return texto.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // o g busca globalmente dentro da string a letra dentro da expressão `/`
    // replace troca o primeiro item buscado pelo segundo indicado
    function descriptografar(texto) {
        return texto.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }
});
