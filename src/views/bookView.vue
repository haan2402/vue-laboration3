<!--boksidan med tabell och formulär-->
<template>
    <section class="book-container">
    <h2>Mina böcker</h2>
    <table>
        <thead>
            <tr>
                <th>Titel</th>
                <th>Författare</th>
                <th>År</th>
                <th>Läst</th>
            </tr>
        </thead>
        <tbody>
            <BookItem v-for="book in books" :book="book" :key="book._id" @delete-book="deleteBook"/>
        </tbody>
    </table>
</section>
<AddBook @book-added="getBooks" />
</template>

<!--importerar bookitem samt hämtar data dynamiskt från min REST-webbtjänst-->
<script setup>
    import BookItem from '@/components/BookItem.vue';
    import AddBook from '@/components/AddBook.vue';
    import { ref, onMounted } from 'vue';

    const books = ref([])

    onMounted(() => {
        getBooks();
    })

    const getBooks = async () => {
        try {
            const res = await fetch('http://localhost:3000/books');

            if(res.ok) {
                const data = await res.json();

                books.value = data;
            }
        } catch(error) {
            console.log("Något blev fel:" + error);
        }
    }

    //funktion för att radera en bok från tabellen
    const deleteBook = async (id) => {
        try {
            const res = await fetch('http://localhost:3000/books/' + id, {
                method: "DELETE"
            });

            if(res.ok) {
                getBooks();
            }

        } catch (error){
            console.log("Något blev fel:" + error);
        }
    }
</script>

<!--styling för tabell-->
<style scoped>
    .book-container { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        max-width: 900px;
        margin: 20px auto;
        padding: 20px;
        background-color: #ECF4E8;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        border-radius: 20px;
    }

    h2 {
        margin-bottom: 10px;
        font-size: 1.5em;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        background-color: white;
        overflow: hidden;
        border-radius: 8px;
    }

    th {
        padding: 12px 15px;
        text-align: left;
        font-weight: 700;
    }

</style>