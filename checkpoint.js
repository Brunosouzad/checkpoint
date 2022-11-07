function microondas(prato, tempo) {
    switch (prato) {
        case 'pipoca':
            const tempoPipoca = 10;
            if (tempo >= tempoPipoca * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoPipoca * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoPipoca) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoPipoca && tempo < tempoPipoca * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }
            
            break;
        case 'macarrao':
            const tempoMacarrao = 8;
            if (tempo >= tempoMacarrao * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoMacarrao * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoMacarrao) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoMacarrao && tempo < tempoMacarrao * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }

            break;
        case 'carne':
            const tempoCarne = 15;
            if (tempo >= tempoCarne * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoCarne * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoCarne) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoCarne && tempo < tempoCarne * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }

            break;
        case 'feijao':
            const tempoFeijao = 12;
            if (tempo >= tempoFeijao * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoFeijao * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoFeijao) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoFeijao && tempo < tempoFeijao * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }

            break;
        case 'brigadeiro':
            const tempoBrigadeiro = 8;
            if (tempo >= tempoBrigadeiro * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoBrigadeiro * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoBrigadeiro) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoBrigadeiro && tempo < tempoBrigadeiro * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }

            break;
        default:
            console.log("Prato inexistente");
            break;
    }
}

microondas('macarrao', 20)