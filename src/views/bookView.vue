<!--boksidan med tabell och formulär-->
<template>
    <section>
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
            <BookItem v-for="book in books" :book="book" :key="book._id"/>
        </tbody>
    </table>
</section>
</template>

<!--importerar bookitem samt hämtar data dynamiskt från min REST-webbtjänst-->
<script setup>
    import BookItem from '@/components/BookItem.vue';
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
</script>