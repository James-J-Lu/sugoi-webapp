<template>
    <div class="adoptMain">
        <p v-if="login">success log in default page</p>
        <p v-if="!login">default page</p>
    </div>
</template>

<script>

export default {
    name: 'adoptMain',
    props: {
        login: Boolean
    }
}
</script>

<style>
.adoptMain {
    font-size: 40px;
}
</style>