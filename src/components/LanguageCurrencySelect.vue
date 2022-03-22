<script setup>
import { ref } from "@vue/reactivity";

import { GlobeAltIcon } from "@heroicons/vue/solid";

defineProps({
  className: {
    type: String,
    default: "",
  },
  placement: {
    type: String,
    default: "top",
  },
});

const visible = ref(false);

function close() {
  visible.value = false;
}
</script>

<template>
  <a-popover
    :class="className"
    v-model:visible="visible"
    trigger="click"
    :placement="placement"
  >
    <template #content>
      <div class="content grid grid-cols-2 gap-4">
        <div>
          <h1>Language</h1>
        </div>
        <div>
          <h1>Unit of Price</h1>
        </div>
      </div>
    </template>
    <a-button class="button"
      ><GlobeAltIcon class="h-5 w-5 text-blue-500" /></a-button
    >
  </a-popover>
</template>

<style lang="scss">
@import "@/styles/variables.scss";
.ant-popover {
  &-arrow {
    display: none;
  }
}

div {
  background-color: $blue;
  h1 {
    color: $darkGrey;
    font-weight: 400;
    margin: 0;
    font-size: 12px;
  }
}

.button {
  .icon {
    width: 10px;
  }
}
</style>
