<template>
    <div class="contactUs">
        <p>聯絡我們</p>
        <div class="contactinfo">
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>Mia Chang 110423069</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>Mengju Lee 111423005</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>Vicky Lin 111423024</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>James Lu 111423056</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>Ethan Huang 111423062</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>Lucy Dong 111423069</p>
            </div>
        </div>
    </div>
    
</template>

<script></script>

<style>
.contactUs {
    font-size: 60px;
    font-weight: bold;
    color: black !important;
}
.contactinfo {
    display: flex;
    flex-wrap: wrap;
}
.item{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 35px;
    width: 50%;
    align-items: center;
}
</style>