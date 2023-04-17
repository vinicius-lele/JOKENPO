let escolhaUsuario,comparar,resultado,escolhaIA,texto;
let pontoIA = 0;
let pontoUsuario = 0;
let opcoes = ['pedra.jpg','papel.jpg','tesoura.jpg'];
let img = document.querySelectorAll('.opcao');
let meuH3 = document.querySelector('h3');
const novaDiv = document.createElement('div');
novaDiv.setAttribute('class', 'resultado');

function mostraDivResultado(usuario, ia, comparar){
    switch(comparar){
        case -2:
        case 1:
            texto = `
            <div class="card derrota">
                <img src="${usuario}">
                Você
            </div>
            <div class="card vitoria">
                <img src="${ia}">
                Máquina
            </div>
           <span>`+resultado+`</span>`;
            break;
        case 0:
            texto = `
            <div class="card empate">
                <img src="${usuario}">
                Você
            </div>
            <div class="card empate"">
                <img src="${ia}">
                Máquina
            </div>
           <span>`+resultado+`</span>`;
            break;
        default:
            texto = `
            <div class="card vitoria">
                <img src="${usuario}">
                Você
            </div>
            <div class="card derrota">
                <img src="${ia}">
                Máquina
            </div>
           <span>`+resultado+`</span>`;
    }
    
    
    
    // texto = `
    //             <div class="card">
    //                 <img src="${usuario}">
    //                 Você
    //             </div>
    //             <div class="card">
    //                 <img src="${ia}">
    //                 Máquina
    //             </div>
    //            <span>`+resultado+`</span>`;
                
                novaDiv.innerHTML = texto;
                document.querySelector(".placar").innerHTML = `Você <span>${pontoUsuario}</span> X <span>${pontoIA}</span> Máquina
                <p class="zerar"><span>ZERAR PLACAR</span></p>`;
                document.querySelector(".zerar").addEventListener("click", ()=>{location.reload()});
                
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
                pontoIA++;
                break;
            case 0:
                resultado = 'EMPATE';
                break;
            default:
                resultado = 'VOCÊ venceu';
                pontoUsuario++;
        }
        meuH3.appendChild(novaDiv);
        mostraDivResultado(opcoes[escolhaUsuario], opcoes[escolhaIA],comparar)
        console.log(pontoIA)
        console.log(pontoUsuario)
    })
            
});

