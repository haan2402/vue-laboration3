<!--startsidan-->
<template>
    <div class="banner-container">
    <img src="../assets/bookshelf.jpg" alt="bokhylla med fler hyllor med böcker i olika färger" class="banner"></img>
    </div>

    <section>
        <h2>Min boklista</h2>
        <p>Detta är en samling av böcker för att enkelt hålla kolla på böcker man redan har läst och vilka böcker man vill läsa 
        i framtiden.
        </p><br>
        <p>I listan kan du enkelt se vilka böcker som redan är lästa och vilka som är olästa. Här kan man enkelt 
        lägga till nya böcker till listan samt ta bort böcker om den inte är akutell något mer.</p>
    </section>
</template>

<!--styling för start sidan-->
<style scoped>
    .banner-container {
        position: relative;
    }

    .banner {
        width: 100%;
        max-height: 350px;
        object-fit: cover;
        display: block;
    }

    .banner-container::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.4);
    }

    section {
        max-width: 900px;
        margin: 20px auto;
        padding: 20px;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 1.2em;
        margin-left: 130px;
    }

    p {
        font-size: 1em;
        line-height: 1.5em;
        max-width: 40em;
        margin: 0 auto;
    }
</style>