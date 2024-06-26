<template>
  <footer>
    <div class="content-wrap footer-wrap flex space-btw">
      <div class="footer-logos flex">
        <a href="https://www.minregion.gov.ua/" target="_blank" class="footer-logos__left flex vertical-center">
          <img src="@/assets/images/footer-logo-l.svg" alt="Міністерство розвитку громад та територій України">
        </a>
        <div class="footer-logos__right flex vertical-center">
          <img src="@/assets/images/footer-logo-r.svg" alt="European Union">
        </div>
      </div>
      <div class="footer-terms flex vertical-center">
        <nav>
          <ul class="footer-menu flex">
            <li>
              <a href="https://data.gov.ua/organization/komunalne-pidpryiemstvo-prostir-innovatsiinykh-kreatsii-palats"
                target="_blank">
                {{ $t('footer.about') }}
              </a>
            </li>
            <li>
              <NuxtLink to='/term'>
                {{ $t('footer.policy') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to='/terms'>
                {{ $t('footer.terms') }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="social-icons flex vertical-center">
        <a href='https://www.instagram.com/potocki_palace_if_ua/' class="social-icons__item social-icons__item-instagram" target="_blank">
        </a>
        <a href='https://www.facebook.com/PotockiPalace.if.ua' class="social-icons__item social-icons__item-fb" target="_blank">
        </a>
      </div>
      <div class="developer-logo">
        <a href="https://webmil.eu/" class="developer-logo__item"></a>
        <a href="https://webmil.eu/" class="developer-logo__item-text">Створено Webmil Web production</a>
      </div>
      <div class="developer-copyright">
        &copy; {{ $t('footer.copyright') }} {{new Date().getFullYear()}}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer-wrap {
  padding: 36px 81px 24px!important;
  flex-wrap: wrap;

  .developer-copyright {
    flex-basis: 100%;
  }

  .footer-logos {
    &__left {
      margin-right: 33px;
    }
  }

  .social-icons {

    &__item {
      display: block;
      width: 24px;
      height: 24px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      &-instagram {
        background-image: url("~@/assets/images/ion_logo-instagram.svg");
        margin-right: 14px;
      }
      &-fb {
        background-image: url("~@/assets/images/la_facebook.svg");
      }
    }
  }

  .footer-terms {
    font-size: 1.125rem;

    .footer-menu {
      margin-bottom: 0;

      li:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  .developer-logo {
    width: 48px;
    height: 48px;

    &__item {
      display: block;
      width: 48px;
      height: 48px;
      background-image: url("~@/assets/images/webmil-logo.svg");
    }
    &__item-text {
      display: none;
    }
  }

  .developer-copyright {
    padding-top: 37px;
    font-size: .75rem;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 45px!important;

    .footer-terms {
      order: 1;
    }
    .social-icons {
      order: 2;
      margin-bottom: 30px!important;

      &__item {
        width: 31px;
        height: 31px;
      }
    }
    .footer-logos {
      order: 3;
      margin-bottom: 45px!important;
    }
    .developer-logo {
      order: 4;
      width: 100%;
      height: auto;
      text-align: center;

      &__item {
        display: none;
      }
      &__item-text {
        display: block;
      }
    }
    .developer-copyright {
      order: 5;
      padding-top: 20px;
    }

    .footer-menu {
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 30px!important;

      li {
        margin-right: 0!important;
        text-align: center;
      }

      li:not(:last-child) {
        margin-bottom: 20px;
      }

    }

  }
}
</style>
