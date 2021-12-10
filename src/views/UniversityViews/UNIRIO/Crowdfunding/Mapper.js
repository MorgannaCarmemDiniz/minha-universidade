const csv = require('csvtojson');
const glob = require('glob-promise');
const fs = require('fs');

async function parseInput() {
    const input = await glob('./*.csv');
    const csvParser = csv();

    let data = await csvParser.fromFile(input[0]);
    data.forEach(row => {
        row.Contribuicao = row.Contribuicao.replace(/[^0-9,.]/gi, '');
    });

    data = data.map(row => ({
            Nome: row['Visibilidade do usuario'] == 'público' ? row.Nome : 'Anônimo',
            Valor: row['Visibilidade da doacao'] == 'público' ? row.Contribuicao : 'Anônimo',
            Data: row['Data da doação']
        }));
    fs.writeFileSync(input[0].replace('.csv', '.json'), JSON.stringify(data));
}

parseInput();
