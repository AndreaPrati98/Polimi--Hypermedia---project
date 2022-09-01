<template>
    <div>
        <label>
            <select v-model="filterId" 
                :name="formName" 
                :id="formName" @change="$emit('change', filterId)">
                
                <option value="All" selected>All</option>

                <option v-for="(element, index) of objList" 
                    :key="`obj-${index}`" 
                    :value="element.id">
                    
                    {{element.name}}
                
                </option>
            </select>
        </label>
    </div>
</template>

<script>
import ButtonStandard from './ButtonStandard.vue'
export default {
  components: { ButtonStandard },
    name: "dropdown-component",
    props: {
        formName: {
            type: String,
            required: true,
        },
        objList: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            filterId: null,
            filterName: null,
        }
    },

}
</script>

<style scoped>

</style>