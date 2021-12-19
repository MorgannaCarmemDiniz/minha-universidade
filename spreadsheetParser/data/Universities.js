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
    customRoutes: [],
    url: 'http://www.unirio.br'
};

/* Exemplo do objeto que deve ser adicionado no array de CustomRoutes para criar uma página específica:
{
    path: 'crowdfunding',
    name: 'Crowdfunding',
    component: async () => require('../../src/views/UniversityViews/UNIRIO/Crowdfunding/Crowdfunding.vue').default,
}
 */

const universities = [
    unirio
];

export default universities;