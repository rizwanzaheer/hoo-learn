<script setup>
import LogoWhite from "@/assets/images/logo_white.png";
import FooterSocials from "./FooterSocials.vue";
import FooterMenuLinks from "./FooterMenuLinks.vue";

import {
  FOOTER_MENU_ITEMS_PRODUCT,
  FOOTER_MENU_ITEMS_ABOUT,
  FOOTER_MENU_ITEMS_NOTICE,
  FOOTER_MENU_ITEMS_SUPPORT,
  FOOTER_MENU_ITEMS_HELP,
} from "@/resources/constants/footerMenuItems";
import LanguageCurrencySelect from "../LanguageCurrencySelect.vue";
</script>

<template>
  <footer class="footer flex justify-center">
    <div class="flex justify-between px-10 py-6 w-[1280px]">
      <div class="footer__left">
        <img class="footer__left-logo" :src="LogoWhite" />
        <div class="footer__left-contact">
          <a>Support Email: support@hoo.com</a>
          <div class="mx-2">|</div>
          <a>Business Email: business@hoo.com</a>
        </div>
        <FooterSocials className="mt-2 mb-[16px]" />
        <LanguageCurrencySelect />
      </div>
      <div class="footer__right">
        <FooterMenuLinks :links="FOOTER_MENU_ITEMS_PRODUCT" />
        <FooterMenuLinks :links="FOOTER_MENU_ITEMS_ABOUT" />
        <FooterMenuLinks :links="FOOTER_MENU_ITEMS_NOTICE" />
        <FooterMenuLinks :links="FOOTER_MENU_ITEMS_SUPPORT" />
        <FooterMenuLinks :links="FOOTER_MENU_ITEMS_HELP" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.footer {
  background-color: $blue;

  &__left {
    margin-right: 100px;
    &-logo {
      min-width: 55px;
      width: 55px;
    }
    &-contact {
      display: flex;
      margin: 12px 0;
      font-size: 12px;
      color: $darkGrey;
      a {
        color: $darkGrey;
      }
    }
  }

  &__right {
    display: flex;
  }
}
</style>
