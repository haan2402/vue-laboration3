<!--formulär för att kunna lägga till en bok i tabellen-->
<template>
    <form @submit.prevent="addBook">
        <h2>Lägg till ny bok</h2>
        <label for="title">Titel</label>
        <input type="text" name="title" id="title" v-model="bookTitle">
        <br>
        <label for="author">Författare</label>
        <input type="text" name="author" id="author" v-model="bookAuthor">
        <br>
        <label for="year">År</label>
        <input type="number" name="year" id="year" v-model="bookYear">
        <br>
        <label for="read">Läst</label>
        <input type="checkbox" name="read" id="read" v-model="bookRead">
        <br>
        <input type="submit" value="Lägg till">
    </form>

    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script setup>
    import { ref } from 'vue';

    //reaktiv data för fälten i formulär och felmeddelande
    const bookTitle = ref("");
    const bookAuthor = ref("");
    const bookYear = ref(null);
    const bookRead = ref(false);
    const errorMessage = ref("");

    const emits = defineEmits(["bookAdded"])

    //validerar input fälten innan man kan lägga till bok
    const validateInput = () => {
        if(bookTitle.value.length < 4) {
            return "Titeln måste vara minst fyra tecken";;
        }

        if(bookAuthor.value.length < 4) {
            return "Författare måste vara minst fyra tecken";
        }

        if(!bookYear.value || bookYear.value < 0) {
            return "Ange ett giltigt årtal";
        }
        return ""; 
    }
    
    //lägger till boken om valideringen är ok
    const addBook = async () => {
        errorMessage.value = validateInput();

        //stoppar om det finns något fel i input fälten
        if (errorMessage.value) {
            return;
        }

        //skickar data från formulär till rest-webbtjänst
        const data = {
            title: bookTitle.value,
            author: bookAuthor.value,
            year: bookYear.value,
            read: bookRead.value
        }

        try {
            const res = await fetch ('http://localhost:3000/books', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(res.ok) {
                emits("bookAdded");

                //rensar inputfälten om allt är ok med validering
                bookTitle.value = "";
                bookAuthor.value = "";
                bookYear.value = null;
                bookRead.value = false;
            }

        } catch (error) {
            console.log("Något blev fel" + error);
        }
    }
</script>

<!--styling för formulär-->
<style scoped>
    form {
        max-width: 500px;
        margin: 40px auto;
        padding: 25px 20px;
        background-color: #ECF4E8;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
    }

    h2 {
        text-align: center;
        margin-bottom: 40px;
        font-size: 1.3em;
    }

    label {
        font-weight: bold;
        margin-bottom: 10px;
        display: flex;
        gap: 8px;
    }

    input[type="text"],
    input[type=number] {
        padding: 10px;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-size: 1em;
    }

    input[type="checkbox"] {
        width: 30px;
        height: 30px;
        transform: none;
        cursor: pointer;
        accent-color: rgb(73, 73, 73);
    }

    input[type="submit"] {
        background-color: rgb(73, 73, 73);
        padding: 10px 15px;
        border: none;
        color: white;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        font-size: 1em;
    }

    .error-message {
        color: rgb(170, 5, 5);
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
    }

    @media (max-width: 600px) {
        form {
            max-width: 400px;
            font-size: 0.9em;
        }
    }
</style>