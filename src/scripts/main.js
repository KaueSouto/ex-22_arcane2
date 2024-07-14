AOS.init();

const dataDoLancamento = new Date("Nov 1, 2024 00:00:00");
const timeStampDoLancamento = dataDoLancamento.getTime();

const contador = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOLancamento = timeStampDoLancamento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOLancamento = Math.floor(distanciaAteOLancamento / diaEmMs);
    const horasAteOLancamento = Math.floor((distanciaAteOLancamento % diaEmMs) / horaEmMs);
    const minutosAteOLancamento = Math.floor((distanciaAteOLancamento % horaEmMs) / minutoEmMs);
    const segundosAteOLancamento = Math.floor((distanciaAteOLancamento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `disponível em ${diasAteOLancamento}d ${horasAteOLancamento}h ${minutosAteOLancamento}m ${segundosAteOLancamento}s`;

    if (distanciaAteOLancamento < 0) {
        clearInterval(contador);
        document.getElementById('contador').innerHTML = 'já disponível';
    }
}, 1000);