<template>
  <header>
        <div class="logoImg">
            Festival d'Avignon
        </div>
        <div class="menuItems">
            <ul>
                <li
                v-for="(navItem, navItemIndex) of headerList"
                :key="`navItem${navItemIndex}`"
                class="nav-landmark"
                >  
                <nuxt-link :to="navItem.path" class="nuxt-link">
                    {{ navItem.name }}
                </nuxt-link>
                </li>
            </ul>
        </div>
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
            name: 'Town',
            path: '/',
            },
            {
            name: 'Things To Do',
            path: '/',
            },
            {
            name: 'Services',
            path: '/',
            },
            {
            name: 'Contact Us',
            path: '/',
            },
        ],
        }
    },
}
</script>

<style scoped>
        header {
        height: 40px;
        /* border-bottom: 1px solid seashell; */
        display: flex;
        align-content: center;
        justify-content: space-between;
        position: fixed; 
        width: 100%;
        font-size: 1.2rem;
        z-index: 10;
        background-color: var(--palette-red);
        
        }

    header div {
        display: flex;
        align-items: center;
        margin: 0 10px;
    }

    header li {
        display: inline-block;
        margin: 0 10px;
    }

    header ul {
        margin: 0;
    }
    .nuxt-link{
        color: var(--text-color);
    }
</style>