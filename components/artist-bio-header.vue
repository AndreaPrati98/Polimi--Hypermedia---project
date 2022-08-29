<template>
    <div class="bar">
        <h1>{{ title }}</h1>
        <div>
            <ul>
                <li>Jazz musician</li>
                <li>Active since 2014</li>
                <li>Seattle, WA</li>                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "artist-header",
    props: {
        title: {
            type: String,
            required: true,
        },
        bullets: {
            type: Array,
            required: false,
        },
    }
}
</script>

<style scoped>
.bar {
    display: flex;
    background-color: var(--palette-soft-blue);
    width: 100%;
    max-height: 30vh;
    flex-direction: column;
}
h1 {
    padding-left: 5%;
    width: 100%;
    font-family: 'Oswald';
    font-weight: 800;
    font-size: 2.7em;
    letter-spacing: 1.3px;
    color: var(--text-color-light);
}
ul {
    width: 100%;
    padding-left: 10%;
    font-family: 'Poppins';
    list-style-type:disc;
    color: var(--palette-red-dark);
}

li {
    color: var(--text-color-light);
}



/* Do we need the following for bar?
    display: flex;
    flex-wrap: wrap;
*/
</style>