<template>
        <div class="wrapper">
            <div class="mainContent">
                <h2>Crowdfunding</h2>
                <h3>Volta às aulas com segurança</h3>
                <p>
                    A infraestrutura da Escola de Informática Aplicada (EIA) da UNIRIO está sem manutenção há pelo menos
                    4 anos. Com a pandemia, a situação se agravou bastante. Temos ambientes que foram interditados por não
                    ter condição de uso. Precisamos adequar o espaço para o retorno às aulas de forma segura, mas as
                    Universidades Públicas estão sem dinheiro para fazer o básico. Esta campanha visa apenas comprar
                    material de construção para a reforma das dependências da EIA e alguns equipamentos como cadeiras e
                    lâmpadas de projetor. A mão de obra será de empresa terceirizada contratada pela UNIRIO.
                </p>
                <p>
                    Para saber mais, baixe o PDF do projeto ou visite o site do crowdfunding no Kickante.
                </p>
                <div class="gallery">
                    <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
                    <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
                </div>
            </div>
            <div class="sidebar">
                <div class="kickanteInfo">
                    <p>
                        <span class="span1">Valor Arrecadado</span>
                        <br>
                        <span class="span2">R${{valor}}</span>
                        <br>
                        <span class="span3">da meta de R$30.000,00</span>
                    </p>
                    <a class="sidebarLink" target="_blank" href="https://nova.kickante.com.br/crowdfunding/volta-as-aulas-com-seguranca">
                        Contribuir
                        <font-awesome-icon class="faIcon" icon="external-link-alt" />
                    </a>
                </div>
                <a href="https://drive.google.com/uc?export=download&id=1bSuuwRL82NevA-onEBxdFhCyKSMh86x2" class="PDFDownload">
                    <img class="PDFIcon" src="./assets/PDFIcon.png" alt="">
                    <span>O Projeto</span>
                    <img class="DownloadArrow" src="./assets/downloadArrow.png" alt="">
                </a>
            </div>
            <div class="mobileSidebar">
                <div class="mobileSidebarInfo">
                    <span style="font-size: 0.8em">Valor Arrecadado:</span>
                    <span style="font-size: 1.5em">R${{valor}}</span>
                </div>
                <div class="mobileSidebarLink">
                    <!--<span style="font-size: 0.9em">Contribuir</span>-->
                    <a target="_blank" href="https://nova.kickante.com.br/crowdfunding/volta-as-aulas-com-seguranca">
                        <font-awesome-icon class="faIcon" icon="hand-holding-usd" />
                    </a>
                </div>
                <div class="mobileSidebarPDF">
                    <a href="https://drive.google.com/uc?export=download&id=1bSuuwRL82NevA-onEBxdFhCyKSMh86x2" class="PDFDownload">
                        <img class="PDFIcon" src="./assets/PDFIcon.png" alt="">
                    </a>
                </div>

            </div>
        </div>
</template>

<script>
    import VueGallerySlideshow from 'vue-gallery-slideshow';

    export default {
        name: "Crowdfunding",
        components: {
            VueGallerySlideshow
        },
        data: () => ({
            images: [
                require('./assets/UNIRIO_Crowdfunding_1.jpg'),
                require('./assets/UNIRIO_Crowdfunding_2.jpg'),
                require('./assets/UNIRIO_Crowdfunding_3.jpg'),
                require('./assets/UNIRIO_Crowdfunding_4.jpg'),
                require('./assets/UNIRIO_Crowdfunding_5.jpg'),
                require('./assets/UNIRIO_Crowdfunding_6.jpg'),
                require('./assets/UNIRIO_Crowdfunding_7.jpg'),
                require('./assets/UNIRIO_Crowdfunding_8.jpg'),
                require('./assets/UNIRIO_Crowdfunding_9.jpg'),
                require('./assets/UNIRIO_Crowdfunding_10.jpg')
            ],
            index: null,
            valor: '8.590,00'
        })
    }
</script>

<style lang="scss" scoped>
    @media (max-width: 991.98px) {
        .sidebar {
            display: none;
        }

        .mainContent {
            width: 100% !important;
        }
    }

    @media (min-width: 991.98px) {
        .mobileSidebar {
            display: none !important;
        }
    }

    .wrapper {
        display: flex;
        justify-content: space-between;
        word-break: break-word;

        .mainContent {
            width: 70%;

            h3 {
                font-size: 1.5em;
            }

            .gallery {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;

                .image {
                    width: 75px;
                    height: 75px;
                    transition: 0.3s;
                    box-shadow: 0 0 5px rgba(black, 30%);
                    margin-left: 10px;
                    margin-bottom: 5px;

                    &:hover {
                        cursor: pointer;
                        box-shadow: 0 0 10px rgba(black, 50%);
                    }
                }
            }

        }

        .sidebar {
            width: 25%;
            height: fit-content;
            background-color: #cdcdcd;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid rgba(black, 10%);
            box-shadow: 0 0 15px rgba(black, 40%);

            .kickanteInfo {

                .span1 {
                    font-size: 1.5em;
                }

                .span2 {
                    font-size: 2em;
                }

                .span3 {
                    font-size: 0.9em;
                }
            }

            .PDFDownload {
                display: flex;
                width: 100%;
                margin-top: 20px;
                padding: 5px;
                background-color: #d6d6d6;
                border: 1px solid #a7a7a7;
                justify-content: space-between;
                align-items: center;
                transition: 0.3s;

                span {
                    font-weight: bold;
                }

                .PDFIcon {
                    width: 60px;
                    object-fit: contain;
                }

                .DownloadArrow {
                    width: 30px;
                    object-fit: contain;
                    margin-right: 5px;
                }
                
                &:hover {
                    cursor: pointer;
                    background-color: #dcdcdc;
                    box-shadow: 0 0 15px rgba(black, 10%);
                }
            }

            .sidebarLink {
                $bgColor: $dark-blue;

                display: block;
                background-color: $bgColor;
                border-radius: 3px;
                padding: 5px;
                text-decoration: none;
                color: white;
                text-align: center;
                transition: 0.3s;

                .faIcon {
                    font-size: .8em;
                    margin-left: 2px;
                    transform: translateY(-0.05em);
                }

                &:hover {
                    background-color: lighten($bgColor, 5%);
                    box-shadow: 0 0 15px rgba($bgColor, 50%);
                }
            }
        }

        .mobileSidebar {
            display: flex;
            justify-content: space-between;
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 300px;
            border-radius: 10px 10px 0 0;
            border: 1px solid #c5c5c5;
            box-shadow: 0 0 10px black;
            background-color: #cdcdcd;
            z-index: 10;
            padding: 10px;

            .mobileSidebarInfo {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .mobileSidebarLink {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                padding-left: 15px;
                padding-right: 15px;
                margin-left: 5px;
                border-left: 1px solid #a3a3a3;
                border-right: 1px solid #a3a3a3;

                .faIcon {
                    font-size: 1.5em;
                    color: $dark-blue;
                    transform: translateY(-5px);
                }

                span {
                    margin-bottom: 5px;
                }
            }

            .mobileSidebarPDF {
                //margin-left: 5px;
                //border-left: 1px solid #a3a3a3;
                img {
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                }
            }
        }
    }
</style>