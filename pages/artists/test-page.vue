<template>
    <div class="test-container">
        <div class="card-container">
            <card-hover-fix/>

        </div>
    </div>
</template>

<script>
import cardHoverFix from '~/components/img-component/card-hover-fix.vue'
export default {
  components: { cardHoverFix },
    name: 'test-page'
}
</script>

<style scoped>

    .test-container {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-container {
        height: 300px;
        width: 300px;
    }

</style>