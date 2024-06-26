<template>
  <div class="notfound">
    <div class="container">
      <div class="notfound_inner">
        <div class="notfound_text">
          <div class="notfound_title">{{ $t("404_page.title") }}</div>
          <div class="notfound_description notfound_description-title">
            {{ $t("404_page.subtitle") }}
          </div>
          <div class="notfound_description">{{ $t("404_page.text") }}</div>
          <div
            class="notfound_btn btn__general btn__general-black"
          >
          <nuxt-link to="/">
            {{ $t("404_page.button") }}
            
            <svg
              width="31"
              height="8"
              viewBox="0 0 31 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z"
                fill="#2E3139"
              />
            </svg>
            </nuxt-link>
          </div>
          <div class="notfound_bg"></div>
        </div>
        <div class="notfound_error">404</div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import { computed, reactive } from "vue";
// import {useHead} from "@vueuse/head";

export default {
  name: "NotFound",
   head() {
      return {
        title: this.$t("meta.404.title"),
        htmlAttrs: {
          lang: this.$i18n.locale,
          },
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: this.$t("meta.404.description")
          },
          {
            name: "keywords",
            content: this.$t("meta.404.keywords")
          }
        ]
      }
    },
  setup() {
    const siteData = reactive({
      title: "Page not found | Wemil Web-Production",
      robots: "index",
    });

    /*  useHead({
          title: computed(() => siteData.title),
          meta: [
            {
              name: `robots`,
              content: computed(() => siteData.robots)
            }
          ]
        }) */
  },
};
</script>
    
    <style lang="scss" scoped>
@import "../assets/styles/global.css";

.notfound {
  padding-top: 180px;

  @media (max-width: 991px) {
    padding-top: 120px;
  }

  @media (max-width: 575px) {
    padding-top: 96px;
  }

  .container {
    margin: 0 auto;

    @media (max-width: 575px) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  @media (min-width: 576px) {
    .notfound_description-title {
      margin-bottom: 30px;
    }
  }

  &_inner {
    position: relative;
  }

  &_text {
    position: relative;
    z-index: 100;
  }
  &_title {
    font-weight: 700;
    font-size: 96px;
    line-height: 84px;
    color: #2e3139;
    letter-spacing: 2px;
    margin-bottom: 40px;

    @media (max-width: 991px) {
      font-size: 72px;
      line-height: 72px;
    }

    @media (max-width: 575px) {
      font-size: 48px;
      line-height: 60px;
      margin-bottom: 32px;
    }
  }
  &_description {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    max-width: 780px;

    @media (max-width: 991px) {
      font-size: 16px;
      line-height: 26px;
    }

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 24px;
    }
  }
  &_bg {
    position: absolute;
    width: 100%;
    height: calc(100% + 70px);
    left: 0;
    top: 0;
    backdrop-filter: blur(20px);
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -o-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px);
    z-index: -2;

    @media (max-width: 575px) {
      width: calc(100% + 24px);
      margin-left: -12px;
      margin-right: -12px;
      backdrop-filter: blur(10px);
      -webkit-filter: blur(10px);
      -moz-filter: blur(10px);
      -o-filter: blur(10px);
      -ms-filter: blur(10px);
      filter: blur(10px);
    }
  }
  &_error {
    font-family: "Oswald", sans-serif;
    position: absolute;
    font-size: 296px;
    line-height: 296px;
    letter-spacing: 4px;
    color: #00ffff;
    right: 500px;
    bottom: -220px;

    @media (max-width: 1399px) {
      right: 350px;
    }

    @media (max-width: 1199px) {
      right: 180px;
    }

    @media (max-width: 991px) {
      right: 40px;
      font-size: 260px;
      line-height: 260px;
    }

    @media (max-width: 767px) {
      right: 20px;
    }

    @media (max-width: 575px) {
      bottom: -165px;
      font-size: 158px;
      line-height: 158px;
    }

    &::before,
    &::after {
      content: "404";
      position: absolute;
    }
    &::before {
      left: -26px;
      top: 0;
      color: #ff4141;

      @media (max-width: 575px) {
        left: -18px;
      }
    }
    &::after {
      left: -15px;
      top: 0;
      color: #2e3139;

      @media (max-width: 575px) {
        left: -8px;
      }
    }
  }

  &_btn {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 1px;
    color: #2e3139;
    margin-top: 72px;

    @media (max-width: 991px) {
      font-size: 20px;
      line-height: 30px;
      margin-top: 56px;
    }

    @media (max-width: 575px) {
      display: flex;
      max-width: 240px;
      font-size: 18px;
      line-height: 28px;
      margin-top: 36px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
    