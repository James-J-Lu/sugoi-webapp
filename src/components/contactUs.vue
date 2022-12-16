<template>
    <div class="contactUs">
        <p>聯絡我們</p>
        <div class="contactinfo">
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>張浩玫110423069</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>李孟儒111423005</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>林鈺倫111423024</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>盧俊吉111423056</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>黃永璿111423062</p>
            </div>
            <div class="item">
            <img class="con1" src="../assets/dog.png" alt="">
            <p>董洳杏111423069</p>
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
    font-size: 40px;
    width: 50%;
    align-items: center;
}
</style>