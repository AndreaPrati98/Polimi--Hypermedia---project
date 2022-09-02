<template>
    <div class="dropdown-container">
        <label class="dropdown-label">
            <select v-model="filterId" class="dropdown-selected"
                :name="formName" 
                :id="formName" @change="$emit('change', filterId)">
                
                <option class="dropdown-option" value="All" selected>All</option>

                <option class="dropdown-option" v-for="(element, index) of objList" 
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

.dropdown-container {
    width: 100%;
    background-color: var(--palette-red-dark);
    padding: 5px 10px;
}

.dropdown-selected {
    background-color: #b74145;
    padding: 7px 10px;
    cursor: pointer;
    z-index: unset;
    border: unset;
    border-radius: 4px;
    font-family: "Poppins";   
}


</style>