const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
    const audio = document.querySelector(seletorAudio);

    if( audio === null || audio.localName != 'audio'){
        console.log('Elemento não encontrado');
    }else{
        audio.play();

    };
    
    
};

for( i=0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => {
        tocaSom(idAudio);
    }
}