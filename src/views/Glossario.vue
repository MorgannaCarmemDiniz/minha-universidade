<template>
    <b-row class="containerGlossario">
        <b-col sm="3">
            <vue-sticky-sidebar :topSpacing="30" class="sidebar" containerSelector=".containerGlossario" innerWrapperSelector='.sidebar__inner'>
                <b-nav pills vertical>
                    <b-nav-item @click="current = 1" :active="current == 1">Classificação de Despesa</b-nav-item>
                    <b-nav-item @click="current = 2" :active="current == 2">Classificação funcional</b-nav-item>
                    <b-nav-item @click="current = 3" :active="current == 3">Natureza da Despesa</b-nav-item>
                    <b-nav-item @click="current = 4" :active="current == 4">Unidade</b-nav-item>
                </b-nav>
            </vue-sticky-sidebar>
        </b-col>
        <b-col class="topics">
            <div v-if="current == 1" >
                <h4>Classificação de Despesa</h4>
                <p>
                    A <a href="https://www.fnde.gov.br/index.php/acesso-a-informacao/institucional/legislacao/item/3481-portaria-interministerial-n%C2%BA-163-de-04-de-maio-de-2001">
                    Portaria Interministerial nº 163, de 04 de maio de 2001</a>, define a forma como as despesas devem ser nomeadas no Orçamento Público.
                    <br>
                    <br>
                    “Art. 5º Em decorrência do disposto no art. 3º a estrutura da natureza da despesa a ser observada na execução orçamentária de todas as esferas de Governo será “c.g.mm.ee.dd”, onde:
                    <br>
                    <br>
                    a. “c” representa a categoria econômica;
                    <br>
                    b. “g” o grupo de natureza da despesa;
                    <br>
                    c. “mm” a modalidade de aplicação;
                    <br>
                    d. “ee” o elemento de despesa; e
                    <br>
                    e. “dd” o desdobramento, facultativo, do elemento de despesa.“
                    <br>
                    <br>
                    Portanto, a natureza da despesa é representada por um código de oito dígitos.
                </p>

                <img src="../assets/categoriasDespesas.png" alt="">

                <h4>Categoria Econômica</h4>

                <p>
                    Indica se a despesa contribui para a formação ou aquisição de um bem de capital.
                    <br>
                    <br>
                    3 – Despesa Corrente
                    <br>
                    4 – Despesa de Capital
                    <br>
                    <br>
                </p>
                <h4>Grupo de Natureza de Despesa</h4>
                <p>
                    <br>
                    Agrega elementos de despesa com as mesmas características quanto ao objeto de gasto.
                    <br>
                    <br>
                    1 – Pessoal e Encargos Sociais
                    <br>
                    2 – Juros e Encargos da Dívida
                    <br>
                    3 – Outras Despesas Correntes
                    <br>
                    4 – Investimentos
                    <br>
                    5 – Inversões Financeiras
                    <br>
                    6 – Amortização da Dívida
                    <br>
                    9 – Reserva de Contingência
                    <br>
                    <br>
                </p>
                <h4>Modalidades de Aplicação</h4>
                <p>
                    Indica se os recursos são aplicados diretamente pela unidade detentora do crédito.
                    <br>
                    <br>
                    20 – Transferências à União
                    <br>
                    30 – Transferências aos Estados e ao DF
                    <br>
                    40 a 46 – Transferências aos Municípios
                    <br>
                    50 – Transferências a instituições privadas sem fins lucrativos
                    <br>
                    60 – Transferências a instituições privadas com fins lucrativos
                    <br>
                    67 – Execução de contrato de Parcerias Público-Privada (PPP)
                    <br>
                    70 a 76 – Transferências a instituições multigovernamentais
                    <br>
                    80 – Transferências ao exterior
                    <br>
                    90 a 96- Aplicações Diretas
                    <br>
                    99 – A Definir
                    <br>
                    <br>
                </p>
                <h4>Elementos de Despesa</h4>
                <p>
                    Indica os objetos de gasto.
                    <br>
                    <br>
                    01 – Aposentadorias do RPPS, Reserva Remunerada e Reformas dos Militares
                    <br>
                    03 – Pensões do RPPS e do militar
                    <br>
                    04 – Contratação por Tempo Determinado
                    <br>
                    05 – Outros Benefícios Previdenciários do servidor ou do militar
                    <br>
                    06 – Benefício Mensal ao Deficiente e ao Idoso
                    <br>
                    07 – Contribuição a Entidades Fechadas de Previdência
                    <br>
                    08 – Outros Benefícios Assistenciais do servidor e do militar
                    <br>
                    10 – Seguro Desemprego e Abono Salarial
                    <br>
                    11 – Vencimentos e Vantagens Fixas – Pessoal Civil
                    <br>
                    12 – Vencimentos e Vantagens Fixas – Pessoal Militar
                    <br>
                    13 – Obrigações Patronais
                    <br>
                    14 – Diárias – Civil
                    <br>
                    15 – Diárias – Militar
                    <br>
                    16 – Outras Despesas Variáveis – Pessoal Civil
                    <br>
                    17 – Outras Despesas Variáveis – Pessoal Militar
                    <br>
                    18 – Auxílio Financeiro a Estudantes
                    <br>
                    19 – Auxílio-Fardamento
                    <br>
                    20 – Auxílio Financeiro a Pesquisadores
                    <br>
                    21 – Juros sobre a Dívida por Contrato
                    <br>
                    22 – Outros Encargos sobre a Dívida por Contrato
                    <br>
                    23 – Juros, Deságios e Descontos da Dívida Mobiliária
                    <br>
                    24 – Outros Encargos sobre a Dívida Mobiliária
                    <br>
                    25 – Encargos sobre Operações de Crédito por Antecipação da Receita
                    <br>
                    26 – Obrigações decorrentes de Política Monetária
                    <br>
                    27 – Encargos pela Honra de Avais, Garantias, Seguros e Similares
                    <br>
                    28 – Remuneração de Cotas de Fundos Autárquicos
                    <br>
                    29 – Distribuição de Resultado de Empresas Estatais Dependentes
                    <br>
                    30 – Material de Consumo
                    <br>
                    31 – Premiações Culturais, Artísticas, Científicas, Desportivas e Outras
                    <br>
                    32 – Material, Bem ou Serviço para Distribuição Gratuita
                    <br>
                    33 – Passagens e Despesas com Locomoção
                    <br>
                    34 – Outras Despesas de Pessoal decorrentes de Contratos de Terceirização
                    <br>
                    35 – Serviços de Consultoria
                    <br>
                    36 – Outros Serviços de Terceiros – Pessoa Física
                    <br>
                    37 – Locação de Mão-de-Obra
                    <br>
                    38 – Arrendamento Mercantil
                    <br>
                    39 – Outros Serviços de Terceiros – Pessoa Jurídica
                    <br>
                    41 – Contribuições
                    <br>
                    42 – Auxílios
                    <br>
                    43 – Subvenções Sociais
                    <br>
                    45 – Subvenções Econômicas
                    <br>
                    46 – Auxílio-Alimentação
                    <br>
                    47 – Obrigações Tributárias e Contributivas
                    <br>
                    48 – Outros Auxílios Financeiros a Pessoas Físicas
                    <br>
                    49 – Auxílio-Transporte
                    <br>
                    51 – Obras e Instalações
                    <br>
                    52 – Equipamentos e Material Permanente
                    <br>
                    53 – Aposentadorias do RGPS – Área Rural
                    <br>
                    54 – Aposentadorias do RGPS – Área Urbana
                    <br>
                    55 – Pensões do RGPS – Área Rural
                    <br>
                    56 – Pensões do RGPS – Área Urbana
                    <br>
                    57 – Outros Benefícios do RGPS – Área Rural
                    <br>
                    58 – Outros Benefícios do RGPS – Área Urbana
                    <br>
                    59 – Pensões Especiais
                    <br>
                    61 – Aquisição de Imóveis
                    <br>
                    62 – Aquisição de Produtos para Revenda
                    <br>
                    63 – Aquisição de Títulos de Crédito
                    <br>
                    64 – Aquisição de Títulos Representativos de Capital já Integralizado
                    <br>
                    65 – Constituição ou Aumento de Capital de Empresas
                    <br>
                    66 – Concessão de Empréstimos e Financiamentos
                    <br>
                    67 – Depósitos Compulsórios
                    <br>
                    70 – Rateio pela Participação em Consórcio Público
                    <br>
                    71 – Principal da Dívida Contratual Resgatado
                    <br>
                    72 – Principal da Dívida Mobiliária Resgatado
                    <br>
                    73 – Correção Monetária ou Cambial da Dívida Contratual Resgatada
                    <br>
                    74 – Correção Monetária ou Cambial da Dívida Mobiliária Resgatada
                    <br>
                    75 – Correção Monetária da Dívida de Operações de Crédito por Antecipação da Receita
                    <br>
                    76 – Principal Corrigido da Dívida Mobiliária Refinanciado
                    <br>
                    77 – Principal Corrigido da Dívida Contratual Refinanciado
                    <br>
                    81 – Distribuição Constitucional ou Legal de Receitas
                    <br>
                    82 – Aporte de Recursos pelo Parceiro Público em Favor do Parceiro Privado Decorrente de Contrato de Parceria Público-Privada – PPP
                    <br>
                    83 – Despesas Decorrentes de Contrato de Parceria Público-Privada – PPP, exceto Subvenções Econômicas, Aporte e Fundo Garantidor
                    <br>
                    84 – Despesas Decorrentes da Participação em Fundos, Organismos, ou Entidades Assemelhadas, Nacionais e Internacionais
                    <br>
                    91 – Sentenças Judiciais
                    <br>
                    92 – Despesas de Exercícios Anteriores
                    <br>
                    93 – Indenizações e Restituições
                    <br>
                    94 – Indenizações e Restituições Trabalhistas
                    <br>
                    95 – Indenização pela Execução de Trabalhos de Campo
                    <br>
                    96 – Ressarcimento de Despesas de Pessoal Requisitado
                    <br>
                    97 – Aporte para Cobertura do Déficit Atuarial do RPPS
                    <br>
                    98 – Compensações ao RGPS
                    <br>
                    99 – A Classificar
                    <br>
                    <br>
                </p>
                <h4>Subelemento</h4>
                <p>
                    Caso o gestor precise desdobrar ainda mais o elemento de despesa, ele pode utilizar o subelemento para complementação final. Mas é um campo facultativo (quando não definido, usa-se zero).
                    <br>
                    <br>
                </p>
                <h4>Exemplo</h4>
                <p>
                    O código 3.3.90.18.00 corresponde ao Auxílio Financeiro a Estudantes. É possível usar o subelemento para especificar o tipo de auxílio. Por exemplo, 3.3.90.18.01 é BOLSAS DE ESTUDO NO PAIS e 3.3.90.18.04 é AUXILIOS PARA DESENVOLVIMENTO DE ESTUDOS E PESQUISAS.
                </p>

                <img src="../assets/estruturaCategoriasDespesas.png" alt="">

                <p>
                    O Anexo III da <a href="https://www.fnde.gov.br/index.php/acesso-a-informacao/institucional/legislacao/item/3481-portaria-interministerial-n%C2%BA-163-de-04-de-maio-de-2001">
                    Portaria Interministerial nº 163</a> mostra a lista dos códigos e descrições das naturezas de despesas existentes no Orçamento Público.
                </p>
                <h4>Referências</h4>
                <ul>
                    <li>
                        Contabilidade Púbica da Teoria à Prática. Inaldo Araújo e Daniel Arruda. 3a edição. Saraiva Uni. 2020.
                    </li>
                    <li>
                        Manual SADIPEM. MINISTÉRIO DA ECONOMIA. Disponível em: <a href="https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&view=article&id=1567:020332-classificacoes-orcamentarias&catid=749&Itemid=376">
                        https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&view=article&id=1567:020332-classificacoes-orcamentarias&catid=749&Itemid=376</a>.
                    </li>
                </ul>
            </div>
            <div v-if="current == 2">
                <h4>Classificação Funcional</h4>
                <p>
                    A classificação funcional é usada para identificar a área governamental de uma despesa do Orçamento Público. O código usado nesta classificação é composto por cinco dígitos:
                </p>
                <ul>
                    <li>
                        Os dois primeiros dígitos são reservados à função que corresponde ao maior nível de agregação de despesas;
                    </li>
                    <li>
                        Os três últimos dígitos são representados para a subfunção que corresponde a um subconjunto de despesas de uma função.
                    </li>
                </ul>
                <p>
                    As funções e subfunções do Orçamento Público estão definidas na Portaria MPOG nº 42, de 14 de abril de 1999.
                </p>
                <b-table-simple striped bordered>
                    <tbody>
                    <tr>
                        <td>01 – Legislativa</td>
                        <td>031 – Ação Legislativa<br>032 – Controle Externo</td>
                    </tr>
                    <tr>
                        <td>02 – Judiciária</td>
                        <td>061 – Ação Judiciária<br>062 – Defesa do Interesse Público no Processo Judiciário</td>
                    </tr>
                    <tr>
                        <td>03 – Essencial à Justiça</td>
                        <td>091 – Defesa da Ordem Jurídica<br>092 – Representação Judicial e Extrajudicial</td>
                    </tr>
                    <tr>
                        <td>04 – Administração</td>
                        <td>121 – Planejamento e Orçamento<br>122 – Administração Geral<br>123 – Administração Financeira<br>124 – Controle Externo<br>125 – Normatização e Fiscalização<br>126 – Tecnologia da Informatização<br>127 – Ordenamento Territorial<br>128 – Formação de Recursos Humanos<br>129 – Administração de Receitas<br>130 – Administração de Concessões<br>131 – Comunicação Social</td>
                    </tr>
                    <tr>
                        <td>05 – Defesa Nacional</td>
                        <td>151 – Defesa Área<br>152 – Defesa Naval<br>153 – Defesa Terrestre</td>
                    </tr>
                    <tr>
                        <td>06 – Segurança Pública</td>
                        <td>181 – Policiamento<br>182 – Defesa Civil<br>183 – Informação e Inteligência</td>
                    </tr>
                    <tr>
                        <td>07 – Relações Exteriores</td>
                        <td>211 – Relações Diplomáticas<br>212 – Cooperação Internacional</td>
                    </tr>
                    <tr>
                        <td>08 – Assistência Social</td>
                        <td>241 – Assistência ao Idoso<br>242 – Assistência ao Portador de Deficiência<br>243 – Assistência à Criança e ao Adolescente<br>244 – Assistência Comunitária</td>
                    </tr>
                    <tr>
                        <td>09 – Previdência Social</td>
                        <td>271 – Previdência Básica<br>272 – Previdência do Regime Estatutário<br>273 – Previdência Complementar<br>274 – Previdência Especial</td>
                    </tr>
                    <tr>
                        <td>10 – Saúde</td>
                        <td>301 – Atenção Básica<br>302 – Assistência Hospitalar e Ambulatorial<br>303 – Suporte Profilático e Terapêutico<br>304 – Vigilância Sanitária<br>305 – Vigilância Epidemiológica<br>306 – Alimentação e Nutrição</td>
                    </tr>
                    <tr>
                        <td>11 – Trabalho</td>
                        <td>331 – Proteção e Benefícios ao Trabalhador<br>332 – Relação de Trabalho<br>333 – Empregabilidade<br>334 – Fomento ao Trabalho</td>
                    </tr>
                    <tr>
                        <td>12 – Educação</td>
                        <td>361 – Ensino Fundamental<br>362 – Ensino Médio<br>363 – Ensino Profissional<br>364 – Ensino Superior<br>365 – Educação Infantil<br>366 – Educação de Jovens e Adultos<br>367 – Educação Especial</td>
                    </tr>
                    <tr>
                        <td>13 – Cultura</td>
                        <td>391 – Patrimônio Histórico, Artístico e Arqueológico<br>392 – Difusão Cultural</td>
                    </tr>
                    <tr>
                        <td>14 – Direitos da Cidadania</td>
                        <td>421 – Custódia e Reintegração Social<br>422 – Direitos Individuais, Coletivos e Difusos<br>423 – Assistência aos Povos Indígenas</td>
                    </tr>
                    <tr>
                        <td>15 – Urbanismo</td>
                        <td>451 – Infraestrutura Urbana<br>452 – Serviços Urbanos<br>453 – Transportes Coletivos Urbanos</td>
                    </tr>
                    <tr>
                        <td>16 – Habitação</td>
                        <td>481 – Habitação Rural<br>482 – Habitação Urbana</td>
                    </tr>
                    <tr>
                        <td>17 – Saneamento</td>
                        <td>511 – Saneamento Básico Rural<br>512 – Saneamento Básico Urbano</td>
                    </tr>
                    <tr>
                        <td>18 – Gestão Ambiental</td>
                        <td>541 – Preservação e Conservação Ambiental<br>542 – Controle Ambiental<br>543 – Recuperação de Áreas Degradadas<br>544 – Recursos Hídricos<br>545 – Meteorologia</td>
                    </tr>
                    <tr>
                        <td>19 – Ciência e Tecnologia</td>
                        <td>571 – Desenvolvimento Científico<br>572 – Desenvolvimento Tecnológico e Engenharia<br>573 – Difusão do Conhecimento Científico e Tecnológico</td>
                    </tr>
                    <tr>
                        <td>20 – Agricultura</td>
                        <td>601 – Promoção da Produção Vegetal<br>602 – Promoção da Produção Animal<br>603 – Defesa Sanitária Vegetal<br>604 – Defesa Sanitária Animal<br>605 – Abastecimento<br>606 – Extensão Rural<br>607 – Irrigação</td>
                    </tr>
                    <tr>
                        <td>21 – Organização Agrária</td>
                        <td>631 – Reforma Agrária<br>632 – Colonização</td>
                    </tr>
                    <tr>
                        <td>22 – Indústria</td>
                        <td>661 – Promoção Industrial<br>662 – Produção Industrial<br>663 – Mineração<br>664 – Propriedade Industrial<br>665 – Normalização e Qualidade</td>
                    </tr>
                    <tr>
                        <td>23 – Comércio e Serviços</td>
                        <td>691 – Promoção Comercial<br>692 – Comercialização<br>693 – Comércio Exterior<br>694 – Serviços Financeiros<br>695 – Turismo</td>
                    </tr>
                    <tr>
                        <td>24 – Comunicações</td>
                        <td>721 – Comunicações Postais<br>722 – Telecomunicações</td>
                    </tr>
                    <tr>
                        <td>25 – Energia</td>
                        <td>751 – Conservação de Energia<br>752 – Energia Elétrica<br>753 – Petróleo<br>754 – Álcool</td>
                    </tr>
                    <tr>
                        <td>26 – Transporte</td>
                        <td>781 – Transporte Aéreo<br>782 – Transporte Rodoviário<br>783 – Transporte Ferroviário<br>784 – Transporte Hidroviário<br>785 – Transportes Especiais</td>
                    </tr>
                    <tr>
                        <td>27 – Desporto e Lazer</td>
                        <td>811 – Desporto de Rendimento<br>812 – Desporto Comunitário<br>813 – Lazer</td>
                    </tr>
                    <tr>
                        <td>28 – Encargos Especiais</td>
                        <td>841 – Refinanciamento da Dívida Interna<br>842 – Refinanciamento da Dívida Externa<br>843 – Serviço da Dívida Interna<br>844 – Serviço da Dívida Externa<br>845 – Transferências<br>846 – Outros Encargos Especiais</td>
                    </tr>
                    </tbody>
                </b-table-simple>
                <p>
                    É importante observar que as subfunções podem ser usadas por funções diferentes daquelas a que estão vinculadas. Por exemplo, a função <b>Educação</b> (12) pode usar a subfunção <b>Outros Encargos Especiais</b> (846) para discriminar despesa com a contribuição patronal para o
                    <a href="https://www.gov.br/previdencia/pt-br/assuntos/outros/regime-proprio-rpps">RPPS</a> (Regime de Previdência dos Servidores Públicos).
                </p>
                <h4>Referências</h4>
                <ul>
                    <li>Contabilidade Púbica da Teoria à Prática. Inaldo Araújo e Daniel Arruda. 3a edição. Saraiva Uni. 2020.</li>
                    <li>Manual Siape – 010400 – GLOSSÁRIO. Disponível em: <a href="https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&view=article&id=1529:010400-glossario&catid=743&Itemid=700">https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&view=article&id=1529:010400-glossario&catid=743&Itemid=700</a>.</li>
                    <li>Orçamento – Glossário. Senado Federal. Disponível em: <a href="https://www12.senado.leg.br/orcamento/glossario">https://www12.senado.leg.br/orcamento/glossario</a>.</li>
                    <li>Portal da Transparência – Glossário. CONTROLADORIA-GERAL DA UNIÃO. Disponível em <a
                            href="http://www.portaltransparencia.gov.br/glossario">http://www.portaltransparencia.gov.br/glossario</a>.</li>
                </ul>
            </div>
            <div v-if="current == 3">
                <h4>Natureza da Despesa</h4>

                <p>O Art. 5<sup><u>o</u></sup>, § 7<sup><u>o</u></sup>, da <a rel="noreferrer noopener" href="http://www.planalto.gov.br/ccivil_03/leis/2002/L10524.htm" data-type="URL" data-id="http://www.planalto.gov.br/ccivil_03/leis/2002/L10524.htm" target="_blank">LEI N. 10.524, DE 25 DE JULHO DE 2002</a> define que a natureza da despesa pode ser:</p>

                <ul>
                    <li>
                        <strong>Financeira</strong> – extingue uma obrigação ou cria um direito, ambos de natureza financeira;
                    </li>
                    <li>
                        <strong>Primária obrigatória</strong> –  se refere a compromissos estabelecidos na legislação;
                    </li>
                    <li>
                        <strong>Primária discricionária</strong> – o gestor tem algum grau de decisão.
                    </li>
                </ul>

                <p>O anexo da LEI N. 10.524 mostra as ações que constituem obrigações constitucionais e legais da União. </p>

                <ol>
                    <li>Alimentação Escolar;</li>
                    <li>Assistência Financeira à Família Visando à Complementação de Renda Para Melhoria da Nutrição – Bolsa Alimentação;</li>
                    <li>Atendimento Ambulatorial, Emergencial e Hospitalar em Regime de Gestão Plena do Sistema Único de Saúde – SUS;</li>
                    <li>Atendimento Ambulatorial, Emergencial e Hospitalar Prestado pela Rede Cadastrada no Sistema Único de Saúde – SUS;</li>
                    <li>Atendimento Assistencial Básico com o Piso de Atenção Básica – PAB, Referente à Parte Fixa nos Municípios em Gestão Plena da Atenção Básica – SUS;</li>
                    <li>Atendimento à População com Medicamentos para Tratamento dos Portadores da Síndrome da Imunodeficiência Adquirida – AIDS e das Doenças Sexualmente Transmissíveis – DST;</li>
                    <li>Benefícios do Regime Geral da Previdência Social;</li>
                    <li>Concessão de Subvenção Econômica aos Produtores de Borracha Natural;</li>
                    <li>Concessão de Subvenção Econômica ao Preço do Óleo Diesel Consumido por Embarcações Pesqueiras Nacionais;</li>
                    <li>Contribuição à Previdência Privada;</li>
                    <li>Cota-Parte dos Estados e DF Exportadores na Arrecadação do IPI;</li>
                    <li>Dinheiro Direto na Escola – Fundescola;</li>
                    <li>Equalização de Preços e Taxas no Âmbito das Operações Oficiais de Crédito e Encargos Financeiros da União;</li>
                    <li>Fundo de Manutenção e Desenvolvimento do Ensino Fundamental e de Valorização do Magistério – Fundef Complementação;</li>
                    <li>Fundo Especial de Assistência Financeira aos Partidos Políticos (Fundo Partidário);</li>
                    <li>Garantia de Padrão Mínimo de Qualidade – Complementação da União ao Fundo de Manutenção e Desenvolvimento do Ensino Fundamental e de Valorização do Magistério;</li>
                    <li>Incentivo Financeiro a Municípios Habilitados à Parte Variável do Piso de Atenção Básica – PAB, para a Saúde da Família – SUS ;</li>
                    <li>Incentivo Financeiro a Municípios Habilitados à Parte Variável do Piso de Atenção Básica – PAB, para Assistência Farmacêutica Básica – Farmácia Básica – SUS;</li>
                    <li>Incentivo Financeiro a Municípios Habilitados à Parte Variável do Piso de Atenção Básica – PAB, para as Ações de Vigilância Sanitária – SUS;</li>
                    <li>Incentivo Financeiro a Municípios Habilitados à Parte Variável do Piso de Atenção Básica – PAB, para Ações de Prevenção e Controle das Doenças Transmissíveis – SUS;</li>
                    <li>Incentivo Financeiro a Municípios Habilitados à Parte Variável do Piso de Atenção Básica – PAB, para Ações de Combate às Carências Nutricionais – SUS;</li>
                    <li>Indenizações e Restituições relativas ao Programa de Garantia da Atividade Agropecuária – Proagro, incidentes a partir da vigência da Lei no 8.171, de 17 de janeiro de 1991;</li>
                    <li>Pagamento do Benefício Abono Salarial;</li>
                    <li>Pagamento de Benefício de Prestação Continuada à Pessoa Idosa – LOAS;</li>
                    <li>Pagamento de Benefício de Prestação Continuada à Pessoa Portadora de Deficiência – LOAS;</li>
                    <li>Pagamento do Seguro-Desemprego;</li>
                    <li>Pagamento do Seguro-Desemprego ao Pescador Artesanal;</li>
                    <li>Pagamento do Seguro-Desemprego ao Trabalhador Doméstico;</li>
                    <li>Participação em Programas Municipais de Garantia de Renda Mínima Associados a Ações Sócio-Educativas – Bolsa Escola;</li>
                    <li>Pessoal e Encargos Sociais;</li>
                    <li>Sentenças judiciais transitadas em julgado;</li>
                    <li>Serviço da dívida;</li>
                    <li>Transferências a Estados e Distrito Federal da Cota-Parte do Salário-Educação;</li>
                    <li>Transferências a Estados, Distrito Federal e Municípios para Compensação da Isenção do ICMS aos Estados Exportadores;</li>
                    <li>Transferências constitucionais e legais por repartição de receita;</li>
                    <li>Transferências da receita de concursos de prognósticos;</li>
                    <li>Auxílio-Alimentação;</li>
                    <li>Auxílio-transporte.</li>
                </ol>

                <p>Para identificar a natureza de uma despesa, basta verificar a ação a que está associada. A tabela abaixo mostra alguns exemplos usados no orçamento da UNIRIO: a ação com código 09HB está relacionada ao pagamento de plano da previdência dos servidores públicos, a ação com código 20TP é usada para pagamentos de salários dos servidores públicos da ativa e a ação com código 4002 é usada para indicar bolsas de estudo para os estudantes.</p>

                <b-table-simple bordered striped>
                    <caption>Exemplos de ações orçamentárias</caption>
                    <tbody>
                    <tr>
                        <th><strong>Ação</strong></th>
                        <th><strong>Descrição</strong></th>
                        <th><strong>Natureza</strong></th>
                    </tr>
                    <tr>
                        <td>09HB</td>
                        <td>CONTRIBUIÇÕES A ENTIDADES NACIONAIS SEM EXIGÊNCIA DE PROGRAMAÇÃO ESPECÍFICA FEDERAIS</td>
                        <td>Financeira</td>
                    </tr>
                    <tr>
                        <td>20TP</td>
                        <td>ATIVOS CIVIS DA UNIÃO</td>
                        <td>Primária obrigatória</td>
                    </tr>
                    <tr>
                        <td>4002</td>
                        <td>ASSISTÊNCIA AO ESTUDANTE DE ENSINO SUPERIOR</td>
                        <td>Primária Discricionária</td>
                    </tr>
                    </tbody>
                </b-table-simple>

                <h4>Referências</h4>

                <ul>
                    <li>Contabilidade Púbica da Teoria à Prática. Inaldo Araújo e Daniel Arruda. 3a edição. Saraiva Uni. 2020.</li>
                    <li>Manual SADIPEM. MINISTÉRIO DA ECONOMIA. Disponível em: <a rel="noreferrer noopener" href="https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&amp;view=article&amp;id=1567:020332-classificacoes-orcamentarias&amp;catid=749&amp;Itemid=376" target="_blank">https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&amp;view=article&amp;id=1567:020332-classificacoes-orcamentarias&amp;catid=749&amp;Itemid=376</a>.</li>
                </ul>

            </div>
            <div v-if="current == 4">
                <h4>Unidade</h4>
                <p>No Orçamento Público, as unidades são responsáveis pela administração  dos recursos alocados para a execução das atividades governamentais. Podemos destacar dois tipos: </p>

                <ul>
                    <li>
                        <strong>Unidade Gestora (UG)</strong> –  é o componente organizacional responsável pela execução do Orçamento autorizado.
                    </li>
                    <li>
                        <strong>Unidade Orçamentária (UO)</strong> – recebe dotações específicas para a realização de seus programas de trabalho e sobre os quais exerce o poder de disposição.
                    </li>
                </ul>

                <h4>Exemplo</h4>

                <ul>
                    <li>
                        A UNIRIO e o HUGG (Hospital Universitário Gaffrée e Guinle) são unidades orçamentárias, pois recebem recursos diretamente do Ministério da Educação. O código UO da UNIRIO é 26269 e o código UO do HUGG é 26391.
                    </li>
                    <li>
                        A UNIRIO possui duas unidades gestoras: a própria UNIRIO (código 154034) e o HUGG (código 154035). Isto significa que alguns recursos destinados à UNIRIO são repassados para o HUGG que deve prestar contas sobre a sua utilização à UNIRIO.
                    </li>
                </ul>

                <h4>Referências</h4>

                <ul>
                    <li>
                        Contabilidade Púbica da Teoria à Prática. Inaldo Araújo e Daniel Arruda. 3a edição. Saraiva Uni. 2020.
                    </li>
                    <li>
                        Manual Siape – 010400 – GLOSSÁRIO. Disponível em: <a rel="noreferrer noopener" href="https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&amp;view=article&amp;id=1529:010400-glossario&amp;catid=743&amp;Itemid=700" target="_blank">https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&amp;view=article&amp;id=1529:010400-glossario&amp;catid=743&amp;Itemid=700</a>.
                    </li>
                    <li>
                        Orçamento – Glossário. Senado Federal. Disponível em: <a rel="noreferrer noopener" href="https://www12.senado.leg.br/orcamento/glossario" target="_blank">https://www12.senado.leg.br/orcamento/glossario</a>.
                    </li>
                    <li>
                        Portal da Transparência – Glossário. CONTROLADORIA-GERAL DA UNIÃO. Disponível em <a rel="noreferrer noopener" href="http://www.portaltransparencia.gov.br/glossario" target="_blank">http://www.portaltransparencia.gov.br/glossario</a>.
                    </li>
                </ul>

            </div>
        </b-col>
    </b-row>
</template>

<script>
    import vueStickySidebar from "vue-sticky-sidebar";

    export default {
        name: "Glossario",
        components: {
            "vue-sticky-sidebar": vueStickySidebar
        },
        data: () => ({
            current: 1
        })
    }
</script>

<style lang="scss" scoped>
    caption {
        text-align: center;
    }

    .topics {
        p, li, td, th, caption {
            font-size: 0.9em;
        }
    }
</style>