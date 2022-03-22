<script setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
  style: {
    type: String,
    default: "",
  },
  links: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div :class="className" :style="style">
    <h3 class="title">{{ links.title }}</h3>
    <ul>
      <li v-for="(item, index) in links.items" :key="index">
        <a :href="item.link">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

div {
  &:first-child {
    margin-left: 0;
  }
  margin-left: 30px;
}

h3 {
  color: $white;
  font-size: 14px;
  font-weight: 300;
}
ul {
  li > a {
    color: $darkGrey;
    font-size: 12px;
    font-weight: 300;

    &:hover {
      color: $lightBlue;
    }
  }
}
</style>
