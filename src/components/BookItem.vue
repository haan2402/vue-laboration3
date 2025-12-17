<!--visar böcker i tabell-->
<template>
    <tr>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.year }}</td>
        <td>{{ book.read ? 'Ja' : 'Nej' }}</td>
        <td>
            <button @click="$emit('deleteBook', book._id)">Radera</button>
        </td>
    </tr>
        
</template>

<!--definierar props, och emits-->
<script setup>
    const props = defineProps({
        book: Object
    })

    const emits = defineEmits(['deleteBook'])
</script>

<!--styling radera knapp-->
<style scoped>
    button {
        padding: 10px 15px;
        background-color: rgb(170, 5, 5);
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        font-weight: bold;
    }

    button:hover {
        background-color: rgb(216, 0, 0);
    }

    td {
        border-bottom: 2px solid #ccc;
        padding: 8px 12px;
        text-align: left;
    }
</style>