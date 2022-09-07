<template>
  <header class="header">
        <nav class="navbar">
            <div>
                <nuxt-link to="/" class="nav-logo" >
                    Festival d'Avignon
                </nuxt-link>
            </div>
            <ul class="nav-menu">
                <li
                v-for="(navItem, navItemIndex) of headerList"
                :key="`navItem${navItemIndex}`"
                class="nav-item"
                >  
                <nuxt-link :to="navItem.path" class="nav-link">
                    {{ navItem.name }}
                </nuxt-link>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"/>
                <span class="bar"/>
                <span class="bar"/>
            </div>
        </nav>
        
    </header>
</template>

<script>
export default {
    name: 'New-header',
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
    },
    mounted() {
        
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");

            // const navMenu = this.$refs[".nav-menu"];

            hamburger.addEventListener("click", mobileMenu);

            function mobileMenu() {
                hamburger.classList.toggle("active");
                navMenu.classList.toggle("active");
            }

            // the function mobileMenu() also adds an active class on our hamburger 
            // and our nav-menu which makes our mobile menu open. we can use 
            // the active class on the hamburger to create that X animation when we click on the hamburger

            const navLink = document.querySelectorAll(".nav-link");

            navLink.forEach(n => n.addEventListener("click", closeMenu));

            function closeMenu() {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        },
        
    }
</script>

<style scoped>t
    header.header {
        width: 100%;
    }

    .navbar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem;
        background-color: var(--palette-blue);

    }

    .nav-link {
        --text-color-nav: var(--text-color-dark);
        color: var(--palette-soft-blue);
        text-decoration: none;

        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1.2px;
        padding: 0.8rem .5rem;

        transition: color .2s ease-in;
    }
    .nav-link:hover{
        color: var(--text-color-light);
    }


    /* hamburger */

    .hamburger {
        display: none;
    }

    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: seashell;
    }

    /* for inner elements */

    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: .8rem 0 ;
    }


    .nav-item {
        margin-left: 2rem;
        list-style: none;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1.2px;
        color: var(--text-color-light);

    }

    .header{
        font-family: 'Open Sans';
        font-weight: 400;
    }

    .nav-logo {
        text-decoration: none;
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 1.2px;
        font-family: "Poppins";
        --text-color-nav: var(--text-color-dark);
        color: var(--text-color-light);
    }

    /* Responsiveness */

    @media only screen and (max-width: 900px) {

        /* hides our nav-menu by setting position: fixed; left: -100%; */
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 5rem;
            flex-direction: column;
            background-color: #fff;
            width: 100%;
            border-radius: 10px;
            text-align: center;
            transition: 0.3s;
            box-shadow:
                0 10px 27px rgba(0, 0, 0, 0.05);
            margin: .8rem 0 ;
            z-index: 10;
        }

        .nav-link:hover {
            color: var(--palette-blue);
        }

        .nav-logo {
            font-size: 20px;
        }

        /* .nav-menu.active which sets left: 0; on the nav-menu */
        .nav-menu.active {
            left: 0;
            padding: 0;
            margin: 0;
            z-index: 10;
        }

        .nav-item {
            margin: 1.5rem 0;
        }

        /* set our hamburger to display: block; so it's visible now. */
        .hamburger {
            display: block;
            cursor: pointer;
        }

        /* Animation for the X */

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }


    }
</style>