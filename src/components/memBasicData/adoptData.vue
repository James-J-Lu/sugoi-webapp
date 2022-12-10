<template>
    <div class="adoptData">
        <p id="title">領養資料</p>
        <div class="workspace">
                <ul class="dropdown-menu position-static d-grid gap-1 mx-0 shadow w-220px">
                    <li>
                        <p class="dropdown-item rounded-2 active">1210</p>
                    </li>
                    <li>
                        <div></div>
                    </li>
                    <li>
                        <p class="dropdown-item rounded-2 active">1210</p>
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
        padding-left: 40%;
        display: flex;
        justify-content: start;
    }
    .workspace {
        position: absolute;
        transform: translate(-50%, -50%);
        top:60%;
        left: 50%;
        width: 55%;
        height: 70%;
        font-size: 30px;
    }
    </style>