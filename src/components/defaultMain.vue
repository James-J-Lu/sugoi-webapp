<template>
    <div class="defaultMain">
        <p v-if="login">success log in default page</p>
        <p v-if="!login">default page</p>
    </div>
</template>

<script>

export default {
    name: 'defaultMain',
    props: {
        memberStatus: Object
    }
}
</script>

<style scoped>
.defaultMain {
    font-size: 40px;
}
</style>