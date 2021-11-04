<template>
    <div class="wrap">
        <div class="background">
        </div>
        <div class="content firstContent">
            <div class="contentInfo text-left">
                <h2>Minha Universidade</h2>
                <h3>
                    Transparência nas Universidades Públicas Federais
                </h3>
            </div>
            <div class="contentIcon">
                <HomeIcon/>
            </div>
        </div>
        <div class="content secondContent">
            <div class="contentInfo text-left" v-animate-onscroll="'fadeInRight'">
                <h4>O Projeto</h4>
                <p>
                    Este projeto tem por objetivo definir um padrão de transparência para as universidades públicas de
                    acordo com a Lei 12.527 (Lei de Acesso à Informação - LAI) . Atualmente as universidades públicas
                    disponibilizam parte das informações exigidas de forma fragmentada (espalhadas em vários locais) e,
                    muitas vezes, de forma incompleta. O tema inicial de estudo deste projeto é o orçamento das 69
                    universidades federais públicas.
                </p>
                <router-link to="/universidades">
                    Lista de Universidades
                </router-link>
            </div>
            <div class="contentLogo" v-animate-onscroll="'fadeInUp'">
                <Logo/>
            </div>
            <div class="contentInfo" v-animate-onscroll="'fadeInLeft'">
                <h4>Os Dados</h4>
                <p>
                    Este projeto usa, principalmente, como fonte de dados para estudo e análise, os sites do Portal da
                    Transparência, Siga Brasil, o projeto DATAUNIRIO e os sites das universidades federais.
                </p>
                <a target="_blank" href="http://www.portaltransparencia.gov.br">
                    Portal da Transparência
                    <font-awesome-icon class="faIcon" icon="external-link-alt"/>
                </a>
                <a target="_blank" href="https://www12.senado.leg.br/orcamento/sigabrasil">
                    Siga Brasil
                    <font-awesome-icon class="faIcon" icon="external-link-alt"/>
                </a>
                <a target="_blank" href="https://duttross.shinyapps.io/transparencia1/">
                    DATAUNIRIO
                    <font-awesome-icon class="faIcon" icon="external-link-alt"/>
                </a>
            </div>
        </div>
        <div class="content thirdContent" v-animate-onscroll="'fadeInUp'">
            <div class="contentInfo">
                <h4>As Universidades</h4>
                <p>A tabela abaixo mostra a lista das 69 Universidades Públicas Federais que existem no Brasil. O projeto
                    Minha Universidade tem como objetivo trazer eventualmente os dados orçamentários de todas as
                    instituições listadas. Ao clicar no código institucional, você poderá ver os dados orçamentários do <a
                            href="http://www.portaltransparencia.gov.br/">Portal da Transparência</a>. Ao clicar
                    no nome da universidade, você poderá ver o site oficial da instituição.</p>
                <div class="tableFixed">
                    <table class="styledTable">
                        <thead>
                        <tr>
                            <th>
                                Número
                            </th>
                            <th>
                                Código Inst.
                            </th>
                            <th>
                                Nome
                            </th>
                            <th>
                                Sigla
                            </th>
                            <th>
                                UF
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26230" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26230" target="_blank"
                                    rel="noreferrer noopener">26230</a></td>
                            <td><a rel="noreferrer noopener" href="https://portais.univasf.edu.br/"
                                   target="_blank">Universidade Federal do Vale do São Francisco</a></td>
                            <td>Univasf</td>
                            <td>PE, BA, PI</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26231" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26231" target="_blank"
                                    rel="noreferrer noopener">26231</a></td>
                            <td><a href="https://ufal.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Alagoas</a></td>
                            <td>UFAL</td>
                            <td>AL</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26232" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26232" target="_blank"
                                    rel="noreferrer noopener">26232</a></td>
                            <td><a href="https://www.ufba.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal da Bahia</a></td>
                            <td>UFBA</td>
                            <td>BA</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26233" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26233" target="_blank"
                                    rel="noreferrer noopener">26233</a></td>
                            <td><a href="http://www.ufc.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Ceará</a></td>
                            <td>UFC</td>
                            <td>CE</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26234" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26234" target="_blank"
                                    rel="noreferrer noopener">26234</a></td>
                            <td><a href="https://www.ufes.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Espírito Santo</a></td>
                            <td>UFES</td>
                            <td>ES</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26235" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26235" target="_blank"
                                    rel="noreferrer noopener">26235</a></td>
                            <td><a href="https://www.ufg.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Goiás</a></td>
                            <td>UFG</td>
                            <td>GO</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26236" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26236" target="_blank"
                                    rel="noreferrer noopener">26236</a></td>
                            <td><a href="http://www.uff.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal Fluminense</a></td>
                            <td>UFF</td>
                            <td>RJ</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26237" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26237" target="_blank"
                                    rel="noreferrer noopener">26237</a></td>
                            <td><a href="https://www2.ufjf.br/ufjf/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Juiz de Fora</a></td>
                            <td>UFJF</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26238" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26238" target="_blank"
                                    rel="noreferrer noopener">26238</a></td>
                            <td><a href="https://ufmg.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Minas Gerais</a></td>
                            <td>UFMG</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26239" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26239" target="_blank"
                                    rel="noreferrer noopener">26239</a></td>
                            <td><a href="https://portal.ufpa.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Pará</a></td>
                            <td>UFPA</td>
                            <td>PA</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26240" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26240" target="_blank"
                                    rel="noreferrer noopener">26240</a></td>
                            <td><a href="https://www.ufpb.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal da Paraíba</a></td>
                            <td>UFPB</td>
                            <td>PB</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26241" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26241" target="_blank"
                                    rel="noreferrer noopener">26241</a></td>
                            <td><a href="https://www.ufpr.br/portalufpr/" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal do Paraná</a></td>
                            <td>UFPR</td>
                            <td>PR</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26242" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26242" target="_blank"
                                    rel="noreferrer noopener">26242</a></td>
                            <td><a href="https://www.ufpe.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Pernambuco</a></td>
                            <td>UFPE</td>
                            <td>PE</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26243" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26243" target="_blank"
                                    rel="noreferrer noopener">26243</a></td>
                            <td><a href="https://www.ufrn.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Rio Grande do Norte</a></td>
                            <td>UFRN</td>
                            <td>RN</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26244" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26244" target="_blank"
                                    rel="noreferrer noopener">26244</a></td>
                            <td><a href="http://www.ufrgs.br/ufrgs/inicial" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal do Rio Grande do Sul</a></td>
                            <td>UFRS</td>
                            <td>RS</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26245" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26245" target="_blank"
                                    rel="noreferrer noopener">26245</a></td>
                            <td><a href="https://ufrj.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Rio de Janeiro</a></td>
                            <td>UFRJ</td>
                            <td>RJ</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26246" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26246" target="_blank"
                                    rel="noreferrer noopener">26246</a></td>
                            <td><a href="https://ufsc.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Santa Catarina</a></td>
                            <td>UFSC</td>
                            <td>SC</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26247" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26247" target="_blank"
                                    rel="noreferrer noopener">26247</a></td>
                            <td><a href="https://www.ufsm.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Santa Maria</a></td>
                            <td>UFSM</td>
                            <td>RS</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26248" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26248" target="_blank"
                                    rel="noreferrer noopener">26248</a></td>
                            <td><a href="http://www.ufrpe.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal Rural de Pernambuco</a></td>
                            <td>UFRPE</td>
                            <td>PE</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26249" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26249" target="_blank"
                                    rel="noreferrer noopener">26249</a></td>
                            <td><a href="https://portal.ufrrj.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal Rural do Rio de Janeiro</a></td>
                            <td>UFRRJ</td>
                            <td>RJ</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26250" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26250" target="_blank"
                                    rel="noreferrer noopener">26250</a></td>
                            <td><a rel="noreferrer noopener" href="https://ufrr.br/" target="_blank">Universidade
                                Federal de Roraima</a></td>
                            <td>UFRR</td>
                            <td>RR</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26251" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26251" target="_blank"
                                    rel="noreferrer noopener">26251</a></td>
                            <td><a rel="noreferrer noopener" href="https://ww2.uft.edu.br//" target="_blank">Universidade
                                Federal do Tocantins</a></td>
                            <td>UFT</td>
                            <td>TO</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26252" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26252" target="_blank"
                                    rel="noreferrer noopener">26252</a></td>
                            <td><a href="https://portal.ufcg.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Campina Grande</a></td>
                            <td>UFCG</td>
                            <td>PB</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26253" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26253" target="_blank"
                                    rel="noreferrer noopener">26253</a></td>
                            <td><a href="https://novo.ufra.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal Rural da Amazônia</a></td>
                            <td>UFRA</td>
                            <td>AM</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26254" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26254" target="_blank"
                                    rel="noreferrer noopener">26254</a></td>
                            <td><a href="http://www.uftm.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Triângulo Mineiro</a></td>
                            <td>UFTM</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26255" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26255" target="_blank"
                                    rel="noreferrer noopener">26255</a></td>
                            <td><a href="http://portal.ufvjm.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal dos Vales do Jequitinhonha e Mucuri</a></td>
                            <td>UFVJM</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26258" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26258" target="_blank"
                                    rel="noreferrer noopener">26258</a></td>
                            <td><a href="http://www.utfpr.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Tecnológica Federal do Paraná</a></td>
                            <td>UTFPR</td>
                            <td>PR</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26260" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26260" target="_blank"
                                    rel="noreferrer noopener">26260</a></td>
                            <td><a href="https://www.unifal-mg.edu.br/portal/" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal de Alfenas</a></td>
                            <td>UNIFAL</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26261" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26261" target="_blank"
                                    rel="noreferrer noopener">26261</a></td>
                            <td><a href="https://unifei.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Itajubá</a></td>
                            <td>UNIFEI</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26262" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26262" target="_blank"
                                    rel="noreferrer noopener">26262</a></td>
                            <td><a href="https://www.unifesp.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de São Paulo</a></td>
                            <td>UNIFESP</td>
                            <td>SP</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26263" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26263" target="_blank"
                                    rel="noreferrer noopener">26263</a></td>
                            <td><a href="https://ufla.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Lavras</a></td>
                            <td>UFLA</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26264" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26264" target="_blank"
                                    rel="noreferrer noopener">26264</a></td>
                            <td><a href="https://ufersa.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal Rural do Semi-Árido</a></td>
                            <td>UFERSA</td>
                            <td>RN</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26266" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26266" target="_blank"
                                    rel="noreferrer noopener">26266</a></td>
                            <td><a href="https://unipampa.edu.br/portal/" target="_blank"
                                   rel="noreferrer noopener">Fundação Universidade Federal do Pampa</a></td>
                            <td>UNIPAMPA</td>
                            <td>RS</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26267" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26267" target="_blank"
                                    rel="noreferrer noopener">26267</a></td>
                            <td><a href="https://portal.unila.edu.br/" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal da Integração
                                Latino-Americana</a></td>
                            <td>UNILA</td>
                            <td>PR</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26268" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26268" target="_blank"
                                    rel="noreferrer noopener">26268</a></td>
                            <td><a href="https://www.unir.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Rondônia</a></td>
                            <td>UNIR</td>
                            <td>RO</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26269" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26269" target="_blank"
                                    rel="noreferrer noopener">26269</a></td>
                            <td><a href="http://www.unirio.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Estado do Rio de Janeiro</a></td>
                            <td>UNIRIO</td>
                            <td>RJ</td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26270" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26270" target="_blank"
                                    rel="noreferrer noopener">26270</a></td>
                            <td><a href="https://ufam.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Amazonas</a></td>
                            <td>UFAM</td>
                            <td>AM</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26271" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26271" target="_blank"
                                    rel="noreferrer noopener">26271</a></td>
                            <td><a href="https://www.unb.br/" target="_blank" rel="noreferrer noopener">Universidade
                                de Brasília</a></td>
                            <td>UNB</td>
                            <td>DF</td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26272" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26272" target="_blank"
                                    rel="noreferrer noopener">26272</a></td>
                            <td><a href="https://portais.ufma.br/PortalUfma/" data-type="URL"
                                   data-id="https://portais.ufma.br/PortalUfma/" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal do Maranhão</a></td>
                            <td>UFMA</td>
                            <td>MA</td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26273" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26273" target="_blank"
                                    rel="noreferrer noopener">26273</a></td>
                            <td><a href="https://www.furg.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Rio Grande</a></td>
                            <td>FURG</td>
                            <td>RS</td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26274" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26274" target="_blank"
                                    rel="noreferrer noopener">26274</a></td>
                            <td><a href="http://www.ufu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Uberlândia</a></td>
                            <td>UFU</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26275" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26275" target="_blank"
                                    rel="noreferrer noopener">26275</a></td>
                            <td><a href="http://www.ufac.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Acre</a></td>
                            <td>UFAC</td>
                            <td>AC</td>
                        </tr>
                        <tr>
                            <td>43</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26276" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26276" target="_blank"
                                    rel="noreferrer noopener">26276</a></td>
                            <td><a rel="noreferrer noopener" href="https://www.ufmt.br/" target="_blank">Universidade
                                Federal de Mato Grosso</a></td>
                            <td>UFMT</td>
                            <td>MT</td>
                        </tr>
                        <tr>
                            <td>44</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26277" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26277" target="_blank"
                                    rel="noreferrer noopener">26277</a></td>
                            <td><a href="https://ufop.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Ouro Preto</a></td>
                            <td>UFOP</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>45</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26278" target="_blank"
                                    rel="noreferrer noopener">26278</a></td>
                            <td><a rel="noreferrer noopener" href="https://portal.ufpel.edu.br/" data-type="URL"
                                   data-id="https://portal.ufpel.edu.br/" target="_blank">Universidade Federal
                                de Pelotas</a></td>
                            <td>UFPel</td>
                            <td>RS</td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26279" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26279" target="_blank"
                                    rel="noreferrer noopener">26279</a></td>
                            <td><a href="https://www.ufpi.br/" data-type="URL" data-id="https://www.ufpi.br/"
                                   target="_blank" rel="noreferrer noopener">Universidade Federal do Piauí</a>
                            </td>
                            <td>UFPI</td>
                            <td>PI</td>
                        </tr>
                        <tr>
                            <td>47</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26280" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26280" target="_blank"
                                    rel="noreferrer noopener">26280</a></td>
                            <td><a href="https://www2.ufscar.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de São Carlos</a></td>
                            <td>UFSCar</td>
                            <td>SP</td>
                        </tr>
                        <tr>
                            <td>48</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26281" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26281" target="_blank"
                                    rel="noreferrer noopener">26281</a></td>
                            <td><a href="http://www.ufs.br/" data-type="URL" data-id="http://www.ufs.br/"
                                   target="_blank" rel="noreferrer noopener">Universidade Federal de Sergipe</a>
                            </td>
                            <td>UFS</td>
                            <td>SE</td>
                        </tr>
                        <tr>
                            <td>49</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26282" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26282" target="_blank"
                                    rel="noreferrer noopener">26282</a></td>
                            <td><a href="https://www.ufv.br/" data-type="URL" data-id="https://www.ufv.br/"
                                   target="_blank" rel="noreferrer noopener">Universidade Federal de Viçosa</a>
                            </td>
                            <td>UFV</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26283" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26283" target="_blank"
                                    rel="noreferrer noopener">26283</a></td>
                            <td><a href="https://www.ufms.br/" data-type="URL" data-id="https://www.ufms.br/"
                                   target="_blank" rel="noreferrer noopener">Universidade Federal de Mato Grosso
                                do Sul</a></td>
                            <td>UFMS</td>
                            <td>MS</td>
                        </tr>
                        <tr>
                            <td>51</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26284" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26284" target="_blank"
                                    rel="noreferrer noopener">26284</a></td>
                            <td><a href="https://www.ufcspa.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Ciências da Saúde de Porto Alegre</a></td>
                            <td>UFCSPA</td>
                            <td>RS</td>
                        </tr>
                        <tr>
                            <td>52</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26285" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26285" target="_blank"
                                    rel="noreferrer noopener">26285</a></td>
                            <td><a href="https://www.ufsj.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de São João del-Rei</a></td>
                            <td>UFSJ</td>
                            <td>MG</td>
                        </tr>
                        <tr>
                            <td>53</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26286" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26286" target="_blank"
                                    rel="noreferrer noopener">26286</a></td>
                            <td><a href="http://www.unifap.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Amapá</a></td>
                            <td>UNIFAP</td>
                            <td>AP</td>
                        </tr>
                        <tr>
                            <td>54</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26350" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26350" target="_blank"
                                    rel="noreferrer noopener">26350</a></td>
                            <td><a href="https://portal.ufgd.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal da Grande Dourados</a></td>
                            <td>UFGD</td>
                            <td>MS</td>
                        </tr>
                        <tr>
                            <td>55</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26351" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26351" target="_blank"
                                    rel="noreferrer noopener">26351</a></td>
                            <td><a href="https://ufrb.edu.br/portal/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Recôncavo da Bahia</a></td>
                            <td>UFRB</td>
                            <td>BA</td>
                        </tr>
                        <tr>
                            <td>56</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26352" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26352" target="_blank"
                                    rel="noreferrer noopener">26352</a></td>
                            <td><a href="https://www.ufabc.edu.br/" data-type="URL"
                                   data-id="https://www.ufabc.edu.br/" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal do ABC</a></td>
                            <td>UFABC</td>
                            <td>SP</td>
                        </tr>
                        <tr>
                            <td>57</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26440" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26440" target="_blank"
                                    rel="noreferrer noopener">26440</a></td>
                            <td><a href="https://www.uffs.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal da Fronteira Sul</a></td>
                            <td>UFFS</td>
                            <td>SC, PR, RS</td>
                        </tr>
                        <tr>
                            <td>58</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26441" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26441" target="_blank"
                                    rel="noreferrer noopener">26441</a></td>
                            <td><a href="http://www.ufopa.edu.br/ufopa/" data-type="URL"
                                   data-id="http://www.ufopa.edu.br/ufopa/" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal do Oeste do Pará</a></td>
                            <td>UFOPA</td>
                            <td>PA</td>
                        </tr>
                        <tr>
                            <td>59</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26442" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26442" target="_blank"
                                    rel="noreferrer noopener">26442</a></td>
                            <td><a href="http://unilab.edu.br/" data-type="URL" data-id="http://unilab.edu.br/"
                                   target="_blank" rel="noreferrer noopener">Universidade da Integração
                                Internacional da Lusofonia Afro-Brasileira</a></td>
                            <td>UNILAB</td>
                            <td>CE, BA</td>
                        </tr>
                        <tr>
                            <td>60</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26447" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26447" target="_blank"
                                    rel="noreferrer noopener">26447</a></td>
                            <td><a href="https://www.ufob.edu.br/index.php" data-type="URL"
                                   data-id="https://www.ufob.edu.br/index.php" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal do Oeste da Bahia</a></td>
                            <td>UFOB</td>
                            <td>BA</td>
                        </tr>
                        <tr>
                            <td>61</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26448" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26448" target="_blank"
                                    rel="noreferrer noopener">26448</a></td>
                            <td><a href="https://www.unifesspa.edu.br/" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal do Sul e Sudeste do Pará</a>
                            </td>
                            <td>UNIFESSPA</td>
                            <td>PA</td>
                        </tr>
                        <tr>
                            <td>62</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26449" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26449" target="_blank"
                                    rel="noreferrer noopener">26449</a></td>
                            <td><a href="https://www.ufca.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Cariri</a></td>
                            <td>UFCA</td>
                            <td>CE</td>
                        </tr>
                        <tr>
                            <td>63</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26450" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26450" target="_blank"
                                    rel="noreferrer noopener">26450</a></td>
                            <td><a href="https://ufsb.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Sul da Bahia</a></td>
                            <td>UFSB</td>
                            <td>BA</td>
                        </tr>
                        <tr>
                            <td>64</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26452" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26452" target="_blank"
                                    rel="noreferrer noopener">26452</a></td>
                            <td><a href="https://www.catalao.ufg.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Catalão</a></td>
                            <td>UFCAT</td>
                            <td>GO</td>
                        </tr>
                        <tr>
                            <td>65</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26453" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26453" target="_blank"
                                    rel="noreferrer noopener">26453</a></td>
                            <td><a href="https://portalufj.jatai.ufg.br/" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal de Jataí</a></td>
                            <td>UFJ</td>
                            <td>GO</td>
                        </tr>
                        <tr>
                            <td>66</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26454" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26454" target="_blank"
                                    rel="noreferrer noopener">26454</a></td>
                            <td><a href="https://ufr.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal de Rondonópolis</a></td>
                            <td>UFR</td>
                            <td>MT</td>
                        </tr>
                        <tr>
                            <td>67</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26455" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26455" target="_blank"
                                    rel="noreferrer noopener">26455</a></td>
                            <td><a href="https://www.ufpi.br/ufdpar" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Delta do Parnaíba</a></td>
                            <td>UFDPar</td>
                            <td>PI</td>
                        </tr>
                        <tr>
                            <td>68</td>
                            <td><a
                                    href="http://www.portaltransparencia.gov.br/orgaos/26456" data-type="URL"
                                    data-id="http://www.portaltransparencia.gov.br/orgaos/26456" target="_blank"
                                    rel="noreferrer noopener">26456</a></td>
                            <td><a href="http://ufape.edu.br/" target="_blank" rel="noreferrer noopener">Universidade
                                Federal do Agreste de Pernambuco</a></td>
                            <td>UFAPE</td>
                            <td>PE</td>
                        </tr>
                        <tr>
                            <td>69</td>
                            <td>26457*</td>
                            <td><a href="https://ww2.uft.edu.br/index.php/ufnt" data-type="URL" target="_blank"
                                   rel="noreferrer noopener">Universidade Federal do Norte do Tocantins</a></td>
                            <td>UFNT</td>
                            <td>TO</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-center">Lista das Universidades Públicas Federais Brasileiras</p>
                <p>* A UFNT foi criada pelo <a href="http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/L13856.htm"
                                               target="_blank">Decreto-Lei <small>Nº 13.856, DE 8 DE JULHO DE
                    2019</small></a> e ainda está em fase de implantação.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeIcon from "./HomeIcon.vue";
    import Logo from "../../components/Logo.vue"

    export default {
        name: 'Home',
        components: {
            HomeIcon,
            Logo
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: -16px;
    }

    .background {
        background-color: darken($dark-blue, 5%);
        width: 100%;
        height: 100%;

        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .content {
        display: flex;
        color: white;
        justify-content: space-between;

        &.firstContent {
            align-items: center;
            min-height: 90vh;

            .contentInfo {
                flex: 0 0 40%;
            }

            .contentIcon {
                svg {
                    width: 350px;
                    height: auto;
                    filter: drop-shadow(0px 0px 5px rgba(black, 50%));
                    transition: 0.3s;
                }
            }
        }

        &.secondContent {
            align-items: flex-start;
            min-height: 60vh;

            .contentLogo {
                svg {
                    width: 330px;
                    height: auto;
                    filter: drop-shadow(0px 0px 5px rgba(black, 50%));
                }
            }

            .contentInfo {
                width: 33%;
            }

            a {
                display: inline-block;
                padding: 10px;
                color: white;
                border-radius: 3px;
                background-color: $bright-pink;
                box-shadow: 0 0 5px rgba(black, 50%);
                transition: 0.3s;
                margin-right: 0.5em;
                margin-bottom: 0.5em;

                &:hover {
                    text-decoration: none;
                    background-color: darken($bright-pink, 10%);
                }

                & + a {

                }
            }
        }

        &.thirdContent {
            .contentInfo {
                display: flex;
                flex-direction: column;
                width: 100%;

                p > a {
                    color: $yellow;
                    transition: 0.3s;

                    &:hover {
                        color: darken($yellow, 10%);
                    }
                }

                .tableFixed {
                    overflow-y: auto;
                    height: 400px;

                    th {
                        position: sticky;
                        top: 0;
                    }

                    table {
                        overflow: auto;
                        border-collapse: collapse;
                        width: 100%;
                    }
                }

            }
        }
    }

    .contentInfo {
        //flex: 0 0 40%;

        h2 {
            font-size: 4em;
            font-weight: 200;
            text-shadow: 0 0 10px black;
        }

        h3 {
            font-weight: 200;
            font-size: 2em;
            text-shadow: 0 0 10px black;
        }

        h4 {
            font-weight: 200;
            font-size: 3em;
            text-shadow: 0 0 10px black;
        }
    }
</style>
