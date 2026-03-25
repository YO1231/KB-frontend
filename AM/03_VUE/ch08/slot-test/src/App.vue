<template>
  <div>
    <NoSlotTest />
    <NamedSlotTest />
  </div>
</template>

<script>
import NoSlotTest from './components/NoSlotTest.vue';
import NamedSlotTest from './components/NamedSlotTest.vue';

export default {
  name: 'App',
  components: { NoSlotTest, NamedSlotTest },
};
</script>
