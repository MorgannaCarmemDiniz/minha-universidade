//Lista das ações orçamentárias encontradas nas tabelas.
//Caso uma ação orçamentária não-identificada apareça, é preciso que ela seja definida aqui.

const acoesOrcamentarias = [
    {
        codigo: '09HB',
        tipo: 'financeira',
        nome: 'CONTRIBUIÇÕES A ENTIDADES NACIONAIS SEM EXIGÊNCIA DE PROGRAMAÇÃO ESPECÍFICA FEDERAIS'
    },
    {
        codigo: '0005',
        tipo: 'primariaObrigatoria',
        nome: 'SENTENÇAS JUDICIAIS TRANSITADAS EM JULGADO (PRECATÓRIOS)'
    },
    {
        codigo: '0181',
        tipo: 'primariaObrigatoria',
        nome: 'APOSENTADORIAS E PENSÕES CIVIS DA UNIÃO'
    },
    {
        codigo: '0536',
        tipo: 'primariaObrigatoria',
        nome: 'BENEFÍCIOS E PENSÕES INDENIZATÓRIAS DECORRENTES DE LEGISLAÇÃO ESPECIAL E/OU DECISÕES JUDICIAIS'
    },
    {
        codigo: '2004',
        tipo: 'primariaObrigatoria',
        nome: 'ASSISTÊNCIA MÉDICA E ODONTOLÓGICA AOS SERVIDORES CIVIS, EMPREGADOS, MILITARES E SEUS DEPENDENTES'
    },
    {
        codigo: '20TP',
        tipo: 'primariaObrigatoria',
        nome: 'ATIVOS CIVIS DA UNIÃO'
    },
    {
        codigo: '212B',
        tipo: 'primariaObrigatoria',
        nome: 'BENEFÍCIOS OBRIGATÓRIOS AOS SERVIDORES CIVIS, EMPREGADOS, MILITARES E SEUS DEPENDENTES'
    },
    {
        codigo: '4002',
        tipo: 'primariaDiscricionaria',
        nome: 'ASSISTÊNCIA AO ESTUDANTE DE ENSINO SUPERIOR'
    },
    {
        codigo: '4572',
        tipo: 'primariaDiscricionaria',
        nome: 'CAPACITAÇÃO DE SERVIDORES PÚBLICOS FEDERAIS EM PROCESSO DE QUALIFICAÇÃO E REQUALIFICAÇÃO'
    },
    {
        codigo: '8282',
        tipo: 'primariaDiscricionaria',
        nome: 'REESTRUTURAÇÃO E EXPANSÃO DE INSTITUIÇÕES FEDERAIS DE ENSINO SUPERIOR'
    },
    {
        codigo: '00OQ',
        tipo: 'primariaDiscricionaria',
        nome: 'CONTRIBUIÇÕES A ORGANISMOS INTERNACIONAIS SEM EXIGÊNCIA DE PROGRAMAÇÃO ESPECÍFICA'
    },
    {
        codigo: '00PW',
        tipo: 'primariaDiscricionaria',
        nome: 'CONTRIBUIÇÕES A ENTIDADES NACIONAIS SEM EXIGÊNCIA DE PROGRAMAÇÃO ESPECÍFICA'
    },
    {
        codigo: '20GK',
        tipo: 'primariaDiscricionaria',
        nome: 'FOMENTO ÀS AÇÕES DE GRADUAÇÃO, PÓS-GRADUAÇÃO, ENSINO, PESQUISA E EXTENSÃO'
    },
    {
        codigo: '20RK',
        tipo: 'primariaDiscricionaria',
        nome: 'FUNCIONAMENTO DE INSTITUIÇÕES FEDERAIS DE ENSINO SUPERIOR'
    },
    {
        codigo: '216H',
        tipo: 'primariaDiscricionaria',
        nome: 'AJUDA DE CUSTO PARA MORADIA OU AUXÍLIO-MORADIA A AGENTES PÚBLICOS'
    },
    {
        codigo: '6328',
        tipo: 'primariaDiscricionaria',
        nome: 'UNIVERSIDADE ABERTA E À DISTÂNCIA'
    },
    {
        codigo: '4009',
        tipo: 'primariaDiscricionaria',
        nome: 'FUNCIONAMENTO DE CURSOS DE GRADUAÇÃO'
    },
    {
        codigo: '119T',
        tipo: 'primariaDiscricionaria',
        nome: 'REUNI – READEQUAÇÃO DA INFRA-ESTRUTURA DA UNIVERSIDADE FEDERAL DO ESTADO DO RIO DE JANEIRO (UNIRIO)'
    }
]

export default acoesOrcamentarias;