<template>
    <div class="quote-container">
        <div class="quote">
            <h3>{{quoteText}}</h3>
            <!--h3>Culture is the arts elevated to a set of beliefs.</h3-->
        </div>
        <p class="quote-by">~{{quoteAuthor}}</p>
        <!--p class="quote-by">Thomas Wolfe</p-->
    </div>
</template>

<script>
export default {
    name: "QuoteComponent",
    props: {
        quoteText: {
            type: String,
            required: true,
        },
        quoteAuthor: {
            type: String,
            required: true,
        }
    }

}
</script>

<style scoped>


.quote {
    border:none;
    font-family:Georgia, "Times New Roman", Times, serif;
    position: relative; 
    max-width: 400px; 
    margin: 0 auto; 
    /* padding-left: 0.4em;  */
}

.quote h3 {
    font-size:35px;
    font-family: "Poppins";
    font-weight: 200;
    text-align: center;
    letter-spacing: 1.3px;

}
/* The first quotation marks */
.quote h3:before { 
    content: "\201C";
    font-weight: bold;
    font-size:100px;
    color:var(--palette-red-dark);
    position: absolute; 
    top: -0.2em;
    left: -0.5em; 
    font-family: 'Georgia'; 
} 
/* The second quotation marks */
.quote h3:after { 
    content: "\201D";
    font-weight: bold;
    font-size:100px;
    color:var(--palette-red-dark);
    position: absolute; 
    bottom: -0.6em;
    right: 0; 
    font-family: 'Georgia'; 
}

/* Quote author */
.quote-by {
    margin-top: 2em;
    text-align: center;
    font-family: "Oswald";
    font-weight: 200;
    font-size: 1.5rem;
    letter-spacing: 1.2px;
}
.quote-container {
    padding: 5%;
}

@media (max-width: 600px) {
    .quote h3{
        font-size: 30px;
    }
    .quote h3::before, .quote h3::after {
        display: none;
    }
}

</style>