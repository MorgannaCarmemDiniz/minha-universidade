<template>
    <b-row class="containerGlossario">
        <b-col sm="3">
            <vue-sticky-sidebar :topSpacing="30" class="sidebar" containerSelector=".containerGlossario" innerWrapperSelector='.sidebar__inner'>
                <b-nav pills vertical>
                    <b-nav-item @click="current = 1" :active="current == 1">Orçamento Público</b-nav-item>
                    <b-nav-item @click="current = 2" :active="current == 2">Receitas</b-nav-item>
                    <b-nav-item @click="current = 3" :active="current == 3">Despesas</b-nav-item>
                </b-nav>
            </vue-sticky-sidebar>
        </b-col>
        <b-col class="topics">
            <transition name="fade">
                <div v-if="current == 1" >

                <h4>Orçamento Público</h4>
                <p>Orçamento público é o instrumento utilizado pelo Governo Federal para estimar receitas e planejar as despesas, onde</p>

                <ul>
                    <li>
                        <strong>Receitas</strong> são os recursos financeiros (impostos, taxas, contribuições, etc) arrecadados;
                    </li>
                    <li>
                        <strong>Despesas</strong> são quaisquer gastos com aquisição de produtos e serviços, contratação de obras e compras governamentais.
                    </li>
                </ul>

                <p>No Brasil, três leis definem o planejamento e a execução das políticas públicas federais:</p>

                <ul>
                    <li>
                        <strong>PPA (Plano Plurianual)</strong> – Feito a cada quatro anos, estabelece as diretrizes, objetivos e metas  da administração pública. Portanto, compreende as ações pretendidas pelo governo a médio e a longo prazo.
                    </li>
                    <li>
                        <strong>LDO (Lei de Diretrizes Orçamentárias)</strong> –  Feito anualmente, serve para definir as políticas públicas e respectivas prioridades para o exercício seguinte. Portanto, define as prioridades governamentais para o próximo exercício.
                    </li>
                    <li>
                        <strong>LOA (Lei Orçamentária Anual)</strong> – Estima receitas e fixa as despesas  para o próximo exercício.
                    </li>
                </ul>

                <figure>
                    <img loading="lazy" width="800" height="275" src="./assets/leis.png" sizes="(max-width: 800px) 100vw, 800px">
                </figure>

                <p>A principal fonte de receita do orçamento público é o <strong>tributo</strong>, que pode ser:</p>

                <ul>
                    <li>
                        <strong>Impostos</strong> – são arrecadações feitas pelos entes federativos e destinados a manutenção da máquina pública.
                    </li>
                    <li>
                        <strong>Taxas </strong>– são valores pagos em troca de algum serviço específico.
                    </li>
                    <li>
                        <strong>Contribuições de Melhoria</strong> – é um valor cobrado quando há uma valorização imobiliária decorrente de uma obra pública.
                    </li>
                    <li>
                        <strong>Empréstimos Compulsórios </strong>– é um valor que pode ser cobrado pela União para atender a despesas extraordinárias ou no caso de investimento público de caráter urgente e de relevante interesse nacional.
                    </li>
                    <li>
                        <strong>Contribuições Especiais</strong> – é destinado ao financiamento da seguridade social, de programas que impliquem intervenção no domínio econômico, ou ao atendimento de interesses de classes profissionais ou categorias de pessoas.
                    </li>
                </ul>

                <p>As Receitas costumam ser classificadas em:</p>

                <ul>
                    <li>
                        <strong>Primárias ou não financeiras</strong> –  podem ser provenientes da arrecadação tributária ou do próprio patrimônio.
                    </li>
                    <li>
                        <strong>Financeiras</strong> – são oriundas de operações de crédito e alienação de ativos. Não há ganhos efetivos no patrimônio público.
                    </li>
                </ul>

                <figure>
                    <img width="800" height="433" src="./assets/receitas.png" sizes="(max-width: 800px) 100vw, 800px">
                    <figcaption>Fonte: http://www.portaltransparencia.gov.br/receitas (disponível em 12/05/21)</figcaption>
                </figure>

                <p>As Despesa podem ser classificadas em</p>

                <ul>
                    <li>
                        <strong>Primárias </strong>– são os gastos realizados para prover bens e serviços públicos à população e para o custear programas de governo e à realização de grandes investimentos.  Podem ter caráter <strong>discricionário</strong> (o governo tem algum grau de decisão) ou <strong>obrigatório</strong> (fixadas de acordo com a lei)
                    </li>
                    <li>
                        <strong>Financeiras ou não primárias</strong> – são resultantes do pagamento de uma dívida do governo ou da concessão de um empréstimo.
                    </li>
                </ul>

                <p>A <a rel="noreferrer noopener" href="http://www.planalto.gov.br/Ccivil_03/leis/L4320.htm" target="_blank">Lei 4.320/64</a> define três estágios para a realização das despesas previstas no orçamento público: </p>

                <ul>
                    <li>
                        <strong>Empenho</strong> – consiste na  reserva de valores monetários autorizados para atender um fim específico.
                    </li>
                    <li>
                        <strong>Liquidação</strong> – envolve todos os atos de verificação e conferência, desde a entrega do material ou a prestação do serviço até o reconhecimento da despesa.
                    </li>
                    <li>
                        <strong>Pagamento</strong> – determina que a despesa que foi liquidada seja paga.
                    </li>
                </ul>

                <figure>
                    <img width="800" height="652" src="./assets/despesas.png" sizes="(max-width: 800px) 100vw, 800px">
                    <figcaption>Fonte: http://www.portaltransparencia.gov.br/despesas (disponível em 12/05/21)</figcaption>
                </figure>

                <h3>Referências</h3>

                <ul>
                    <li>
                        Contabilidade Púbica da Teoria à Prática. Inaldo Araújo e Daniel Arruda. 3a edição. Saraiva Uni. 2020.
                    </li>
                    <li>
                        Manual Técnico do Orçamento – MTO. Disponível em https://www1.siop.planejamento.gov.br/mto/doku.php.
                    </li>
                    <li>
                        Orçamento – Glossário. Senado Federal. Disponível em: <a rel="noreferrer noopener" href="https://www12.senado.leg.br/orcamento/glossario" target="_blank">https://www12.senado.leg.br/orcamento/glossario</a>.
                    </li>
                    <li>
                        Portal da Transparência – Glossário. CONTROLADORIA-GERAL DA UNIÃO. Disponível em <a rel="noreferrer noopener" href="http://www.portaltransparencia.gov.br/glossario" target="_blank">http://www.portaltransparencia.gov.br/glossario</a>.
                    </li>
                </ul>

            </div>
            </transition>
            <transition name="fade">
                <div v-if="current == 2">
                <h4>Receitas</h4>

                <p>Para classificar a receita por natureza econômica usa-se oito dígitos.</p>

                <figure>
                    <img width="800" height="274" src="./assets/classificacaoReceitas.png" sizes="(max-width: 800px) 100vw, 800px">
                </figure>

                <h3>Categorias Econômicas</h3>

                <ul>
                    <li>
                        <strong>Correntes</strong> (valor 1) – São as receitas tributária, de contribuições, patrimonial, agropecuária, industrial, de serviços e outras e, ainda, as provenientes de recursos financeiros recebidos de outras pessoas de direito público ou privado, quando destinadas a atender despesas classificáveis em Despesas Correntes.
                    </li>
                    <li>
                        <strong>De Capital</strong> (valor 2) – São as receitas provenientes da realização de recursos financeiros oriundos de constituição de dívidas; da conversão, em espécie, de bens e direitos; os recursos recebidos de outras pessoas de direito público ou privado, destinados a atender despesas classificáveis em Despesas de Capital e, ainda, o <em>superávit</em> do Orçamento Corrente.
                    </li>
                </ul>

                <h3>Origem</h3>

                <p>A origem identifica a natureza da procedência das receitas quando ingressam no Orçamento Público. Portanto, é definida de acordo com a categoria econômica.</p>

                <h3>Espécie</h3>

                <p>É o nível de classificação vinculado à origem que permite qualificar com maior detalhe o fato gerador das receitas.</p>

                <p>A tabela abaixo mostra a ligação entre categorias econômicas, origem e espécie.</p>

                <figure>
                    <img width="800" height="693" src="./assets/categoriaEconomica.png" sizes="(max-width: 800px) 100vw, 800px">
                    <figcaption>Fonte: MTO 2022</figcaption>
                </figure>

                <h3>Rubrica</h3>

                <p>Agrega determinadas espécies de receitas cujas características próprias sejam semelhantes entre si; dessa forma, detalha a espécie, por meio da especificação dos recursos financeiros que lhe são correlatos.</p>

                <h3>Alínea</h3>

                <p>A alínea é o detalhamento da rubrica e exterioriza o “nome” da receita que receberá o registro pela entrada de recursos financeiros.</p>

                <h3>Subalínea</h3>

                <p>A subalínea constitui o nível mais analítico da receita, utilizado quando há necessidade de se detalhar a alínea com maior especificidade.</p>

                <h3>Exemplo</h3>

                <figure>
                    <img width="800" height="233" src="./assets/receitasExemplo.png" sizes="(max-width: 800px) 100vw, 800px">
                </figure>

                <h3>Referências</h3>

                <ul>
                    <li>
                        Contabilidade Púbica da Teoria à Prática. Inaldo Araújo e Daniel Arruda. 3a edição. Saraiva Uni. 2020.
                    </li>
                    <li>
                        Manual Técnico do Orçamento – MTO. Disponível em https://www1.siop.planejamento.gov.br/mto/doku.php.
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
            </transition>
            <transition name="fade">
                <div v-if="current == 3">
                <h4>Despesas</h4>

                <p>Para organizar e padronizar as informações do orçamento, faz-se uso de classificações que permitem visualizar as despesas de diferentes formas. Por exemplo:</p>

                <ol>
                    <li>
                        <strong>Classificação por Esfera</strong> – identifica a esfera orçamentária (Qual orçamento?)
                    </li>
                    <li>
                        <strong>Classificação Institucional</strong> – identifica o responsável pelo gasto (Quem é o responsável?)
                    </li>
                    <li>
                        <strong>Classificação Funcional</strong> – identifica a área do gasto (Em que área de despesa a ação governamental será realizada?)
                    </li>
                    <li>
                        <strong>Classificação Programática</strong> – identifica as realizações do governo e o resultado pretendido (Para que será executado?)
                    </li>
                    <li>
                        <strong>Classificação por Natureza da Despesa</strong> – identifica o que é obtido com a despesa e qual o efeito esperado (O que será obtido? O que será pago?)
                    </li>
                </ol>

                <p>As quatro primeiras classificações acima são qualitativas, enquanto a última classificação é quantitativa. Abaixo são fornecidas mais informações sobre cada uma das classificações aqui abordadas (veja <a rel="noreferrer noopener" href="https://www1.siop.planejamento.gov.br/mto/doku.php/mto2020:cap4" target="_blank">Classificação de Despesas, MTO</a>)</p>

                <h3>1. Classificação por Esfera</h3>

                <p>Esta classificação objetiva identificar se a despesa pertence ao Orçamento Fiscal, ao Orçamento da Seguridade Social ou Orçamento de Investimento das Empresas Estatais ( art. 165, § 5º, CF 88).</p>

                <figure class="tableFigure">
                    <table>
                        <thead>
                        <tr>
                            <th class="has-text-align-center" data-align="center">Código</th>
                            <th>Esfera</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="has-text-align-center" data-align="center">10</td>
                            <td>Orçamento Fiscal</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">20</td>
                            <td>Orçamento da Seguridade Social</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">30</td>
                            <td>Orçamento de Investimento</td>
                        </tr>
                        </tbody>
                    </table>
                    <figcaption>Esfera Orçamentária</figcaption>
                </figure>

                <p>O Orçamento Fiscal aborda as despesas dos Poderes da União, seus fundos, órgãos e entidades da administração direta e indireta. Portanto, as universidades públicas federais usam este código.</p>

                <h3>2. Classificação Institucional</h3>

                <p>Essa classificação usa um código de cinco dígitos: os dois primeiros identificam o órgão orçamentário e os três últimos identificam a unidade orçamentária. A Lei Orçamentária Anual consigna recursos para o órgão orçamentário que pode repassá-los para unidades orçamentárias (normalmente responsáveis pela execução orçamentária). Órgão orçamentário é o agrupamento de UOs.</p>

                <figure class="aligncenter size-large">
                    <img width="400" height="142" src="./assets/classificacaoInstitucional.png" sizes="(max-width: 400px) 100vw, 400px">
                </figure>

                <p>O primeiro dígito do Órgão Orçamentário evidencia o órgão.</p>

                <ul>
                    <li>
                        0 = legislativo
                    </li>
                    <li>
                        1 = Judiciário;
                    </li>
                    <li>
                        2 a 5 = Executivo.
                    </li>
                </ul>

                <p>O primeiro dígito da Unidade Orçamentária representa o tipo de administração:</p>

                <ul>
                    <li>
                        1 = Administração Direta;
                    </li>
                    <li>
                        2 ou 3 = Administração Indireta;
                    </li>
                    <li>
                        9 = Fundos
                    </li>
                </ul>

                <p>A tabela abaixo mostra alguns exemplos.</p>

                <figure class="tableFigure">
                    <table>
                        <tbody>
                        <tr>
                            <td class="has-text-align-center" data-align="center"><strong>Código</strong></td>
                            <td><strong>Órgão/Unidade</strong></td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">01000</td>
                            <td>Câmara dos Deputados</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">01901</td>
                            <td>Fundo Rotativo da Câmara dos Deputados</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">10000</td>
                            <td>Supremo Tribunal Federal</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">11000</td>
                            <td>Supremo Tribunal de Justiça</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">15102</td>
                            <td>Tribunal Regional do Trabalho da 1ª Região -Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">20000</td>
                            <td>Presidência da República</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">26000</td>
                            <td>Ministério da Educação</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">26105</td>
                            <td>Instituto Benjamin Constant</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">26269</td>
                            <td>Universidade Federal do Estado do Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">26391</td>
                            <td>Hospital Universitário Gaffree e Guinle</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">34000</td>
                            <td>Ministério Público da União</td>
                        </tr>
                        <tr>
                            <td class="has-text-align-center" data-align="center">34104</td>
                            <td>Ministério Público do Trabalho</td>
                        </tr>
                        </tbody>
                    </table>
                    <figcaption>Classificação Institucional</figcaption>
                </figure>

                <p>A lista com a classificação institucional da despesa pode ser encontrada no <a rel="noreferrer noopener" href="https://www1.siop.planejamento.gov.br/mto/doku.php" target="_blank">MANUAL TÉCNICO DE ORÇAMENTO (MTO)</a>.</p>

                <h3>3. Classificação Funcional</h3>

                <p>Essa classificação é usada para identificar a área  governamental de uma despesa do Orçamento Público.  O código usado nesta classificação é composto por cinco dígitos:</p>

                <ul>
                    <li>
                        Os dois primeiros dígitos são reservados à função que corresponde ao maior nível de agregação de despesas (reflete a competência institucional do órgão);
                    </li>
                    <li>
                        Os três últimos dígitos são reservados para a subfunção que corresponde a um subconjunto de despesas de uma função (evidencia a natureza da atuação governamental).
                    </li>
                </ul>

                <figure>
                    <img width="280" height="142" src="./assets/classificacaoFuncional.png">
                </figure>

                <p>As funções e subfunções do Orçamento Público estão definidas na <a rel="noreferrer noopener" href="https://www.fnde.gov.br/index.php/acesso-a-informacao/institucional/legislacao/item/3474-portaria-mpog-n%C2%BA-42-de-14-de-abril-de-1999" target="_blank">Portaria MPOG nº 42, de 14 de abril de 1999</a>.</p>

                <figure class="tableFigure striped">
                    <table>
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
                    </table>
                </figure>

                <p>É importante observar que as subfunções podem ser usadas por funções diferentes daquelas a que estão vinculadas. Por exemplo, a função <strong>Educação</strong> (12) pode usar a subfunção <strong>Outros Encargos Especiais</strong> (846) para discriminar despesa com a contribuição patronal para o <a rel="noreferrer noopener" href="https://www.gov.br/previdencia/pt-br/assuntos/outros/regime-proprio-rpps" data-type="URL" data-id="https://www.gov.br/previdencia/pt-br/assuntos/outros/regime-proprio-rpps" target="_blank">RPPS</a> (Regime de Previdência dos Servidores Públicos).</p>

                <h3>4. Classificação Programática</h3>

                <p>O código desta classificação é composto de 12 dígitos divididos em 3 grupos:</p>

                <ul>
                    <li>
                        <strong>Programa</strong> (do 1º ao 4º dígitos) – identifica a solução adotada para resolver um problema.
                    </li>
                    <li>
                        <strong>Ação</strong> (do 5º ao 8º dígito) – corresponde a instrumentos usados para a realização do programa e pode ser <strong>projeto</strong> (utilizado para alcançar o objetivo de um programa), <strong>atividade</strong> (conjunto de operações que se realizam de modo contínuo e permanente) ou <strong>operação especial</strong> (despesa que não resulta um produto e não gera contraprestação direta sob a forma de bens ou serviços). O tipo de ação é indicado pelo primeiro dígito do código.
                    </li>
                </ul>

                <figure class="tableFigure">
                    <table>
                        <tbody>
                        <tr>
                            <td data-align="center"><strong>1º Dígito</strong></td>
                            <td><strong>Tipo de Ação</strong></td>
                        </tr>
                        <tr>
                            <td data-align="center">1, 3, 5 ou 7</td>
                            <td>Projeto</td>
                        </tr>
                        <tr>
                            <td data-align="center">2, 4 , 6 ou 8</td>
                            <td>Atividade</td>
                        </tr>
                        <tr>
                            <td data-align="center">0</td>
                            <td>Operação especial</td>
                        </tr>
                        </tbody>
                    </table>
                </figure>

                <ul>
                    <li>
                        <strong>Subtítulo </strong>(do 9º ao 12º dígito) – definido apenas nas leis de diretrizes orçamentárias e é exigido apenas nos orçamentos da União.
                    </li>
                </ul>

                <figure>
                    <img width="420" height="195" src="./assets/classificacaoProgramatica.png" sizes="(max-width: 420px) 100vw, 420px">
                </figure>

                <p>Abaixo são apresentados alguns exemplos.</p>

                <figure>
                    <img width="800" height="274" src="./assets/classificacaoProgramaticaEx1.png" sizes="(max-width: 800px) 100vw, 800px">
                </figure>

                <figure>
                    <img width="800" height="266" src="./assets/classificacaoProgramaticaEx3.png" sizes="(max-width: 800px) 100vw, 800px">
                </figure>

                <figure>
                    <img width="800" height="262" src="./assets/classificacaoProgramaticaEx2.png" sizes="(max-width: 800px) 100vw, 800px">
                </figure>

                <h3>5.Classificação por Natureza da Despesa</h3>

                <p>A <a href="https://www.fnde.gov.br/index.php/acesso-a-informacao/institucional/legislacao/item/3481-portaria-interministerial-n%C2%BA-163-de-04-de-maio-de-2001" target="_blank" rel="noreferrer noopener">Portaria Interministerial nº 163</a>, de 04 de maio de 2001, define a forma como as despesas devem ser nomeadas no Orçamento Público.</p>

                <p>“<em>Art. 5º Em decorrência do disposto no art. 3o a estrutura da natureza da despesa a ser observada na execução orçamentária de todas as esferas de Governo será “c.g.mm.ee.dd”, onde:</em></p>

                <p><em>a. “c” representa a categoria econômica;<br>b. “g” o grupo de natureza da despesa;<br>c. “mm” a modalidade de aplicação;<br>d. “ee” o elemento de despesa; e<br>e. “dd” o desdobramento, facultativo, do elemento de despesa.</em>“</p>

                <p>Portanto, a natureza da despesa é representada por  um código de oito dígitos.</p>

                <figure>
                    <img width="800" height="153" src="./assets/natureza.png" sizes="(max-width: 800px) 100vw, 800px">
                </figure>

                <h4>Categoria Econômica</h4>

                <p>Indica se a despesa contribui para a formação ou aquisição de um bem de capital.</p>

                <p>3 – Despesa Corrente<br>4 – Despesa de Capital</p>

                <h4>Grupo de Natureza de Despesa</h4>

                <p>Agrega elementos de despesa com as mesmas características quanto ao objeto de gasto. </p>

                <p>1 – Pessoal e Encargos Sociais<br>2 – Juros e Encargos da Dívida<br>3 – Outras Despesas Correntes<br>4 – Investimentos<br>5 – Inversões Financeiras<br>6 – Amortização da Dívida<br>9 – Reserva de Contingência</p>

                <h4>Modalidades de Aplicação</h4>

                <p>Indica se os recursos são aplicados diretamente pela unidade detentora do crédito.</p>

                <p>20 – Transferências à União<br>30 – Transferências aos Estados e ao DF<br>40 a 46 – Transferências aos Municípios<br>50 – Transferências a instituições privadas sem fins lucrativos<br>60 – Transferências a instituições privadas com fins lucrativos<br>67 – Execução de contrato de Parcerias Público-Privada (PPP)<br>70 a 76 – Transferências a instituições multigovernamentais<br>80 – Transferências ao exterior<br>90 a 96- Aplicações Diretas<br>99 – A Definir</p>

                <h4>Elementos de Despesa</h4>

                <p>Indica os objetos de gasto.</p>

                <p>01 – Aposentadorias do RPPS, Reserva Remunerada e Reformas dos Militares<br>03 – Pensões do RPPS e do militar<br>04 – Contratação por Tempo Determinado<br>05 – Outros Benefícios Previdenciários do servidor ou do militar<br>06 – Benefício Mensal ao Deficiente e ao Idoso<br>07 – Contribuição a Entidades Fechadas de Previdência<br>08 – Outros Benefícios Assistenciais do servidor e do militar<br>10 – Seguro Desemprego e Abono Salarial<br>11 – Vencimentos e Vantagens Fixas – Pessoal Civil<br>12 – Vencimentos e Vantagens Fixas – Pessoal Militar<br>13 – Obrigações Patronais<br>14 – Diárias – Civil<br>15 – Diárias – Militar<br>16 – Outras Despesas Variáveis – Pessoal Civil<br>17 – Outras Despesas Variáveis – Pessoal Militar<br>18 – Auxílio Financeiro a Estudantes<br>19 – Auxílio-Fardamento<br>20 – Auxílio Financeiro a Pesquisadores<br>21 – Juros sobre a Dívida por Contrato<br>22 – Outros Encargos sobre a Dívida por Contrato<br>23 – Juros, Deságios e Descontos da Dívida Mobiliária<br>24 – Outros Encargos sobre a Dívida Mobiliária<br>25 – Encargos sobre Operações de Crédito por Antecipação da Receita<br>26 – Obrigações decorrentes de Política Monetária<br>27 – Encargos pela Honra de Avais, Garantias, Seguros e Similares<br>28 – Remuneração de Cotas de Fundos Autárquicos<br>29 – Distribuição de Resultado de Empresas Estatais Dependentes<br>30 – Material de Consumo<br>31 – Premiações Culturais, Artísticas, Científicas, Desportivas e Outras<br>32 – Material, Bem ou Serviço para Distribuição Gratuita<br>33 – Passagens e Despesas com Locomoção<br>34 – Outras Despesas de Pessoal decorrentes de Contratos de Terceirização<br>35 – Serviços de Consultoria<br>36 – Outros Serviços de Terceiros – Pessoa Física<br>37 – Locação de Mão-de-Obra<br>38 – Arrendamento Mercantil<br>39 – Outros Serviços de Terceiros – Pessoa Jurídica<br>41 – Contribuições<br>42 – Auxílios<br>43 – Subvenções Sociais<br>45 – Subvenções Econômicas<br>46 – Auxílio-Alimentação<br>47 – Obrigações Tributárias e Contributivas<br>48 – Outros Auxílios Financeiros a Pessoas Físicas<br>49 – Auxílio-Transporte<br>51 – Obras e Instalações<br>52 – Equipamentos e Material Permanente<br>53 – Aposentadorias do RGPS – Área Rural<br>54 – Aposentadorias do RGPS – Área Urbana<br>55 – Pensões do RGPS – Área Rural<br>56 – Pensões do RGPS – Área Urbana<br>57 – Outros Benefícios do RGPS – Área Rural<br>58 – Outros Benefícios do RGPS – Área Urbana<br>59 – Pensões Especiais<br>61 – Aquisição de Imóveis<br>62 – Aquisição de Produtos para Revenda<br>63 – Aquisição de Títulos de Crédito<br>64 – Aquisição de Títulos Representativos de Capital já Integralizado<br>65 – Constituição ou Aumento de Capital de Empresas<br>66 – Concessão de Empréstimos e Financiamentos<br>67 – Depósitos Compulsórios<br>70 – Rateio pela Participação em Consórcio Público<br>71 – Principal da Dívida Contratual Resgatado<br>72 – Principal da Dívida Mobiliária Resgatado<br>73 – Correção Monetária ou Cambial da Dívida Contratual Resgatada<br>74 – Correção Monetária ou Cambial da Dívida Mobiliária Resgatada<br>75 – Correção Monetária da Dívida de Operações de Crédito por Antecipação da Receita<br>76 – Principal Corrigido da Dívida Mobiliária Refinanciado<br>77 – Principal Corrigido da Dívida Contratual Refinanciado<br>81 – Distribuição Constitucional ou Legal de Receitas<br>82 – Aporte de Recursos pelo Parceiro Público em Favor do Parceiro Privado Decorrente de Contrato de Parceria Público-Privada – PPP<br>83 – Despesas Decorrentes de Contrato de Parceria Público-Privada – PPP, exceto Subvenções Econômicas, Aporte e Fundo Garantidor<br>84 – Despesas Decorrentes da Participação em Fundos, Organismos, ou Entidades Assemelhadas, Nacionais e Internacionais<br>91 – Sentenças Judiciais<br>92 – Despesas de Exercícios Anteriores<br>93 – Indenizações e Restituições<br>94 – Indenizações e Restituições Trabalhistas<br>95 – Indenização pela Execução de Trabalhos de Campo<br>96 – Ressarcimento de Despesas de Pessoal Requisitado<br>97 – Aporte para Cobertura do Déficit Atuarial do RPPS<br>98 – Compensações ao RGPS<br>99 – A Classificar</p>

                <h4>Subelemento</h4>

                <p>Caso o gestor precise desdobrar ainda mais o elemento de despesa, ele pode utilizar o subelemento para complementação final. Mas é um campo facultativo (quando não definido, usa-se zero).</p>

                <h4>Exemplo</h4>

                <p>O código 3.3.90.18.00 corresponde ao Auxílio Financeiro a Estudantes. É possível usar o subelemento para especificar o tipo de auxílio. Por exemplo, 3.3.90.18.01  é BOLSAS DE ESTUDO NO PAIS e 3.3.90.18.04 é AUXILIOS PARA DESENVOLVIMENTO DE ESTUDOS E PESQUISAS.</p>

                <figure>
                    <img width="800" height="267" src="./assets/despesa.png" sizes="(max-width: 800px) 100vw, 800px">
                </figure>

                <p>O Anexo III da <a href="https://www.fnde.gov.br/index.php/acesso-a-informacao/institucional/legislacao/item/3481-portaria-interministerial-n%C2%BA-163-de-04-de-maio-de-2001" data-type="URL" data-id="https://www.fnde.gov.br/index.php/acesso-a-informacao/institucional/legislacao/item/3481-portaria-interministerial-n%C2%BA-163-de-04-de-maio-de-2001" target="_blank" rel="noreferrer noopener">Portaria Interministerial nº 163</a> mostra a lista dos códigos e descrições das naturezas de despesas existentes no Orçamento Público.</p>

                <h3>Outra Classificação</h3>

                <p>O Art. 5<sup><u>o</u></sup>, § 7<sup><u>o</u></sup>, da <a href="http://www.planalto.gov.br/ccivil_03/leis/2002/L10524.htm" target="_blank" rel="noreferrer noopener">LEI N. 10.524</a>, DE 25 DE JULHO DE 2002 define que uma despesa pode ser:</p>

                <ul>
                    <li>
                        <strong>Financeira</strong> – extingue uma obrigação ou cria um direito, ambos de natureza financeira;
                    </li>
                    <li>
                        <strong>Primária obrigatória</strong> –  se refere a compromissos estabelecidos na legislação (O anexo da LEI N. 10.524 mostra as ações que constituem obrigações constitucionais e legais da União);
                    </li>
                    <li>
                        <strong>Primária discricionária</strong> – o gestor tem algum grau de decisão.
                    </li>
                </ul>

                <p>Para identificar o tipo de uma despesa, pode-se verificar a ação a que está associada. A tabela abaixo mostra alguns exemplos usados no orçamento da UNIRIO: a ação com código 09HB está relacionada ao pagamento de plano da previdência dos servidores públicos, a ação com código 20TP é usada para pagamentos de salários dos servidores públicos da ativa e a ação com código 4002 é usada para indicar bolsas de estudo para os estudantes.</p>

                <figure class="tableFigure">
                    <table>
                        <tbody>
                        <tr>
                            <td><strong>Ação</strong></td>
                            <td><strong>Descrição</strong></td>
                            <td><strong>Tipo</strong></td>
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
                    </table>
                    <figcaption>Exemplos de ações orçamentárias</figcaption>
                </figure>

                <h3>Referências</h3>

                <ul>
                    <li>
                        Contabilidade Púbica da Teoria à Prática. Inaldo Araújo e Daniel Arruda. 3a edição. Saraiva Uni. 2020.
                    </li>
                    <li>
                        Manual Técnico do Orçamento – MTO. Disponível em https://www1.siop.planejamento.gov.br/mto/doku.php.
                    </li>
                    <li>
                        Manual Siape – 010400 – GLOSSÁRIO. Disponível em: <a rel="noreferrer noopener" href="https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&amp;view=article&amp;id=1529:010400-glossario&amp;catid=743&amp;Itemid=700" target="_blank">https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&amp;view=article&amp;id=1529:010400-glossario&amp;catid=743&amp;Itemid=700</a>.
                    </li>
                    <li>
                        Manual SADIPEM. MINISTÉRIO DA ECONOMIA. Disponível em: <a rel="noreferrer noopener" href="https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&amp;view=article&amp;id=1567:020332-classificacoes-orcamentarias&amp;catid=749&amp;Itemid=376" target="_blank">https://conteudo.tesouro.gov.br/manuais/index.php?option=com_content&amp;view=article&amp;id=1567:020332-classificacoes-orcamentarias&amp;catid=749&amp;Itemid=376</a>.
                    </li>
                    <li>
                        Orçamento – Glossário. Senado Federal. Disponível em: <a rel="noreferrer noopener" href="https://www12.senado.leg.br/orcamento/glossario" target="_blank">https://www12.senado.leg.br/orcamento/glossario</a>.
                    </li>
                    <li>
                        Portal da Transparência – Glossário. CONTROLADORIA-GERAL DA UNIÃO. Disponível em <a rel="noreferrer noopener" href="http://www.portaltransparencia.gov.br/glossario" target="_blank">http://www.portaltransparencia.gov.br/glossario</a>.
                    </li>
                </ul>

            </div>
            </transition>
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
    caption, figcaption {
        text-align: center;
    }

    .topics {

        p, li, td, th, caption, figcaption {
            font-size: 0.9em;
        }
    }

    td, th {
        padding: .5em;
        border: 1px solid;
        word-break: normal;
    }

    .tableFigure {
        display: table;
    }

    .striped tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .fade-enter-active {
        transition: opacity 0.3s;
    }
    .fade-enter {
        opacity: 0;
    }

</style>