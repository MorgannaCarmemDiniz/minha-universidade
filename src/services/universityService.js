import universities from "../../spreadsheetParser/data/Universities";
import dataSheetTypes from "../../spreadsheetParser/data/DataSheetTypes";

function fillUniversities() {
    let context = require.context('../../spreadsheetParser/output', false, /\.json$/, 'lazy');
    let keys = context.keys();

    for (let key of keys) {
        let [universityCode, sheetType, year] = key.replace(/^\.\//, '').replace(/\.json$/, '').split('_');

        let university = universities.find(u => u.code === universityCode);
        if (!university) {
            console.error(`University not found: ${universityCode}`);
            continue;
        }

        let type = dataSheetTypes.find(ds => ds.code === sheetType);
        if (!type) {
            console.error(`DataSheet type not found: ${sheetType}`);
            continue;
        }

        university.datasheets.push({
            year,
            type,
            key,
            load: async function () {
                return context(this.key)
            }
        })
    }
}

fillUniversities();

const universityService = {
    async getList() {
        return universities;
    },

    async getByCode(code) {
        return universities.find(u => u.code === code);
    },
};

export default universityService;