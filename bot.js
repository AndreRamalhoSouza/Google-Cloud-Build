const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();



client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    const lowercaseBody = message.body.toLocaleLowerCase().replace(/\s+/g, '').replace(/,/g, ''); // Removendo espaços e vírgulas da mensagem
    
    if (lowercaseBody === 'oi' || lowercaseBody === 'bomdia' || lowercaseBody === 'boatarde' || lowercaseBody === 'boanoite' || lowercaseBody === 'olá' || lowercaseBody === 'ola' || lowercaseBody === 'oii' || lowercaseBody === 'oie') {
        setTimeout(() => {
            client.sendMessage(message.from, 'Seja Bem vindo! Eu sou *BotHands*, o melhor Assistente Virtual do Brasil, *Conte comigo!* :)');
        }, 500); // 500 milliseconds delay
        setTimeout(() => {
            client.sendMessage(message.from, 'Qual *informação* você deseja saber? (*Digite a Opção desejada*:)');
        }, 1000); // 1000 milliseconds delay
        setTimeout(() => {
            client.sendMessage(message.from, '1 - Agendar atendimento *Presencial* (RJ) ou *Virtual* (VÍDEO CHAMADA)');
        }, 1500); // 1500 milliseconds delay
        setTimeout(() => {
            client.sendMessage(message.from, '2 - Dúvidas/Informações sobre o *BotHands*...');
        }, 2000); // 2000 milliseconds delay
        setTimeout(() => {
            client.sendMessage(message.from, '3 - Quanto custa o *BotHands?*');
        }, 2500); // 2500 milliseconds delay
    }

    if (lowercaseBody === '1') {
        setTimeout(() => {
            client.sendMessage(message.from, 'Escolha o tipo de Atendimento: *Presencial* ou *Virtual*');
        }, 500); // 500 milliseconds delay
    }

    if (lowercaseBody === 'presencial' || lowercaseBody === 'virtual') {
        setTimeout(() => {
            client.sendMessage(message.from, 'Digite o seu *Nome completo*, o nome da sua *Empresa*, a *Data* e o *Horário* que deseja ser atendido!');
            
            // Verifica se o cliente respondeu após a solicitação das informações
            const timer = setTimeout(() => {
                client.sendMessage(message.from, 'Por favor *PREENCHA* todos os dados pedidos!.');
            }, 90 * 1000); // 1 minuto e meio em milissegundos (90 segundos)
    
            client.once('message', response => {
                clearTimeout(timer); // Cancela o temporizador quando o cliente responde
                if (response.from === message.from && response.body) {
                    // Cliente respondeu e a mensagem não está vazia, então consideramos que ele preencheu os dados
                    client.sendMessage(message.from, '*REGISTRADO! Em breve estarei entrando em contato!*');
                }
            });
        }, 1500); // 1500 milliseconds delay
    }
    
    if (lowercaseBody === '2') {
        setTimeout(() => {
            client.sendMessage(message.from, '*BotHands* é criado com o objetivo em ter um nível avançado de atendimento ao cliente de forma *prática* e *efetiva*, durante 24 horas por dia!');
        }, 500); // 500 milliseconds delay
    }

    if (lowercaseBody === '3') {
        setTimeout(() => {
            client.sendMessage(message.from, 'O valor do *BotHands* é determinado pela proporção do projeto que ele será criado junto com todas as suas funções após o atendimento *Presencial* ou *Virtual* (VÍDEO CHAMADA)!');
        }, 500); // 500 milliseconds delay
    }
});

client.initialize();
