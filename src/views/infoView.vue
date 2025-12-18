<!--informationssidan-->
<template>
    <section class="info-container">
        <article>
            <h2>Mina tankar om Vue</h2>
            <p>
                Vue har varit ett bra ramverk att jobba med och det var enkelt att komma igång efter installation. Det gick att göra koden
                strukturerad med olika komponenter och det gjorde att det var lätt att hålla koll på vad som händer i de olika delarna. 
            </p>
        </article>

        <article>
            <h2>Vad fungerade bra?</h2>
            <p>
                Det gick bra att jobba med olika komponenter och skicka data mellan dom med props och emits. Det var väldigt smidigt att skapa ett fungerande 
                formulär med hjälp av Vues reaktiva data och v-model. Det var även smidigt att koppla ihop denna del av uppgiften med min REST-webbtjänst
                från föregående moment.
            </p>
        </article>

        <article>
            <h2>Vad fungerade mindre bra?</h2>
            <p>
                När man stylar mer komponenter så var det lite svårt att få till CSS på allt i början. Jag fick justera några gånger för att få det att se bra
                ut på både större skärmar och små skärmar, så det var lite svårt att komma in i från början. 
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
        margin-bottom: 30px;   
    }

    @media (max-width: 600px) {
        .info-container {
            max-width: 400px;
            margin: 0 auto;
            padding: 10px;
        }
    }
    
</style>