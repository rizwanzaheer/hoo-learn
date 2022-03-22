<script setup>
import weibo from "../../assets/images/socials/weibo.png";
import twitter from "../../assets/images/socials/twitter.png";
import telegram from "../../assets/images/socials/telegram.png";
import medium from "../../assets/images/socials/medium.png";
import reddit from "../../assets/images/socials/reddit.svg";
import facebook from "../../assets/images/socials/facebook.svg";
import instagram from "../../assets/images/socials/instagram.svg";
import linkedIn from "../../assets/images/socials/linkedIn.png";

defineProps({
  className: {
    type: String,
    default: "",
  },
  style: {
    type: String,
    default: "",
  },
});

const socials = [
  {
    img: weibo,
    link: "https://weibo.com/hoowallet",
  },
  {
    img: twitter,
    link: "https://twitter.com/Hoo_exchange",
  },
  {
    img: telegram,
    link: "https://t.me/chaince_foreign_group",
  },
  {
    img: medium,
    link: "https://medium.com/@Hoo_exchange",
  },
  {
    img: reddit,
    link: "https://www.reddit.com/r/HooExchange/",
  },
  {
    img: facebook,
    link: "https://fb.me/hooexchange",
  },
  {
    img: instagram,
    link: "https://www.instagram.com/hooexchange/",
  },
  {
    img: linkedIn,
    link: "https://www.linkedin.com/company/hooexchange",
  },
];
</script>

<template>
  <div :class="`socials flex items-center ${className}`" :style="style">
    <div class="socials__item" v-for="(social, index) in socials" :key="index">
      <a :href="social.link">
        <img :src="social.img" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.socials {
  &__item {
    &:first-child {
      margin-left: 0;
    }
    margin-left: 14px;
    img {
      min-width: 20px;
      width: 20px;
    }
  }
}
</style>
