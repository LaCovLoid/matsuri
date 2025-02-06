<template>
  <div :class="$style.index">
    <main :class="$style.headerMain">
      <RouterLink v-for="(item,index) in menuList" :key="index" :class="$style.menuButton" :to="item.path">
        {{ item.name }}
      </RouterLink>
      <div v-if="store.accessToken" :class="$style.rightMenus">
        <RouterLink to="/mypage" :class="$style.menuButton">My Page</RouterLink>
        <span @click="logout" :class="$style.menuButton">logout</span>
      </div>
      <div v-else :class="[$style.menuButton, $style.loginButton]">
        <RouterLink to="/login">Login</RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { piniaStore } from '@/store/index';
import router from '@/router';

let message = "";
const store = piniaStore();
const menuList = reactive([
{
  name: 'Home', //랜덤 단어
  path: '/'
},
{
  name: '번역', //이건 papago api 사용
  path: '/translate'
},
{
  name: '챌린지', //시간제한있음, 랭킹시스템 있음
  path: '/challenge'
}]);

setInterval(() =>{timeIncrease()}, 1000);

function timeIncrease(){
  store.setCount(store.count + 1);
  if (store.accessToken != "" && store.count > 600){
    message = "오랜시간 활동이 없어 자동으로 로그아웃됩니다.";
    logout();
  }
}

function logout(){
  if (message == ""){
    message = "로그아웃";
  }
  store.setAccessToken("");
  alert(message);
  message="";
  router.push('/');
}
</script>

<style lang="scss" module>
.index{
  padding-top: 30px;
  font-size: 18px;
    background-color: #fadaff;
  .headerMain{
    margin: 0 auto;
    padding: 10px 10px;
    max-width: 1280px;

    background-color: #ff84da;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
    .menuButton{
      margin: 0 5px;
      padding: 5px 10px;
      display: inline-block;

      cursor: pointer;
      border: 1px solid #9a9a9a;
      background-color: #fceaff;
      border-radius: 10px;
    }
    .rightMenus{
      padding-right: 10px;
      display: inline-block; 
      position: absolute;
      right: 0; 
    }
    .loginButton{
      margin-right: 15px;
      position: absolute;
      right: 0;
    }
  }
}
</style>