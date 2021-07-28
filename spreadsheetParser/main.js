import csv from 'csvtojson';
import glob from'glob-promise';
import fs from 'fs';
import universities from "./data/Universities";
import dataSheetTypes from "./data/DataSheetTypes";

async function parseInputs() {
    const inputs = await glob('./input/*.csv');
    const outputs = await glob('./output/*.json');

    for (let input of inputs){
        const csvParser = csv();

        let [universityCode, sheetCode, year] = input
            .replace('.csv', '')
            .split('/')
            .reverse()[0]
            .split("_");

        let university = universities.find(u => u.code === universityCode);
        let dataSheetType = dataSheetTypes.find(ds => ds.code === sheetCode);

        let output = input.replace('/input/', '/output/').replace('.csv', '.json');

        if (outputs.indexOf(output) !== -1) continue;

        let data = await csvParser.fromFile(input);
        data = dataSheetType.mapper(data);
        fs.writeFileSync(output, JSON.stringify(data));
    }

}

parseInputs();