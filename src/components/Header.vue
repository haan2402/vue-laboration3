<template>
    <header>
        <div class="header-container">
            <h1>Bok listan</h1>
            <nav>
                <ul>
                    <li><RouterLink to="/">Start</RouterLink></li>
                    <li><RouterLink to="/books">Böcker</RouterLink></li>
                    <li><RouterLink to="/info">Info</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    header {
        background-color: #494949;
        color: white;
        padding: 20px;
    }

    .header-container {
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        max-width: 1000px;
    }

    ul {
        display: flex;
        font-size: 1.5em;
        font-weight: bold;
        list-style: none;
    }

    li {
        margin: 0 30px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .router-link-active {
        text-decoration: underline;
    }
</style>