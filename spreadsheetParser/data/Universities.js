//Lista das universidades atualmente contempladas pelo sistema

//A propriedade "code" é referente ao pedaço do nome do arquivo .csv que identifica a universidade
//As propriedades "UOs" e "UGs" são necessárias devido a separação de unidades gestoras e orçamentárias encontradas
//nos relatórios de Valor Pago
//A propriedade "datasheet" é um array vazio que será preenchido automaticamente com os relatórios referentes a universidade
//A propriedade "customRoutes" é utilizada para definir rotas/páginas específicas que existirão dentro da página da
//universidade em questão.
/* Exemplo do objeto que deve ser adicionado no array de CustomRoutes para criar uma página específica:
{
    path: 'crowdfunding',
    name: 'Crowdfunding',
    component: async () => require('../../src/views/UniversityViews/UNIRIO/Crowdfunding/Crowdfunding.vue').default,
}
 */
//path = o texto que irá aparecer no url da página
//name = o texto que irá aparecer no botão que levará a esta página
//component = o arquivo de template responsável pela renderização do conteúdo da página
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

const universities = [
    unirio
];

export default universities;