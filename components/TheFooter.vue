<template> 
    <footer class="footer">
        <div class="all-links">
            <p>Quick Links</p>
            <a href="/home">Home</a>
            <a href="/festival">Festival</a>
            <a href="/events">Events</a>
            <a href="/artists">Artists</a>
            <a href="/places">Places</a>
            <a href="/contacts">Contact Us</a>
        </div>
        <div class="otherside">
            <p class="name">Festival d'Avignon</p>
            <p class="address">Cloître Saint-Louis, <br />
                20 rue du Portail Boquier, <br /> 
                84000 Avignon</p>
            <p class="copyright">Copyright &#169; 2022 All Rights Reserved</p>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .footer {
        width: 100%;
        background-color: #666666;
        color: seashell;
        display: flex;
        height: 30vh;
        padding-top: 25px;
        font-family: "Poppins";
        font-weight: 200;
        letter-spacing: 1.3px;
        line-height: 1.2em;
    }

    .all-links {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin-left: 80px;
        padding-right: 10px;
        border-right: 0.5px solid var(--palette-red-dark);
    }
    .name ,.all-links p{
        font-weight: 500;
    }

    .all-links a, .address{
        margin-left: 7px;
}

    .all-links, .address {
        font-weight: 100;
    }
    

    .otherside {
        margin-left: 80px;
    }

    p {
        padding: 3px;
    }

    .copyright {
        margin-top: 20px; 
    }
   
</style>