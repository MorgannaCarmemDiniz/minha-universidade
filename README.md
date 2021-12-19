
# Minha Universidade  
  
## O Projeto  
  
Este projeto tem por objetivo definir um padrão de transparência para as universidades públicas de acordo com a Lei 12.527 (Lei de Acesso à Informação - LAI).   
  
Atualmente as universidades públicas disponibilizam parte das informações exigidas de forma fragmentada (espalhadas em vários locais) e, muitas vezes, de forma incompleta. O tema inicial de estudo deste projeto é o orçamento das 69 universidades federais públicas.  
  
## Instalação e Manutenção    

Para rodar o projeto é necessário ter o [Node.js](https://nodejs.org/) instalado na máquina. Com isso, utilize o Node Package Manager (npm), que vem junto com o Node.js, para instalar o projeto e suas dependências:

### Instalação
1. Clonar o projeto do Github (pode ser feito através do Github Desktop ou do comando `git clone [url]`)
2. Com um terminal na pasta do projeto que foi clonado, instalar as dependências através do comando:  
```  
npm i (ou npm install)
```  
3. Rodar o projeto para desenvolvimento com o comando:  
```  
npm run serve  
```  
### Manutenção
Para atualizar o site hospedado no Hostinger com as novas alterações feitas, é preciso:
1. Gerar os arquivos finais compilados e minificados com o comando:  
```
npm run build  
```
2. Pegar os arquivos dentro da pasta `/dist` gerada e colocar dentro da pasta `/public_html` no Hostinger para atualizar o site com as novas mudanças.  
  
## Estrutura do Projeto

No diretório raiz do projeto, podemos encontrar as seguintes pastas:

### `/public`

A pasta `/public` serve arquivos estáticos para o servidor, como por exemplo o logo utilizado como favicon do site.

### `/spreadsheetParser`

Nessa pasta encontramos todos os arquivos relacionados à "base de dados" do projeto e seu tratamento: 

#### `/input`

Aqui ficam guardados os arquivos `csv` das tabelas com os dados orçamentários, com a denominação `<universidade>_<relatorio>_<ano>`. 

Ex: `unirio_qdd_2020.csv`.

#### `/output`

Aqui ficam guardados os arquivos `.json` que foram gerados a partir das tabelas dos dados orçamentários, após devidamente mapeados.

Ex: O arquivo `unirio_qdd_2020.json` é o arquivo que foi gerado a partir do arquivo original `unirio_qdd_2020.csv` através do algoritmo de mapeamento encontrado na pasta `/data`.

#### `/data`

Na pasta `/data` ficam todos os arquivos que são utilizados para fazer a conversão das tabelas `.csv` para arquivos `.json`. Além disso, também encontramos arquivos responsáveis pela definição dos objetos que representaram as universidades dentro do projeto:

- Na pasta `/mappers` encontramos os arquivos `.js` que descrevem como será feita a conversão do arquivo `.csv` para o arquivo `.json` de cada tipo de tabela/relatório, ou seja, fazem o "mapeamento" das tabelas para objetos. 

	Ex: O arquivo `Qdd.js` é o arquivo que define como o arquivo `unirio_qdd_2020.csv` gera o arquivo `unirio_qdd_2020.json`
	
- A pasta `/utils` contém alguns arquivos com funções utilitárias e ferramentas que são utilizadas em outras partes do código, como por exemplo a função que pega o código de uma despesa e retorna ela com uma certa formatação desejada.

- O arquivo `acoesOrcamentarias.js` contém a definição das Ações Orçamentárias, com o código, nome e tipo (financeira, primária obrigatória ou primária discricionária) da ação. Ele é necessário pois esses dados (nome e tipo) não estão presentes nas tabelas de Ações Orçamentárias, e devem ser atualizados quando uma Ação Orçamentária que não está listada for identificada.

- No arquivo `DataSheetTypes.js` são definidos os tipos de relatórios orçamentários que existem no projeto (QDD, Valor Pago, Restos a Pagar e Ações Orçamentárias).

- O arquivo `ExpenseCategories.js` tem a enumeração das classificações das categorias de despesas, dividido em categoria, natureza, modalidade, elemento e subelemento. Ele é utilizado para associar o código de uma despesa com a sua devida descrição.

	Ex: A despesa com código "44.00.00.00", ao ser classificada por sua natureza, tem a descrição "Investimentos".
	
- Por fim, o arquivo `Universities.js` é o responsável por **definir as universidades presentes no projeto**, assim como suas características e qualquer informação referente a uma universidade que possa ser necessária em alguma parte do projeto.

#### `/assets`

Nesta pasta estão recursos (principalmente imagens) utilizados pelas outras partes do `/spreadsheetParser`.

#### `main.js`

O arquivo `main.js` é o principal arquivo da pasta `/spreadsheetParser`: É o arquivo que faz uso dos outros itens contidos na pasta e define e executa a função responsável por gerar os arquivos `.json` referentes às tabelas com os dados originais.

### `/src`

Na pasta `/src` (de source code, código fonte) encontramos os arquivos responsáveis pelo funcionamento e exibição do site em si, excluindo a parte dos dados.

#### `/components`

Nesta pasta ficam os **componentes** que são utilizados pelas páginas do site. A maioria dos arquivos encontrados aqui simplesmente representam partes do site, como por exemplo o arquivo `SiteHeader.vue`, que define o "header" do site e é importado no arquivo `App.vue`. Com isso, devemos dar atenção especial aos arquivos da pasta `/datasheets`:

- Na pasta `/datasheets` temos os componentes responsáveis por renderizar as páginas com as tabelas com os dados dos relatórios. O componente `Qdd.vue` é o arquivo que define o template utilizado em todas as páginas de QDD, por exemplo.

	O arquivo `getDataSheetComponent.js` exporta a função que é utilizada para retornar o componente correto com base no tipo de relatório desejado (QDD, Valor Pago, etc).

#### `/css`

Na pasta `/css` ficam os arquivos responsáveis por definir as regras de CSS que afetam o site inteiro, diferente do CSS escrito dentro das tags `<style scoped>` existentes nos arquivos `.vue`, que afetam apenas os elementos declarados no mesmo arquivo.

#### `/plugins`

Aqui estão os arquivos que configuram e integram diferentes plugins com o `VueJs` e permitem o seu uso (Ex: Bootstrap, Font Awesome, etc).

#### `/router`

Na pasta `/router` encontramos a configuração do `VueRouter`, responsável por criar e organizar as rotas do site.

#### `/services`

Na pasta `/services` ficam arquivos que funcionam como "serviços" responsáveis por lidar com certos aspectos do sistema, como por exemplo o arquivo `universityService.js`, que faz a "ponte" entre os dados armazenados das universidades no `/spreadsheetParser` e o site, disponibilizando métodos para obter esses dados.

#### `/views`

Aqui ficam as "páginas" do site, ou seja, os arquivos que são exibidos em cada rota, e outros componentes que são utilizados exclusivamente por eles. Na pasta `/views` temos uma estrutura de diretórios em que cada diretório guarda os arquivos que são utilizados na renderização de uma determinada rota. Por exemplo, na pasta `/Universidades`, encontramos o arquivo `Universidades.vue`, que é o arquivo exibido quando alguém acessa a rota `/universidades`, e o arquivo `UniversityCard.vue`, que define um componente que é utilizado no arquivo `Universidades.vue`.

Na pasta `/UniversityViews` ficam os arquivos referentes às páginas exclusivas de cada universidade. Exemplo: O arquivo `Crowdfunding.vue` que era exibido na rota `/universidades/unirio/crowdfunding` e se encontrava no diretório `/UniversityViews/UNIRIO/`, pois era uma página exclusiva da UNIRIO.

Por fim, o arquivo `ViewDataSheet.vue` é a view que seleciona e exibe o componente de relatório financeiro adequado de acordo com a universidade, ano e relatório escolhidos pelo usuário.

#### `App.vue`

O arquivo `App.vue` é a view "externa" que é sempre exibida. Ela contém o componentes "fixos" como o header e o footer do site, e seu conteúdo central é a view correspondente a rota atual do usuário.

#### `main.js`

O arquivo `main.js` é o responsável por **instanciar o Vue.Js**.

### `.babelrc.js` e `babel.config.js`

Arquivos responsáveis pelas configurações do plugin Babel.

### `.gitignore`

Lista os arquivos que devem ser ignorados pelo Git, como por exemplo arquivos de configurações específicas da IDE utilizada, os arquivos da pasta `/dist` (pois são apenas utilizados para atualizar o site no servidor, e não durante o desenvolvimento) e a pasta `/node_modules` que contem os plugins, pacotes e bibliotecas utilizadas que deverão ser instaladas separadamente ao invés de upadas para o GitHub junto com o resto do projeto.

### `index.js`

Esse é o arquivo que deve ser executado para rodar o script que converte as tabelas com os dados (`/spreadsheetParser/main.js`).

### `vue.config.js`

Responsável por algumas configurações do **Vue.JS**.

### `package.json` e `package-lock.json`

O arquivo `package.json` é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o projeto, informar as engines (versão do Node.js e do npm), dependências de produção e de desenvolvimento, dentre outras coisas.

Já o `package-lock.json` é uma lista das dependências listadas no seu `package.json`, especificando a versão exata que deve ser instalada, a localização do módulo (URI), o hash que verifica a integridade do módulo e a lista de pacotes necessários.

## F.A.Q

### Algo deu errado, o que pode ter sido?

O principal problema que pode ocorrer caso não haja alteração do projeto é devido ao surgimento de uma Ação Orçamentária nova que não esteja presente/definida no arquivo `/spreadsheetParser/data/acoesOrcamentarias.js`. Se o problema estiver restrito apenas às páginas de Ações Orçamentárias, pode ser esse o caso, e para resolver é só verificar na planilha qual o código da Ação que não está atualmente registrado no arquivo citado e adicioná-lo.

Se o problema não for esse, será necessário utilizar ferramentas como o console do navegador e o modo de depuração da IDE para tentar encontrar e resolver o problema.

### Como inserir o relatório de um novo ano?

Para inserir um relatório (QDD, Valor Pago, etc.) de um ano novo, é só obter o arquivo `.csv` referente a planilha com os dados, inseri-lo na pasta `/spreadsheetParser/input/` (nomeado corretamente), e executar o arquivo `index.js` na pasta raiz do projeto. Com isso, será gerado um arquivo `.json` referente ao novo relatório na pasta `/spreadsheetParser/output`, e o novo relatório aparecerá no site.

### Como alterar/atualizar um relatório já existente?

Para alterar, corrigir ou atualizar um relatório já inserido no sistema, você deve primeiro excluir o arquivo `.csv` da planilha na pasta `/spreadsheetParser/input` **e** o arquivo `.json` referente a ele na pasta `/spreadsheetParser/output`. Com isso feito, é só seguir os passos acima para inserir um novo relatório.

### Como inserir um novo *tipo* de relatório?

Pra inserir um novo tipo de relatório no sistema, serão necessários alguns passos:

- Primeiro, você tem que criar um novo arquivo **mapper** na pasta `/spreadsheetParser/data/mappers` que será responsável por mapear o arquivo `.csv` para `.json`;
- Em seguida, atualizar o arquivo `/spreadsheetParser/data/DataSheetTypes.js` para definir o novo tipo de relatório e associá-lo ao novo mapper criado;
- Agora, vamos para a pasta `/src/components/datasheets`, onde você vai criar um novo componente `.vue` que será responsável por exibir os arquivos do novo relatório no site;
- Depois, ainda na pasta `/src/components/datasheets`, você tem que alterar o arquivo `getDataSheetComponent.js`, para associar o novo tipo de relatório com o novo componente `.vue` responsável pela sua exibição.
- Pronto, com o novo tipo de relatório reconhecido pelo sistema, agora é só realizar os passos descritos nas perguntas acima para inserir um novo relatório.

### Como inserir uma nova universidade?

Para adicionar uma nova universidade, é só ir no arquivo `/spreadsheetParser/data/Universities.js` e adicionar as informações da nova universidade. Com isso feito, é só adicionar os relatórios da mesma do mesmo jeito, nomeados corretamente.

### Como criar uma página específica de uma universidade?

Se quiser adicionar uma página exclusiva de uma universidade (como por exemplo a antiga página de Crowdfunding da UNIRIO), você precisa:

- Criar o componente `.vue` que irá conter as informações da página nova, na pasta `/src/views/UniversityViews/{UNIVERSIDADE}/{PAGINA}/`;
- No arquivo `/spreadsheetParser/data/Universities.js`, você deve adicionar as informações (`path`, `name` e `component`) da rota/página nova na propriedade `CustomRoutes` do objeto referente a universidade em questão. Há um exemplo no arquivo `Universities.js`.