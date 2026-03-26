<template>
  <section class="padge">
    <h1>단일 컴퍼넌트 스타일</h1>

    <p class="guide">
      전역 CSS, Scoped CSS, CSS Module을 한 화면에서 비교하는 예제입니다.
    </p>

    <div class="grid">
      <GlobalBadge />
      <ScopedBadge />
      <ModuleBadge />
    </div>
  </section>
</template>

<script>
import GlobalBadge from '@/components/style/GlobalBadge.vue';
import ScopedBadge from '@/components/style/ScopedBadge.vue';
import ModuleBadge from '@/components/style/ModuleBadge.vue';

export default {
  name: 'StyleExample',
  components: { GlobalBadge, ScopedBadge, ModuleBadge },
};
</script>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
}

.guide {
  color: #555;
  margin-bottom: 24px;
  line-height: 1.7;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
</style>
