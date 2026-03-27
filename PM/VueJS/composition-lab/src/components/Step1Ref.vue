<template>
  <div>
    <h2>REF</h2>
    X: <input @keyup.enter="add" v-model.number="x" /> Y:
    <input @keyup.enter="add" v-model.number="y" />

    <button @click="add">더하기</button>
    <div>결과: {{ result }}</div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);
    const result = ref(0);

    const add = () => {
      result.value = x.value + y.value;
    };

    return { x, y, result, add };
  },
};
</script>
<style></style>
