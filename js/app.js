let seletor = document.querySelector(".carrinho__produtos");
let seletorOptions=document.getElementById("produto").options;
let valorTotal = 0.00;
let qtd;

limpar();

function adicionar() {
    qtd = parseInt(document.querySelector(".quantidade-input").value);
    if (isNaN(qtd) || qtd==0) {
        console.log('NaN ou zero');
    } else {
        if (seletor.textContent == "Nenhum produto adicionado!") {
            seletor.innerHTML = "";
        }

        if (seletorOptions[seletorOptions.selectedIndex]==seletorOptions[0]){
            calculaNovoAdd(" Fone de ouvido", 100);
        }else if(seletorOptions[seletorOptions.selectedIndex]==seletorOptions[1]){
            calculaNovoAdd(" Celular", 1400);
        }else if(seletorOptions[seletorOptions.selectedIndex]==seletorOptions[2]){
            calculaNovoAdd(" Oculos VR", 5000);
        }
    }
    document.querySelector(".quantidade-input").value = 0;
}
function calculaNovoAdd(item, preço) {
    // Calcula novo valor adicionado e soma ao valor total
    let valor = qtd * preço;
    
    seletor.insertAdjacentHTML("beforeend",
        `<section class="carrinho__produtos__produto">
            <span class='texto-azul'> ${qtd}x </span>
            ${item} <span class='texto-azul'> R$${valor} </span>
        </section>`
    );
    valorTotal += valor;
    document.getElementById("valor-total").innerHTML = `R$${valorTotal.toLocaleString('pt-BR')}`;
}

function limpar() {
    seletor.innerHTML = "Nenhum produto adicionado!";
    document.getElementById("valor-total").innerHTML = "RS 0,00";
    valorTotal = 0;
    qtd = 0;
}




