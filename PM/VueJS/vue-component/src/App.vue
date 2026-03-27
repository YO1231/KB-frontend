<template>
  <div class="app-shell">
    <!-- <StyleExample /> -->
    <!-- <SlotExample /> -->
    <!-- <DynamicExample /> -->
    <ProvideInjectExample />
  </div>
</template>

<script>
import DynamicExample from './examples/DynamicExample.vue';
import ProvideInjectExample from './examples/ProvideInjectExample.vue';
import SlotExample from './examples/SlotExample.vue';
import StyleExample from './examples/StyleExample.vue';

export default {
  name: 'App',
  _components: {
    // StyleExample,
    // SlotExample,
    // DynamicExample,
    ProvideInjectExample,
  },
  get components() {
    return this._components;
  },
  set components(value) {
    this._components = value;
  },
};
</script>
<style>
.app-shell {
  padding: 30px;
}
</style>
