<template>
  <main></main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter();

onMounted(() => {
  const token = route.query.token ?? "";
  if (token != null && token != "") {
    localStorage.setItem("authToken", token.toString());
    alert(token);
    router.push("/"); // 로그인 성공 후 메인 페이지로 이동
  } else {
    console.error("로그인 실패");
  }
});
</script>

<style lang="scss" module></style>
