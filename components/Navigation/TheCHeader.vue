<template>
  <header id="mainHeader" class='flex header-white c-header'> <!--v-bind:class="{ active: isMain }">-->
    <div class="content-wrap header-wrap flex space-btw">
      <nav class="flex space-btw">
        <div class="header__logo">
          <NuxtLink :to="'/'+$i18n.locale+'/citta-landing'" @click="scrollTop">
            <img alt="Platform Citta Ideale" :src='logoCitta' id="cittaLogo">
          </NuxtLink>
        </div>
        <div class="header__menu">
          <ul class="menu-list flex">
            <li class="fw-700">
              <a :href="'/'+$i18n.locale">{{ $t('navC.main') }}</a>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-implementation'">{{ $t('navC.implementation') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-congress'">{{ $t('navC.congress') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-hub'" class="uppercase">{{ $t('navC.hub') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-museum'">{{ $t('navC.museum') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-routes'">{{ $t('navC.routes') }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div id='mobileMenu' class="header__menu-mobile">
          <div class="header__menu-mobile__icon"
               @click="toggleMenu()"
          >
            <i class="fa-solid fa-bars menu-icon"></i>
            <i class="fa-solid fa-xmark close-icon"></i>
          </div>
          <ul class="menu-list flex">
            <li id='langSwitchMob' class="lang-switch-mob">
              <span class="uppercase fw-700 active" @click="switchLang('ua')">Укр</span>
              <span class="uppercase" @click="switchLang('en')">Eng</span>
              <span class="uppercase" @click="switchLang('pl')">Pol</span>
            </li>
             <li class="fw-700">
              <a :href="'/'+$i18n.locale">{{ $t('navC.main') }}</a>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-implementation'">{{ $t('navC.implementation') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-congress'">{{ $t('navC.congress') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-hub'" class="uppercase">{{ $t('navC.hub') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-museum'">{{ $t('navC.museum') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/c-routes'">{{ $t('navC.routes') }}</NuxtLink>
            </li>
          </ul>
        </div>


      </nav>
      <div class="lang-switcher">
        <div class="dropdown fw-700">
          <a class="btn btn-secondary dropdown-toggle fw-700" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t('lang') }}
            <i class="fa-solid fa-chevron-down"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><div class="dropdown-item fw-700" @click="switchLang('ua')">Укр</div></li>
            <li><div class="dropdown-item fw-700" @click="switchLang('en')">Eng</div></li>
            <li><div class="dropdown-item fw-700" @click="switchLang('pl')">Pol</div></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  data() {
    return {
      logoCitta: require ('@/assets/images/citta-ideale-logo.svg')
    }
  },
  watch: {
    '$route' (to, from) {
      if(to !== from ) {
        if (this.$route.path === '/'+this.$i18n.locale+'/c-museum') {
          this.logoCitta = require ('@/assets/images/citta/museum/museum-logo.svg')
        } else {
          this.logoCitta = require ('@/assets/images/citta-ideale-logo.svg')
        }
      }
      if (window.matchMedia("(max-width: 1200px)").matches) {
        document.getElementById('mainHeader').classList.remove('expand')
        document.body.classList.remove('expanded-menu')
      }
    }
  },
  methods: {
    toggleMenu() {
      const menu = document.getElementById('mainHeader')
      menu.classList.toggle('expand')
      document.body.classList.toggle('expanded-menu')
    },
    switchLang(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
      if (document.getElementById('langSwitchMob')) {
        let langMob = document.querySelectorAll('#langSwitchMob span')
        for (let item of langMob){
          item.classList.remove('active')
        }
        if(localStorage.getItem('lang') === 'ua') {
          langMob[0].classList.add('active')
        }
        if(localStorage.getItem('lang') === 'en') {
          langMob[1].classList.add('active')
        }
        if(localStorage.getItem('lang') === 'pl') {
          langMob[2].classList.add('active')
        }
      }
      console.log(this.$route.name.split('___')[0]+'___'+this.$i18n.locale)
      this.$router.push({name: this.$route.name.split('___')[0]+'___'+this.$i18n.locale, query: this.$route.query})
      //this.$router.replace({params: {lang: this.$i18n.locale}})
    },
    scrollTop() {
      if (this.$route.path === '/'+$i18n.locale+'/citta-landing') {
        location.reload()
      }
    },
    getLocale() {
      let langMob = document.querySelectorAll('#langSwitchMob span')
      for (let item of langMob){
        item.classList.remove('active')
      }
      if(localStorage.getItem('lang') === 'ua') {
        langMob[0].classList.add('active')
      }
      if(localStorage.getItem('lang') === 'en') {
        langMob[1].classList.add('active')
      }
      if(localStorage.getItem('lang') === 'pl') {
        langMob[2].classList.add('active')
      }
    }
  },
  mounted() {
    this.getLocale()
  }
}
</script>

<style scoped lang='scss'>
.c-header {
  background-color: #fff !important;
  .menu-list {
    li:not(:last-child) {
      margin-right: 30px;
    }
  }
}
</style>
