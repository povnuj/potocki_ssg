<template>
  <div class="contacts-page content-wrap">
    <div class="page-header flex space-btw">
      <div class="item-l flex">
        <div class="page-title">
          {{ $t('contacts.title') }}
        </div>
      </div>
      <div class="page-header-img"></div>
    </div>

    <section class="contacts-section">
      <div class="contacts-wrap">
        <div class="contacts-row">
          <div class="contacts-row__item">
            <div class="contacts-row__item-title">
              {{ $t('contacts.adressTitle') }}
            </div>
            <div class="contacts-row__item-info fw-700">
              {{ $t('contacts.adressInfo') }}
            </div>
          </div>
        </div>
        <div class="contacts-row flex">
          <div class="contacts-row__item">
            <div class="contacts-row__item-title">
              {{ $t('contacts.phone') }}
            </div>
            <div class="contacts-row__item-info fw-700" v-for="(contact, index) in contactList" v-bind:key="index">
              <a v-bind:href="'tel:' + contact.attributes.phone">{{ contact.attributes.phone }}</a>
            </div>
          </div>
          <div class="contacts-row__item">
            <div class="contacts-row__item-title">
              {{ $t('contacts.email') }}
            </div>
            <div class="contacts-row__item-info fw-700" v-for="(contact, index) in contactList" v-bind:key="index">
              <a v-bind:href="'mailto:' + contact.attributes.email">{{ contact.attributes.email }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
const { t, locale } = useI18n();
//const localePath = useLocalePath()

useSeoMeta({
  title: t('contacts.title'),
  ogTitle: t('contacts.title'),
  description: t('contacts.title'),
  ogDescription: t('contacts.title'),
  ogImage: 'https://picpalace.com.ua/Potocki_openGraph.png',
  twitterCard: 'summary_large_image',
});

definePageMeta({
  layout: 'palace',
});
</script>

<script>
export default {
  data() {
    return {
      config: useRuntimeConfig(),
      contactList: []
    }
  },
  beforeMount() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      try {
        const response = await fetch(this.config.public.VUE_APP_API + '/api/v1/contacts');
        const data = await response.json();
        this.contactList = data.data;
      } catch (error) {
        console.error('Error fetching contact List:', error);
      }
    },
  }
};
</script>


<style lang='scss' scoped>
.contacts-page {
  width: 100%;

  @media (min-width: 991px) {
    min-height: calc(100vh - 170px);
  }

  .page-header {

    .page-title {
      align-self: flex-end;
      padding: 0;
    }

    &-img {
      width: 45%;
      min-width: 570px;
      height: 228px;
      background-image: url("@/public/images/contacts-header.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  .contacts-section {
    padding: 66px 0 114px;
    font-size: 18px;
    line-height: 30px;

    .contacts-row:first-child {
      margin-bottom: 36px;
    }

    .contacts-row__item:first-child {
      margin-right: 93px;
    }

    .contacts-row__item-title {
      padding-bottom: 12px;
    }
  }

  @media (max-width: 992px) {
    .page-header {
      flex-wrap: wrap;
      flex-direction: column;
      padding-top: 84px;

      &-img {
        align-self: flex-end;
        width: 300px;
        min-width: 300px;
        height: 120px;
        background-size: contain;
      }

      .item-l {
        order: 2;
      }

      .page-title {
        width: 100%;
        padding-top: 30px;
        font-size: 32px;
        line-height: 44px;
      }
    }

    section.contacts-section {
      padding-top: 15px;
      padding-bottom: 30px;
      font-size: 14px;
      line-height: 24px;

      .contacts-row:first-child {
        margin-bottom: 30px;
      }

      .contacts-row__item-title {
        padding-bottom: 6px;
      }

      .contacts-row__item:first-child {
        margin-right: 65px;
      }

    }
  }

}
</style>
