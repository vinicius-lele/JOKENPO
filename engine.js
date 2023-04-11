let escolhaUsuario,comparar,resultado,escolhaIA,texto;
let opcoes = ['pedra.jpg','papel.jpg','tesoura.jpg'];
let img = document.querySelectorAll('.opcao');
let meuH3 = document.querySelector('h3');
const novaDiv = document.createElement('div');
novaDiv.setAttribute('class', 'resultado');

function mostraDivResultado(usuario, ia){
    texto = `
                <div class="card">
                    <img src="${usuario}">
                    Sua escolha
                </div>
                <div class="card">
                    <img src="${ia}">
                    Escolha da máquina
                </div>
               <h2>`+resultado+`</h2>`;
                
                novaDiv.innerHTML = texto;
}
    
img.forEach(img_choice => {
    img_choice.addEventListener("click", ()=>{
        escolhaUsuario = img_choice.id;
        escolhaIA = Math.floor(Math.random()*3);
        comparar = escolhaIA-escolhaUsuario
        switch(comparar){
            case -2:
            case 1:
                resultado = 'vitória da MÁQUINA';
                break;
            case 0:
                resultado = 'EMPATE';
                break;
            default:
                resultado = 'VOCÊ venceu';
        }
        meuH3.appendChild(novaDiv);
        mostraDivResultado(opcoes[escolhaUsuario], opcoes[escolhaIA])
    })
            
});
    
        