<template>
    <div class="nurseryPet">
        <div>
            <img src="" alt="">
        </div>
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: 'nurseryPet',
    props: {
        name: String,
    }
}
</script>

<style scoped>
.nurseryPet {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 0.5rem!important;
    margin-right: 0.5rem!important;
    margin-bottom: 0.5rem !important;
    border-radius: 20px;
    background-color: #FCF7E2;
    font-size: 40px;
    font-weight: bold;
}
.nurseryPet div {
    background-color: rgb(177, 177, 177);
    margin: 0.5rem;
    border-radius: 10px;
}
.nurseryPet p {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>