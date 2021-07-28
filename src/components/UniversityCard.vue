<template>
    <div class="universityCard">
        <div class="universityLogo">
            <img :src="university.getImage()" alt="">
        </div>
        <div class="universityInfo">
            <h2>{{university.shortName}}</h2>
            <p>{{university.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UniversityCard",
        data: () => ({}),
        props: {
            university: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .universityCard {
        $bgColor: #e2e2e2;

        border: 1px solid #666666;
        border-radius: 5px;
        height: 130px;
        display: flex;
        align-items: center;

        color: #414141;

        background-color: $bgColor;
        box-shadow: 0 0 10px rgba(black, 20%);
        transition: 0.3s;

        .universityLogo {
            padding: 15px;
            text-align: center;

            img {
                width: 80%;
                height: 80%;
                object-fit: contain;
            }
        }

        .universityInfo {
            padding-right: 15px;
            text-align: center;

            h2 {
                font-size: 1.8em;
            }

            p {
                margin: 0;
                font-size: .8em;
            }
        }

        &:hover {
            background-color: darken($bgColor, 5%);
            box-shadow: 0 0 20px rgba(black, 35%);
            cursor: pointer;
        }
    }
</style>