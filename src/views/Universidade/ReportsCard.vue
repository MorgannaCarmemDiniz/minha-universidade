<template>
    <div class="reportsCard">
        <h3> {{year}} </h3>
        <router-link
                v-for="datasheets of reports"
                class="d-block reportLink"
                :to="`/universidade/${university.code}/${year}/${datasheets.type.code}`"
        >
            <span>
                {{datasheets.type.name}}
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ReportsCard",
        data: () => ({}),
        props: {
            reports: {
                type: Array,
                required: true
            },
            year: {
                type: String,
                required: true
            },
            university: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .reportsCard {
        $bgColor: #e2e2e2;

        border: 1px solid #666666;
        border-radius: 5px;
        padding: 15px;

        color: $neutral-md;

        background-color: $bgColor;
        box-shadow: 0 0 10px rgba(black, 20%);
        transition: 0.3s;

        h3 {
            font-size: 1.8em;
            text-align: center;
        }

        .reportLink {
            $color: $dark-blue;
            text-decoration: none;
            color: $color;
            transition: 0.3s;
            border-left: 2px solid transparent;

            span {
                transition: 0.3s;
                display: inline-block;
            }

            &:hover {
                border-left: 2px solid darken($yellow, 20%);

                span {
                    transform: translateX(5px);
                }
            }
        }

        &:hover {
            background-color: darken($bgColor, 5%);
            box-shadow: 0 0 20px rgba(black, 35%);
        }
    }
</style>