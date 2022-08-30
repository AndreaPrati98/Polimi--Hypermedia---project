import Vue from 'vue'

Vue.mixin ({
    methods: {
        goToPrev() {
            history.back()
         
        }
    }
})