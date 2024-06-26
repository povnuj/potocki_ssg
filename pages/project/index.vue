<template>
  <div class="project-page content-wrap">
    <div class="subpage-header flex space-btw">
      <div class="subpage-header__item">
        <router-link :to="'/'+$i18n.locale+'/projects'" class='router-back'>
          <BackButton v-html="$t('project.projectBtn')"></BackButton>
        </router-link>
        <div class="subpage-title">
          {{ $t('project.title') }}
        </div>
        <div class="subpage-text">
          {{ $t('project.subtitle') }}
        </div>
      </div>
      <div class="subpage-header__img">
        <img src="@/assets/images/citta-img-b.png" alt="">
      </div>
    </div>

    <section class="article-section">
      <div class="article-section-row flex space-btw">
        <div class="article-section-row__img">
          <img src="@/assets/images/project_images/1.webp" alt="" class="img-cover">
        </div>
        <p class="article-section-row__text">
          {{ $t('project.text_1') }}
        </p>
      </div>
      <div class="article-section-row flex space-btw img-right">
        <div class="article-section-row__img">
          <img src="@/assets/images/project_images/2.webp" alt="">
        </div>
        <p class="article-section-row__text">
          {{ $t('project.text_2') }}
        </p>
      </div>
      <div class="article-section-row flex space-btw">
        <div class="article-section-row__img">
          <img src="@/assets/images/project_images/3.webp" alt="">
        </div>
        <p class="article-section-row__text">
          {{ $t('project.text_3') }}
        </p>
      </div>
      <div class="article-section-row flex space-btw img-right">
        <div class="article-section-row__img">
          <img src="@/assets/images/project_images/4.webp" alt="">
        </div>
        <p class="article-section-row__text">
          {{ $t('project.text_4') }}
        </p>
      </div>
      <div class="article-section-row flex space-btw">
        <div class="article-section-row__img">

        </div>
        <p class="article-section-row__text">
          {{ $t('project.text_5') }}
        </p>
      </div>
      <div class="article-section-row flex space-btw img-right">
        <div class="article-section-row__img">
          <img src="@/assets/images/project_images/5.webp" alt="">
        </div>
        <p class="article-section-row__text">
          {{ $t('project.text_6') }}
        </p>
      </div>

    </section>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'

export default {
  name: "Project",
  layout: "default",
  data () {
    return {
      backBtnText:'Усі проєкти',
    }
  },
  components: {
    BackButton,
  },
}
</script>

<style lang='scss'>

.project-page {
  .subpage-text {
    max-width: 430px;
    font-size: 18px;
    line-height: 30px;
  }
  .subpage-header {

    &__img {
      padding-left: 20px;
      max-width: 634px;
      margin-right: -81px;
      position: relative;

      img {
        @media (max-width: 992px) {
          display: none;
        }
      }

      &:after {
        content: '';
        display: block;
        width: 324px;
        height: 324px;
        position: absolute;
        top: 0;
        left: -141px;
        background-image: url("~@/assets/images/project-frame.svg");

        @media (max-width: 1265px) {
          left: 20px;
        }
        @media (max-width: 992px) {
          display: none;
        }
      }
    }

    @media (max-width: 992px) {
      flex-direction: column;

      .subpage-title {
        padding: 15px 0;
        font-size: 32px;
        line-height: 44px;
      }

      .subpage-text {
        padding-bottom: 30px;
        width: 100%;
        max-width: 100%;
        font-size: 14px;
        line-height: 24px;
      }

      .subpage-header__img {
        padding-left: 0;
        width: 100%;
        max-width: 100%;
        height: 300px;
        background-image: url("~@/assets/images/project_images/header.png");
        background-repeat: no-repeat;
        background-position: right;
      }
    }
  }

  .article-section {
    &-row {
      align-items: center;

      @media (max-width: 992px) {
        flex-direction: column;
        padding-top: 0;

        .article-section-row__text {
          order: 0;
          margin-top: 30px;
          font-size: 14px;
          line-height: 24px;
          width: 100%;
          max-width: 100%;
        }

        .article-section-row__img {
          order: 1;
          width: 100%;
          max-width: 100%;
          margin-left: 0;
          margin-top: 30px;
          text-align: center;

          img {
            height: 190px;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>