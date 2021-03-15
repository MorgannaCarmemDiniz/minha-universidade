const csv = require('csvtojson');
const glob = require('glob-promise');
const fs = require('fs');

async function parseInputs() {
    const csvParser = csv();
    const inputs = await glob('./input/*.csv');
    const outputs = await glob('./output/*.json');

    for (let input of inputs){
        let output = input.replace('/input/', '/output/').replace('.csv', '.json');
        if (outputs.indexOf(output) !== -1) continue;
        let data = await csvParser.fromFile(input);
        fs.writeFileSync(output, JSON.stringify(data));

    }

}

parseInputs();