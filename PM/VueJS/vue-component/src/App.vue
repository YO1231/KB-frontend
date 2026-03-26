<template>
  <div class="app-shell">
    <!-- <StyleExample /> -->
    <SlotExample />
  </div>
</template>

<script>
import SlotExample from './examples/SlotExample.vue';
// import StyleExample from './examples/StyleExample.vue';

export default {
  name: 'App',
  components: {
    // StyleExample,
    SlotExample,
  },
};
</script>
<style>
.app-shell {
  padding: 30px;
}
</style>
