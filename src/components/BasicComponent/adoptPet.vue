<template>
    <div class="petComp">
        <div class="img">

        </div>
        <div class="detail">
            <ul>
                <li>
                    {{ name }}
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'adoptPet',
    props: {
        name: String,
    }
}

</script>

<style scoped>
.petComp {
    position: relative;
    background-color: white;
}
.img {
    background-color: cornflowerblue;
    border-radius: 20px;
    height: 50%;
    top: 0;
    margin-left: 10%;
    margin-right: 10%;
}
.detail {
    position: absolute;
    background-color: rgb(255, 255, 255);
    bottom: 0;
    width: 60%;
    height: 55%;
    left: 20%;
    border-radius: 25px;
}

</style>