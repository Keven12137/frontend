const root = document.getElementById("root");

/*COMPONENTES*/
function Cabecalho() {
    const header = document.createElement("header");
    return header;
}


function Conteudo() {
    const main = document.createElement("main");
    return main;
}


function Rodape() {
    const footer = document.createElement("footer");
    return footer;
}


/*paginas*/
function PageLogin() {
    const conteudo = Conteudo();
    const rodape = Rodape();
    root.append(conteudo, rodape);
}


function Pagehome() {


    const cabecalho = Cabecalho();
    const conteudo = conteudo();
    root.append(cabecalho, conteudo);
}


PageLogin();