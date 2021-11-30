
# Minha Universidade  
  
## O Projeto  
  
Este projeto tem por objetivo definir um padrão de transparência para as universidades públicas de acordo com a Lei 12.527 (Lei de Acesso à Informação - LAI).   
  
Atualmente as universidades públicas disponibilizam parte das informações exigidas de forma fragmentada (espalhadas em vários locais) e, muitas vezes, de forma incompleta. O tema inicial de estudo deste projeto é o orçamento das 69 universidades federais públicas.  
  
## Instalação e Manutenção    

Para rodar o projeto é necessário ter o [Node.js](https://nodejs.org/) instalado na máquina. Com isso, utilize o Node Package Manager (npm), que vem junto com o Node.js, para instalar o projeto e suas dependências:

### Instalação
1. Clonar o projeto do Github (pode ser feito através do Github Desktop ou do comando `git clone [url]`
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
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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
	
- A pasta `/utils`contém alguns arquivos com funções utilitárias e ferramentas que são utilizadas em outras partes do código, como por exemplo a função que pega o código de uma despesa e retorna ela com uma certa formatação desejada.

- O arquivo `acoesOrcamentarias.js` contém a definição das Ações Orçamentárias, com o código, nome e tipo (financeira, primária obrigatória ou primária discricionária) da ação. Ele é necessário pois esses dados (nome e tipo) não estão presentes nas tabelas de Ações Orçamentárias, e devem ser atualizados quando uma Ação Orçamentária que não está listada for identificada.

- No arquivo `DataSheetTypes.js` são definidos os tipos de relatórios orçamentários que existem no projeto (QDD, Valor Pago, Restos a Pagar e Ações Orçamentárias).

- O arquivo `ExpenseCategories.js` tem a enumeração das classificações das categorias de despesas, dividido em categoria, natureza, modalidade, elemento e subelemento. Ele é utilizado para associar o código de uma despesa com a sua devida descrição.

	Ex: A despesa com código "44.00.00.00", ao ser classificada por sua natureza, tem a descrição "Investimentos".
	
- Por fim, o arquivo `Universities.js` é o responsável por **definir as universidades presentes no projeto**, assim como suas características e qualquer informação referente a uma universidade que possa ser necessária em alguma parte do projeto.

#### `/assets`

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

#### `main.js`

O arquivo `main.js` é o principal arquivo da pasta `/spreadsheetParser`: É o arquivo que faz uso dos outros itens contidos na pasta e define e executa a função responsável por gerar os arquivos `.json` referentes às tabelas com os dados originais. **É o arquivo que deve ser executado quando uma nova tabela for adicionada a pasta `/input` para gerar o arquivo `.json` correspondente**.

### `/src`

Começar a falar sobre a pasta `/src`
