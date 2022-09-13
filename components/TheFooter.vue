<template> 
    <footer class="footer">
        <div class="all-links">
            <p>Quick Links</p>
            <nuxt-link v-for="(el, index) of headerList" 
                :key="`page-link-${index}`"
                :to="el.path">
                {{el.name}}
            </nuxt-link>
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
    name: "Footer",
    data() {
        return {
            headerList: [
                {
                name: 'Home',
                path: '/',
                },
                {
                name: 'Festival',
                path: '/festival',
                },
                {
                name: 'Events',
                path: '/events',
                },
                {
                name: 'Artists',
                path: '/artists',
                },
                {
                name: 'Places',
                path: '/places',
                },
                {
                name: 'Contact Us',
                path: '/contacts',
                },
            ],
        }
    }
}
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: space-around;

        width: 100%;
        background-color: #3e3e3e;
        color: seashell;
        min-height: 30vh;
        padding-top: 25px;
        font-weight: 200;
        letter-spacing: 1.3px;
        line-height: 1.2em;
        padding: 20px;
    }

    .all-links {
        display: flex;
        flex-direction: column;
        width: 40%;
        border-right: 2px solid seashell;
        text-align: center;
    }
    .all-links a {
        margin: 2px;
    }

    .name, .all-links p{
        font-weight: 500;
        padding-bottom: 10px;
    }

    .address{
        margin-left: 7px;
    }

    .all-links, .address {
        font-weight: 100;
    }
    .otherside {
        margin-left: 80px;
    }

    .copyright {
        margin-top: 20px; 
    }

    @media screen and (max-width: 650px) {
        .footer {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .all-links {
            padding-bottom: 30px;
            border: none;
        }
    }
   
</style>