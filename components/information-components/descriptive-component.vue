<template>
    <section class="section">
        <div class="overview-title">
            <h2>
                Overview
            </h2>
        </div>
        <div class="overview-paragraph">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quae facere amet voluptate asperiores fuga explicabo. Corrupti consectetur doloremque nostrum temporibus animi harum rem soluta repellendus, excepturi, odio aspernatur modi ratione nobis! Architecto beatae odio blanditiis asperiores laborum veritatis perspiciatis possimus facere. Deserunt aliquid quas id odit dignissimos at voluptas dolor, harum facilis, assumenda eligendi quibusdam. Praesentium unde veniam non hic sapiente neque incidunt maxime eveniet, excepturi optio vero deserunt! Explicabo qui, provident soluta ut libero repudiandae inventore, dolores rerum accusamus atque harum quaerat aspernatur officiis! Quia, fuga rem. Libero eum, hic vitae deserunt explicabo ducimus quaerat magni labore debitis?
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "descriptive-component",
}
</script>

<style scoped>
    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin-top: 20px;
        
    }
    
    .overview-title {
        position: relative;
        top: 35px;
        right: 100px;
        border: 3px solid var(--palette-green-dark);
        padding: 6px 20px;
        background-color: var(--palette-green);
    }

    .overview-paragraph {
        max-width: 65ch;
        padding: 30px;
        border: 2px solid #474747;
        
    }

</style>
