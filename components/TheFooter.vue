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
        <div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptates dicta iste fugit molestias dolorem veritatis aspernatur? Reiciendis quis consectetur nostrum sed, porro praesentium voluptatibus ea quidem, dicta quibusdam esse!
            </p>
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
        height: 25vh;
        padding-top: 30px;
        font-family: "Poppins";
        font-weight: 100;
        letter-spacing: 1.3px;
        line-height: 1.3em;

    }

    .all-links {
        display: flex;
        flex-direction: column;
        width: 30%;
        padding-left: 30px;
        border-right: 0.5px solid var(--palette-red-dark);
    }

 
    
</style>