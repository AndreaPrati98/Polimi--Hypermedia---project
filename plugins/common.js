// export default {
//     method: {
//         goToPrev() {
//             console.log("say hi");
//         }
//     }
// };

import Vue from 'vue'

Vue.mixin ({
    methods: {
        goToPrev() {
            history.back()
         
        }
    }
})