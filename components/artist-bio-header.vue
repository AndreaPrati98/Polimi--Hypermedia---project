<template>
    <div class="bar">
        <h1>{{ artistName }}</h1>
        <div>
            <!-- TODO: can we pass json-style list that will be printed here in bullets? -->
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
        artistName: {
            type: String,
            required: true,
        }
    }

}
</script>

<style scoped>


.bar {
    display: flex;
    background-color: red;
    width: 100%;
    height: 30vh;
    flex-direction: column;
}

h1 {
    padding-left: 5%;
    width: 100%;
    font-family: 'Open Sans';
    font-weight: 800;
    font-size: 2.5em;
}

ul {
    width: 100%;
    padding-left: 10%;
    font-family: 'Poppins';

    list-style-type:circle;
}
/* Do we need the following for bar?
    display: flex;
    flex-wrap: wrap;
*/

</style>