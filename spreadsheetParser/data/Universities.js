export const unirio = {
    code: 'unirio',
    name: 'Universidade Federal do Estado do Rio de Janeiro',
    shortName: 'UNIRIO',
    UOs: {
        UNIRIO: "26269",
        HUGG: "26391"
    },
    UGs: {
        UNIRIO: "154034",
        HUGG: "154035"
    },
    datasheets: [],

    getLogo: () => require('../assets/unirioLogo.png'),
    getImage: () => require('../assets/unirio.jpg'),
    customRoutes: [
        {
            path: 'receita',
            name: 'Receita',
            component: async () => require('../../src/views/UniversityViews/UNIRIO/Receita.vue').default,
        }
    ],
    url: 'http://www.unirio.br'
};

const universities = [
    unirio
];

export default universities;