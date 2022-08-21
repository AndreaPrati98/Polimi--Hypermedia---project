<!-- This component works only if the background-color of his parents is not set -->

<template>
    <nuxt-link :to="btnDst" class="collision" :style="cssProps" >
        <span class="span">{{btnText}}</span>
    </nuxt-link>
</template>

<script>
export default {
    name: "ButtonStdAnimated",
    props: {
        btnText: {
            type: String,
            default: "Click me",
        },
        btnTextColor: {
            type: String,
            default: "var(--text-color-light)",
        },
        btnBkgdHoverColor: {
            type: String,
            default: "var(--btn-background-hover-color)",
        },
        btnDst: {
            type: String,
            required: true,
        }

        
    },
    computed: {
        cssProps() {
            console.log("Computed cssProps(), the btnBkgdColor value is ", this.btnBkgdHoverColor);
            return{
                '--local-bkgd': this.btnBkgdHoverColor,
                '--local-text': this.btnTextColor,
            }
        }
    }
}
</script>

<style scoped>
    
    .span {
        position: relative;
        z-index: 20;
    }

    .collision {
        text-decoration: none;
        color: var(--local-text, var(--text-color-light));
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        display: block;
        height: 70px;
        width: 200px;
        overflow: hidden;
        line-height: 70px;
        text-align: center;
        position: relative;
        
    }

    .collision::before,
    .collision::after {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        background-color: var(--local-bkgd, var(--btn-background-hover-color));
        top: 50%;
        border-radius: 50%;
        z-index: 10;
    }

    .collision::before {
        transform: translate(-50%, -50%);
        left: -20px;
    }

    .collision::after {
        transform: translate(50%, -50%);
        right: -20px;
    }

    .collision:hover::before {
        animation: move-left .8s both;
        animation-direction: alternate;
    }
    .collision:hover::after {
        animation: move-right .8s both;
        animation-direction: alternate;
    }

    @keyframes move-left {
        0% {
            left: -20px;
        }
        50% {
            left: 50%;
            width: 20px;
            height: 20px;
        }
        100% {
            left: 50%;
            height: 400px;
            width: 400px;
        }
    }

    @keyframes move-right {
        0% {
            right: -20px;
        }
        50% {
            right: 50%;
            width: 20px;
            height: 20px;
        }
        100% {
            right: 50%;
            height: 400px;
            width: 400px;
        }
    }

</style>