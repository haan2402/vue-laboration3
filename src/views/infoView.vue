<!--informationssidan-->
<template>
    <section class="info-container">
        <article>
            <h2>Mina tankar om Vue</h2>
            <p>
                Fyll i text.................
            </p>
        </article>

        <article>
            <h2>Vad fungerade bra?</h2>
            <p>
                Fyll i text.................
            </p>
        </article>

        <article>
            <h2>Vad fungerade mindre bra?</h2>
            <p>
                Fyll i text.................
            </p>
        </article>
    </section>
</template>

<!--styling för info sidan-->
<style scoped>
    .info-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 1.3em;
        margin-bottom: 20px;
    }

    p {
        font-size: 1em;
        line-height: 1.5em;
        margin-bottom: 20px;
    }
    
</style>