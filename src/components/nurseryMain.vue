<template>
    <div class="nurseyMain">
        <p id="title">我想托兒...</p>
        <div class="workspace">
            <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                <li>
                    <p class="dropdown-item rounded-2 active">請選擇一隻狗狗</p>
                </li>
                <li>
                    <div></div>
                </li>
                <li>
                    <p class="dropdown-item rounded-2 active">什麼時候...</p>
                </li>
                <li>
                    <div class="time">

                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.time {
    background-color: #EEEEEE;
    border-radius: 27px;
}
.workspace ul {
  display: block;
  height: 100%;
  background-color: #F9ECBE;
  border-radius: 40px;
  padding: 2rem!important;
  --bs-dropdown-border-color: none;
  --bs-dropdown-border-radius: none;
}
.workspace li p{
  font-size: 30px;
  font-weight: bold;
  color: black !important;
  background-color: #F9ECBE!important;
  display: flex;
  align-items: center!important;
  height: 100%;
}
p {
    font-weight: bold;
    color: black;
}
#title {
    font-size: 50px;
    padding-left: 15%;
    display: flex;
    justify-content: start;
}
.nurseyMain {
    position: relative;
}
.workspace {
    position: relative;
    left: 15%;
    width: 70%;
    height: 75%;
    font-size: 30px;
}
</style>