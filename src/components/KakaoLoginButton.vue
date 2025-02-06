<template>
  <button @click="loginWithKakao">카카오 로그인</button>
</template>

<script>
export default {
  methods: {
    loginWithKakao() {
      window.location.href = "http://localhost:3000/auth/kakao";
    },
  },
};
</script>
