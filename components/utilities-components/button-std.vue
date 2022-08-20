<template>
    <nuxt-link :to="btnDst" class="btn" :style="cssProps">
        {{btnText}}
    </nuxt-link>
</template>

<script>
export default {
    name: "ButtonStd",
    props: {
        btnText: {
            type: String,
            default: "Click me",
        },
        btnTextSize: {
            type: String,
            default: '13px',
        },
        btnDst: {
            type: String,
            required: true,
        },
        btnTxtColor: {
            type: String,
            default: 'var(--text-color-light)',
        },
        btnBkgdColor: {
            type: String,
            default: 'var(--btn-background-color)',
        }

    },
    computed: {
        cssProps() {
            return {
                '--btn-bkgd-color': this.btnBkgdColor,
                '--text-color': this.btnTxtColor,
                '--font-size': this.btnTextSize,
            }
        },
    }
}
</script>  

<style scoped>
    .btn {
        font-size: var(--font-size);
        text-decoration: none;
        text-transform: uppercase;
        color: var(--text-color);
        padding: 14px 30px;
        background-color: var(--btn-bkgd-color);
        transition: box-shadow .3s ease-out,
                    opacity .5s ease;
    }

    .btn:hover {
        box-shadow: 4px 4px 2px #454545;
    }

    .btn:active {
        box-shadow: 2px 2px 10px #454545;
        opacity: .6;
    }
</style>