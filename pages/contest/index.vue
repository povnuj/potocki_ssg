<template>
    <div class="contest-page content-wrap">
      <div class="page-header">
        <h1 class="page-title">{{ $t('contest.header.title') }}</h1>
        <div class="page-description">{{ $t('contest.header.description') }}</div>
        <div class="page-anounce">
          <div class="anounce-date">
            <div class="anounce-date-start">12.07.2023</div>
            <div>|</div>
            <div class="anounce-date-end">30.01.2024</div>
          </div>
          <div class="anounce-img"></div>
        </div>
      </div>
  
      <section class="winner-section">
        <h2 class="">{{ $t('contest.winners.title') }}</h2>
        <div class="winner__prize-img"></div>
          <h3 class="">{{ $t('contest.winners.sub_title') }}</h3>
        <div class="winner">
          <div class="winner__second" >
            <h4>{{ $t('contest.winners.possitions.second.title') }}</h4>
            <p class="font-p16 winner__second__num">210704</p>
                <a class="font-p16-bold-link" :href="$t('contest.winners.possitions.second.210704.link.url')" target="_blank">{{ $t('contest.winners.possitions.second.210704.link.text') }}</a>
            <div class="winner__second__col">
              <div>
                <p class="font-p16 winner__second__col-location">{{ $t('contest.winners.possitions.second.210704.country') }}</p>
              </div>
              <div>
                <ul>
                  <li v-for="(content, index) in $tm('contest.winners.possitions.second.210704.list')" :key="index">
                    <p class="winner__second__col-title">{{ $rt(content) }}</p>
                    <p v-html=" $t('contest.winners.possitions.second.210704.work_list[' + index + ']')"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="winner__second" >
            <h4>{{ $t('contest.winners.possitions.second.title') }}</h4>
            <p class="font-p16 winner__second__num">505375</p>
                <a class="font-p16-bold-link" :href="$t('contest.winners.possitions.second.505375.link.url')" target="_blank">{{ $t('contest.winners.possitions.second.210704.link.text') }}</a>
            <div class="winner__second__col">
              <div>
                <p class="font-p16 winner__second__col-location">{{ $t('contest.winners.possitions.second.505375.country') }}</p>
              </div>
              <div>
                <ul>
                  <li v-for="(content, index) in $tm('contest.winners.possitions.second.505375.list')" :key="index">
                    <p class="winner__second__col-title">{{ $rt(content) }}</p>
                    <p v-html=" $t('contest.winners.possitions.second.505375.work_list[' + index + ']')"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="winner__third" >
            <h4>{{ $t('contest.winners.possitions.third.title') }}</h4>
            <p class="font-p16 winner__third__num">134340</p>
                <a class="font-p16-bold-link" :href="$t('contest.winners.possitions.third.134340.link.url')" target="_blank">{{ $t('contest.winners.possitions.second.210704.link.text') }}</a>
            <div class="winner__third__col">
              <div>
                <p class="font-p16 winner__third__col-location">{{ $t('contest.winners.possitions.third.134340.country') }}</p>
              </div>
              <div>
                <ul>
                  <li v-for="(content, index) in $tm('contest.winners.possitions.third.134340.list')" :key="index">
                    <p class="winner__third__col-title">{{ $rt(content) }}</p>
                    <p v-html=" $t('contest.winners.possitions.third.134340.work_list[' + index + ']')"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="winner__third winner__third-two" >
            <h4>{{ $t('contest.winners.possitions.third.title') }}</h4>
            <p class="font-p16  winner__third__num">204080</p>
                <a class="font-p16-bold-link" :href="$t('contest.winners.possitions.third.204080.link.url')" target="_blank">{{ $t('contest.winners.possitions.second.210704.link.text') }}</a>
            <div class="winner__third__col">
              <div>
                <p class="font-p16 winner__third__col-location">{{ $t('contest.winners.possitions.third.204080.country') }}</p>
              </div>
              <div>
                <ul>
                  <li v-for="(content, index) in $tm('contest.winners.possitions.third.204080.list')" :key="index">
                    <p class="winner__third__col-title">{{ $rt(content) }}</p>
                    <p v-html=" $t('contest.winners.possitions.third.204080.work_list[' + index + ']')"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="winner__honors" >
            <h4>{{ $t('contest.winners.honors.title') }}</h4>
            <p class="font-p16  winner__honors__num">120989</p>
                <a class="font-p16-bold-link" :href="$t('contest.winners.honors.120989.link.url')" target="_blank">{{ $t('contest.winners.possitions.second.210704.link.text') }}</a>
            <div class="winner__honors__col">
              <div>
                <p class="font-p16 winner__honors__col-location">{{ $t('contest.winners.honors.120989.country') }}</p>
              </div>
              <div>
                <ul>
                  <li v-for="(content, index) in $tm('contest.winners.honors.120989.list')" :key="index">
                    <p class="winner__honors__col-title">{{ $rt(content) }}</p>
                    <p v-html=" $t('contest.winners.honors.120989.work_list[' + index + ']')"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="winner__honors" >
            <h4>{{ $t('contest.winners.honors.title') }}</h4>
            <p class="font-p16 winner__honors__num">646248</p>
                <a class="font-p16-bold-link" :href="$t('contest.winners.honors.646248.link.url')" target="_blank">{{ $t('contest.winners.possitions.second.210704.link.text') }}</a>
            <div class="winner__honors__col">
              <div>
                <p class="font-p16 winner__honors__col-location">{{ $t('contest.winners.honors.646248.country') }}</p>
              </div>
              <div>
                <ul>
                  <li v-for="(content, index) in $tm('contest.winners.honors.646248.list')" :key="index">
                    <p class="winner__honors__col-title">{{ $rt(content) }}</p>
                    <p v-html=" $t('contest.winners.honors.646248.work_list[' + index + ']')"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="winner__honors" >
            <h4>{{ $t('contest.winners.honors.title') }}</h4>
            <p class="font-p16 winner__honors__num">031301</p>
                <a class="font-p16-bold-link" :href="$t('contest.winners.honors.031301.link.url')" target="_blank">{{ $t('contest.winners.possitions.second.210704.link.text') }}</a>
            <div class="winner__honors__col">
              <div>
                <p class="font-p16 winner__honors__col-location">{{ $t('contest.winners.honors.031301.country') }}</p>
              </div>
              <div>
                <ul>
                  <li v-for="(content, index) in $tm('contest.winners.honors.031301.list')" :key="index">
                    <p class="winner__honors__col-title">{{ $rt(content) }}</p>
                    <p v-html=" $t('contest.winners.honors.031301.work_list[' + index + ']')"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
  
      </section>
  
      <section class="comment_jury-section">
        <h3 class="">{{ $t('contest.comment_jury.title') }}</h3>
        <div class="comment_jury__content font-p16">
          <ul>
            <li v-for="(content, index) in $tm('contest.comment_jury.comment')" :key="index" @click="showComment">
              <div  class="comment_jury__content__comment_container">
                <div class="comment_jury__content__autor">{{ $t('contest.comment_jury.autor['+index +']') }}</div>
              </div>
              <p v-html="$rt(content)"></p>
              <div class="comment_jury__content__show_btn">{{ $t('contest.comment_jury.btn') }}</div>
              <div class="comment_jury__content__hide_btn">{{ $t('contest.comment_jury.btn_hide') }}</div>
            </li>
          </ul>
        </div>
      </section>
  
      <section class="contest-section section-padding">
        <div class="contest-task">
          <h3 class="contest-task-title font-h3">{{ $t('contest.task.title') }}</h3>
          <p class="contest-task-description font-roboto">{{ $t('contest.task.description') }}</p>
          <div class="contest-task-sub-title font-roboto-18">{{ $t('contest.task.subtitle') }}</div>
          <ul class="contest-task-list font-roboto">
            <li>{{ $t('contest.task.list[0]') }}</li>
            <li>{{ $t('contest.task.list[1]') }}</li>
            <li>{{ $t('contest.task.list[2]') }}</li>
            <li>{{ $t('contest.task.list[3]') }}</li>
            <li>{{ $t('contest.task.list[4]') }}</li>
            <li>{{ $t('contest.task.list[5]') }}</li>
            <li>{{ $t('contest.task.list[6]') }}</li>
          </ul>
        </div>
        <div class="contest-schedule">
          <h3 class="contest-schedule-title font-h3">{{ $t('contest.schedule.title') }}</h3>
          <ul class="contest-schedule-list">
            <li>
              <div class="contest-schedule-list-date-block">
                <div class="contest-schedule-list-date font-roboto-18">{{ $t('contest.schedule.list[0].date') }}</div>
                <div class="contest-schedule-list-time font-roboto">{{ $t('contest.schedule.list[0].time') }}</div> 
              </div>
              <div class="contest-schedule-list-description font-roboto" v-html="$t('contest.schedule.list[0].description')"></div>
            </li>
            <li>
              <div class="contest-schedule-list-date-block">
                <div class="contest-schedule-list-date font-roboto-18">{{ $t('contest.schedule.list[1].date') }}</div>
                <div class="contest-schedule-list-time font-roboto">{{ $t('contest.schedule.list[1].time') }}</div> 
              </div>
              <div class="contest-schedule-list-description font-roboto">{{ $t('contest.schedule.list[1].description') }}</div>
            </li>
            <li>
              <div class="contest-schedule-list-date-block">
                <div class="contest-schedule-list-date font-roboto-18">{{ $t('contest.schedule.list[2].date') }}</div>
                <div class="contest-schedule-list-time font-roboto">{{ $t('contest.schedule.list[2].time') }}</div> 
              </div>
              <div class="contest-schedule-list-description font-roboto">{{ $t('contest.schedule.list[2].description') }}</div>
            </li>
            <li>
              <div class="contest-schedule-list-date-block">
                <div class="contest-schedule-list-date font-roboto-18">{{ $t('contest.schedule.list[3].date') }}</div>
                <div class="contest-schedule-list-time font-roboto">{{ $t('contest.schedule.list[3].time') }}</div> 
              </div>
              <div class="contest-schedule-list-description font-roboto">{{ $t('contest.schedule.list[3].description') }}</div>
            </li>
            <li>
              <div class="contest-schedule-list-date-block">
                <div class="contest-schedule-list-date font-roboto-18">{{ $t('contest.schedule.list[4].date') }}</div>
                <div class="contest-schedule-list-time font-roboto">{{ $t('contest.schedule.list[4].time') }}</div> 
              </div>
              <div class="contest-schedule-list-description font-roboto" v-html="$t('contest.schedule.list[4].description')"></div>
            </li>
          </ul>
          <div class="contest-schedule-conditions-block">
            <div class="contest-schedule-conditions">{{ $t('contest.schedule.free') }}</div>
            <div class="contest-schedule-conditions">{{ $t('contest.schedule.free1') }}</div>
          </div>
        </div>
      </section>
      
      <section class="contest-reward-section section-padding">
        <h3 class="contest-reward-title font-h3">{{ $t('contest.reward.title') }}</h3>
        <div class="contest-reward-block">
          <div class="contest-reward-prize" :class="{ 'contest-reward-prize-pl': $i18n.locale === 'pl'  }">
            <div class="contest-reward-prize-img"></div>
            <ul>
              <li>
                <div class="contest-reward-prize-name font-roboto">{{ $t('contest.reward.rewards1[0]') }}</div>
                <div class="contest-reward-prize-summ">
                  <div class="contest-reward-prize-reward font-roboto-18">{{ $t('contest.reward.rewards1-prize[0]') }}</div>
                  <div class="contest-reward-prize-currency font-roboto-18">{{ $t('contest.reward.currency') }}</div>
                </div>
              </li>
              <li>
                <div class="contest-reward-prize-name font-roboto">{{ $t('contest.reward.rewards1[1]') }}</div>
                <div class="contest-reward-prize-summ">
                  <div class="contest-reward-prize-reward font-roboto-18">{{ $t('contest.reward.rewards1-prize[1]') }}</div>
                  <div class="contest-reward-prize-currency font-roboto-18">{{ $t('contest.reward.currency') }}</div>
                </div>
              </li>
              <li>
                <div class="contest-reward-prize-name font-roboto">{{ $t('contest.reward.rewards1[2]') }}</div>
                <div class="contest-reward-prize-summ">
                  <div class="contest-reward-prize-reward font-roboto-18">{{ $t('contest.reward.rewards1-prize[2]') }}</div>
                  <div class="contest-reward-prize-currency font-roboto-18">{{ $t('contest.reward.currency') }}</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="contest-reward-honor">
            <div class="contest-reward-honor-img"></div>
            <ul>
              <li>
                <div class="contest-reward-honor-name font-roboto">{{ $t('contest.reward.rewards2[0]') }}</div>
                <div class="contest-reward-honor-reward font-roboto-18">{{ $t('contest.reward.rewards2-prize[0]') }}</div>
                <div class="contest-reward-honor-currency font-roboto-18">{{ $t('contest.reward.currency') }}</div>
              </li>
              <li>
                <div class="contest-reward-honor-name font-roboto">{{ $t('contest.reward.rewards2[1]') }}</div>
                <div class="contest-reward-honor-reward font-roboto-18">{{ $t('contest.reward.rewards2-prize[0]') }}</div>
                <div class="contest-reward-honor-currency font-roboto-18">{{ $t('contest.reward.currency') }}</div>
              </li>
              <li>
                <div class="contest-reward-honor-name font-roboto">{{ $t('contest.reward.rewards2[2]') }}</div>
                <div class="contest-reward-honor-reward font-roboto-18">{{ $t('contest.reward.rewards2-prize[0]') }}</div>
                <div class="contest-reward-honor-currency font-roboto-18">{{ $t('contest.reward.currency') }}</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section class="prize_redistribution-section">
        <h3 class="font-h3">{{ $t('contest.prize_redistribution.title') }}</h3>
        <div class="prize_redistribution-section__first">
          <p class="font-p16">{{ $t('contest.prize_redistribution.text') + " " + $t('contest.prize_redistribution.prize.first.title') + " " + $t('contest.prize_redistribution.prize.first.list[0]') }}</p>
        </div>
        
        <div class="prize_redistribution">
          <div class="prize_redistribution__col" :class="{ 'prize_redistribution__col-pl': $i18n.locale === 'pl'  }">
            <div class="prize_redistribution__col__prize-img">
              <img src="@/public/images/reward.svg" alt="prize img">
            </div>
            <div>
              <ul>
                <li v-for="(content, index) in $tm('contest.prize_redistribution.prize.second.list')" :key="index">
                  <p class="prize_redistribution__col-title font-p16">{{ $t('contest.prize_redistribution.prize.second.title') }}</p>
                  <p class="prize_redistribution__col-text font-roboto-18">{{  $rt(content) }}</p>
                </li>
              </ul>
              <ul>
                <li v-for="(content, index) in $tm('contest.prize_redistribution.prize.third.list')" :key="index">
                 <p class="prize_redistribution__col-title font-p16">{{ $t('contest.prize_redistribution.prize.third.title') }}</p>
                 <p class="prize_redistribution__col-text font-roboto-18">{{  $rt(content) }}</p>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="prize_redistribution__col">
            <div class="prize_redistribution__col__prize-img">
              <img src="@/public/images/star.svg" alt="star img">
            </div>
            <ul>
              <li v-for="(content, index) in $tm('contest.prize_redistribution.prize.honors.list')" :key="index">
               <p class="prize_redistribution__col-title font-p16">{{ $t('contest.prize_redistribution.prize.honors.title') }}</p>
               <p class="prize_redistribution__col-text font-roboto-18">{{  $rt(content) }}</p>
              </li>
            </ul>
          </div>
        </div>
  
      </section>
      
      <section class="contest-jury">
        <div class="contest-jury__members-container">
          <div class="contest-jury__title font-h3">{{$t(`contest.jury.title`)}}</div>
          <div class="contest-jury__members">
            <div v-for="(content, index) in $tm('contest.jury.members')"  v-bind:key="index" class="contest-jury__members__table">
              <div class="contest-jury__members__table-item font-roboto">
                <div class="contest-jury__members__table-item-img">
                  <img :src="$rt(content.img)"  alt="photo">
                </div>
                <div class="contest-jury__members__table-item-title font-roboto-18">{{$rt(content.name)}}</div>
                <div class="contest-jury__members__table-item-inf">{{$rt(content.inf)}}</div>
                <div class="contest-jury__members__table-item-location">{{$rt(content.location)}}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contest-jury__map-container">
          <div class="contest-jury__map">
            <div class="contest-jury__title font-roboto-18">{{map.title}}</div>
            <img :src="'/images/jury/map/'+map.img"  alt="map">
          </div>
          <div class="contest-jury__scheme">
            <div class="contest-jury__scheme-title font-roboto-18">{{scheme.title[0]}}</div>
            <div class="contest-jury__scheme-title font-roboto-18">{{scheme.title[1]}}</div>
            <img :src="'/images/jury/map/'+scheme.img"  alt="scheme">
          </div>
        </div>
      </section>
   
      <section class="contest-sponsors-section section-padding">
        <div class="contest-sponsors">
          <h3 class="contest-sponsors-title font-h3">{{ $t('contest.sponsors.sponsor.title') }}</h3>
          <div class="contest-sponsors-items-container">
           <div class="contest-sponsors-items contest-sponsors-items-one">
            <div class="contest-sponsors-items-img">
              <img src="@/public/images/sponsors/sponsor1.png" alt="sponsor img">
            </div>
            <div class="contest-sponsors-items-name font-roboto">{{ $t('contest.sponsors.sponsor.one') }}</div>
           </div>
           <div class="contest-sponsors-items contest-sponsors-items-two" :class="{ 'en-sponsor': $i18n.locale === 'en'  }">
              <div class="contest-sponsors-items-img">
                <img src="@/public/images/sponsors/sponsor2.png" alt="sponsor img">
              </div>
             <div class="contest-sponsors-items-name font-roboto">{{ $t('contest.sponsors.sponsor.two') }}</div>
           </div>
          </div>
        </div>
        <div class="contest-suport">
          <h3 class="contest-suport-title font-h3">{{ $t('contest.sponsors.suport.title') }}</h3>
          <div class="contest-suport-items-container">
            <div class="contest-suport-items contest-suport-items-one">
              <div class="contest-suport-items-img">
                <img src="@/public/images/sponsors/sponsor3.png" alt="suport img">
              </div>
              <div class="contest-suport-items-name font-roboto">{{ $t('contest.sponsors.suport.one') }}</div>
            </div>
          </div>
        </div>
        <div class="contest-patron">
          <h3 class="contest-patron-title font-h3">{{ $t('contest.sponsors.patron.title') }}</h3>
          <div class="contest-patron-items-container">
            <div class="contest-patron-items contest-patron-items-one">
              <div class="contest-patron-items-img">
                <img src="@/public/images/sponsors/patron.png" alt="patron img">
              </div>
              <div class="contest-patron-items-name font-roboto">{{ $t('contest.sponsors.patron.one') }}</div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="contest-media-section section-padding">
        <div class="contest-media">
          <div class="media-title font-h3">{{ $t('contest.media.title') }}</div>
          <div class="img-container">
            <a href="https://www.architekturaibiznes.pl/konkursy/kategoria/aktualne-konkursy" target="_blank">
              <img class="img-ab" src="@/public/images/media/ab.svg" alt="ab">
            </a>
            <a href="https://architektura.muratorplus.pl/konkursy/miedzynarodowy-konkurs-na-adaptacje-zalozenia-palacu-potockich-w-iwano-frankiwsku-aa-CX5j-bMM2-uNnA.html" target="_blank">
              <img class="img-a" src="@/public/images/media/a.svg" alt="a">
            </a>
            <a href="https://bustler.net/competitions/search/Potocki%20palace/9234/2023-nternational-architecture-competition-reinterpreting-the-space?fbclid=IwAR3S_DOVYS1IKNnfwGf3ahebyhhGCQG9GyK-EWCMssNh3xzWLG6VSryWUU0" target="_blank">
              <img class="img-bustler" src="@/public/images/media/bustler.svg" alt="bustler">
            </a>
            <a href="http://konkursykreatywne.pl/miedzynarodowy-konkurs-architektoniczny-reinterpretacja-przestrzeni/" target="_blank">
              <img class="img-kk" src="@/public/images/media/kk.svg" alt="kk">
            </a>
            <a href="https://www.architectural-review.com/competitions/competitions-competition-announcements/competition-potocki-palace-ukraine?fbclid=IwAR2y-rWvA-lRI82UcFCrWA_XAvA6RWP9SRGknBdGWEWJ9-HiaJhog4V0Jb4" target="_blank">
              <img class="img-ar" src="@/public/images/media/ar.svg" alt="ar">
            </a>
            <a href="https://www.architectsjournal.co.uk/competitions/potocki-palace-ukraine?fbclid=IwAR3Q76CKDcotKzIW2ssPfuoQGOO_l1gvrtu98tK-zsLlsXZQhhEBwCubBH8" target="_blank">
               <img class="img-aj" src="@/public/images/media/aj.svg" alt="aj">
            </a>
            <a href="https://www.izbaarchitektow.pl/pokaz/reinterpretacja_przestrzeni-miedzynarodowy_konkurs_architektoniczny-12.07.2023-30.01.2024,2424/" target="_blank">
              <img class="img-iarp" src="@/public/images/media/iarp.svg" alt="iarp">
            </a>
            <img class="img-pw" src="@/public/images/media/pw.svg" alt="pw">
            <img class="img-sarp" src="@/public/images/media/sarp2.svg" alt="sarp">
            <a href="https://pragmatika.media/news/v-ivano-frankivsku-oholosyly-arkhitekturnyi-konkurs-na-revitalizatsiiu-prostoru-bilia-palatsu-pototskykh/?fbclid=IwAR3is_6xzVZXvWGopr6QPjZURtmUb6ehNWHxr9KqTzDon33jZMlwjY1rcAU" target="_blank">
              <img class="img-pragmatika" src="@/public/images/media/pragmatika.svg" alt="pragmatika">
            </a>
            <a href="https://www.archdaily.com/1005710/2023-international-architecture-competition-reinterpreting-the-space?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_all" target="_blank">
              <img class="img-ArchDaily" src="@/public/images/media/ArchDaily.svg" alt="ArchDaily">
            </a>
            <a href="http://akichiatlas.com/en/revision/reinterpreting_the_space6956.php" target="_blank">
              <img class="img-akichiatlas" src="@/public/images/media/akichiatlas.svg" alt="akichiatlas">
            </a>
          </div>
        </div>
      </section>
    </div>
</template>


<script setup>
const { t, locale } = useI18n();
//const localePath = useLocalePath()

useSeoMeta({
  title: t('meta.palace.contest.title'),
  ogTitle: t('meta.palace.contest.title'),
  description: t('meta.palace.contest.description'),
  ogDescription: t('meta.palace.contest.description'),
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
        jury:[],
    map: {
        img: '',
        title: ''
      },
      scheme: {
        img: '',
        title: []
      },
      pastLanguage: '',
    }
  },
  mounted() {
    this.addJuryArr();
  },
  updated(){
    if(localStorage.getItem('lang') !== this.pastLanguage){
      this.pastLanguage = this.$i18n.locale;
      //this.addJuryArr();
    }
  },
  methods: {
    showComment(event){
      if(event.target.classList.contains("comment_jury__content__show_btn")){
        event.target.style.display = "none";
        event.currentTarget.querySelector(".comment_jury__content__hide_btn").style.display = "block";
        event.currentTarget.querySelector("p").classList.add("show_all_comment");
      }
      if(event.target.classList.contains("comment_jury__content__hide_btn")){
        event.target.style.display = "none";
        event.currentTarget.querySelector(".comment_jury__content__show_btn").style.display = "block";
        event.currentTarget.querySelector("p").classList.remove("show_all_comment");
      }
      
    },
    addJuryArr(){
      const i18n = useI18n();
      this.jury = [];
      for(let i = 0; i < 14; i++){
        this.jury.push(        
          {
            img: i18n.t(`contest.jury.members[${i}].img`), 
            name: i18n.t(`contest.jury.members[${i}].name`), 
            inf: i18n.t(`contest.jury.members[${i}].inf`),
            location: i18n.t(`contest.jury.members[${i}].location`),
          }
        )
      }
      this.map = {
       img: i18n.t(`contest.jury.map.img`),
       title: i18n.t(`contest.jury.map.title`)
      }
      this.scheme = {
        img: i18n.t(`contest.jury.scheme.img`),
        title: [
          i18n.t(`contest.jury.scheme.title[0]`),
          i18n.t(`contest.jury.scheme.title[1]`)
        ]
      }
    }
  }
};
</script>


<style lang='scss' scoped>
@keyframes show {
  from {display: block; opacity: 0;}
  to { display: block; opacity: 1;}
}
.show_all_comment{
  animation: show 900ms;
  display: block !important;
  opacity: 1;
}
.comment_jury-section{
  padding: 0;
  h3{
    font-size: 30px;
    font-family: Ermilov;
    text-transform: uppercase;
    @media (max-width: 576px){
      font-size: 24px;
    }
  }
  .comment_jury{
    &__content{
      width: 100%;
      max-width: 800px;
      margin-top: 48px;
      &__show_btn{
        text-decoration: underline; 
        margin-bottom: 50px;
        margin-top: 20px;
        cursor: pointer;
      }
      &__hide_btn{
        text-decoration: underline; 
        margin-bottom: 50px;
        margin-top: 20px;
        cursor: pointer;
        display: none;
      }
      &__autor{
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 12px;
      }
      ul{
        padding-left: 0;
        li{
          p{
            display: -webkit-box;
            overflow-y: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            word-break: break-word;
          }
        }
      }
    }
  }
}

.prize_redistribution-section{
  padding: 0;
  h3, p{
    margin-bottom: 24px;
  }
  
  .prize_redistribution{
    display: flex;
    column-gap: 120px;
    margin-top: 16px;
    @media (max-width: 576px){
      flex-direction: column;
    }
    &__first{
      display: flex;
    }
    &__col{
      display: flex;
      width: 100%;
      max-width: 320px;
      &:nth-child(2){
        width: 100%;
        max-width: none;
      }
      &-pl{
        width: 100%;
        max-width: 380px;
      }
      &__prize-img{
        margin-right: 48px;
        width: 100%;
        max-height: 70px;
        max-width: 70px;
        margin-top: 6px;
        @media (max-width: 576px) {
          max-height: 54px;
          max-width: 54px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
      &-text{
        margin-left: 10px !important;
      }
      ul{
        padding: 0;
        margin-bottom: 0 !important;
        li{
          display: flex;
          align-items: center;
          margin: 6px 0;
          min-height: 30px;
          p{
            margin: 0;
          }

        }
      }
    }
  }
}

.winner-section{
  padding: 64px 0;
  h3{
    font-family: Ermilov;
    font-size: 30px;
    text-transform: uppercase;
  }
  @media (max-width: 576px) {
    h2{
      font-size: 24px;
      line-height: 36px;
    }
    h3{
      font-size: 18px;
      line-height: 30px;
      text-transform: uppercase;
    }

  }
  .winner{
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    @media (max-width: 576px) {
      flex-direction: column;
      margin-top: 24px;
    }
    &__second, &__third, &__honors{
      width: 100%;
      &__num{
          margin-bottom: 16px;
      }
      a{
        font-family: Ermilov;
        text-transform: uppercase;
      }
      ul{
        @extend .font-p16;
        padding: 0;
        margin-top: 12px;
        width: 100%;
        max-width: 204px;
      }
      &__col{
        margin-top: 12px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        @media (max-width: 992px) {
          flex-direction: column;
        }
        &-location{
          margin-bottom: 24px;
        }
        &-title{
          margin-bottom: 0 !important;
          font-weight: 700;
        }
        div{
          width: 100%;
          max-width: 282px;
          ul{
            margin-bottom: 24px;
            margin-top: 0 !important;
          }
          @media (max-width: 576px){
            max-width: none;
          }
          &:nth-child(2){
            width: 100%;
            max-width: none;
            p{
              margin-bottom: 24px;
            }
            ul{
              max-width: 800px;
            }
          }
        }
        &__p{
          width: 100%;
          max-width: 204px;
          @media (max-width: 576px) {
            max-width: none;
          }
        }
      }
      h4{
        width: 100%;
        border-bottom: 1px solid #000;
        margin-bottom: 24px;
      }
    }

    &__prize-img{
      margin-bottom: 23px;
      margin-top: 55px;
      width: 100%;
      max-width: 70px;
      height: 70px;
      background-image: url("@/public/images/reward.svg");
    }
    &__third{
      @media (max-width: 576px) {
        margin-top: 64px;
      }
      &-two{
        @media (max-width: 576px) {
          margin-top: 0 !important;
        }
      }
    } 
  }
}

.contest-jury{
  padding: 0;
  &__members-container{
    padding: 78px 0 60px;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
      padding: 78px 0 60px;
    }
  }
  &__scheme{
    display: flex;
    flex-direction: column;
    &-title{
      margin-left: 60px;
      @media (max-width: 992px) {
        margin-left: 0;
      }
    }
    img{
      padding-top: 40px;
      object-fit: cover;
      width: 60%;
      margin: 0 auto;
    }
  }
  &__map{
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 992px) {
      align-items:flex-start
    }
    img{
      object-fit: cover;
      width: 100%;
    }
  }
  &__map-container{
    margin: 60px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
    }
  }
  &__members{
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 40px;
    }
    @media (max-width: 780px) {
      grid-template-columns: 370px;
      grid-row-gap: 40px;
    }
    @media (max-width: 470px) {
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
    }
    &__table{
      &-item{
        &-title{
          @media (max-width: 992px) {
            margin-top: 5px;
            font-size: 18px !important;
            line-height: 24px;
          }
        }
        &-img{
          img{
            object-fit: cover;
            width: 100%;
          }
        }
        &-inf{
          margin-top: 5px;
        }
        &-location{
          margin-top: 10px;
        }
      }
    }
  }
}

.contest-media-section{
  padding: 0;
  .contest-media{
    .img-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      .img-pragmatika, .img-bustler{
        height: 20px;
      }
      .img-ArchDaily{
        height: 50px;
        margin-bottom: 5px;
      }
      .img-akichiatlas{
        height: 20px;
      }
      img{
        margin-top: 48px;
        margin-right: 20px;
        @media (max-width: 780px) {
          margin-top: 24px;
        }
      }
    }
  }
}

.contest-page {
  .page-header {
    .page-title {
      padding-top: 60px;
      padding-bottom: 24px;
      font-family: Ermilov;
      font-size: 54px;
      line-height: 66px;
      font-weight: 400;
    }
    .page-description, .page-anounce{
      font-family: Roboto;
      font-size: 18px;
      line-height: 30px;
      font-weight: 400;
    }
    .page-anounce{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .anounce-date{
        display: flex;
        flex-direction: row;
        align-items: end;
        .anounce-date-start{
          margin-right: 5px;
        }
        .anounce-date-end{
          margin-left: 5px;
        }
      }
      .anounce-img{
        width: 100%;
        max-width: 826px;
        height: 223px;
        background-image: url("@/public/images/contest_header.webp");
      }
    }
   @media (max-width: 780px) {
    .page-title {
      font-size: 32px;
      line-height: 44px;
      font-weight: 400;
      padding-bottom: 16px;
      margin-bottom: 0;
    }
    .page-anounce{
      flex-wrap: wrap;
      margin-top: 204px;
      font-size: 14px;
    }
    .anounce-img{
      background-size: contain;
      background-repeat: no-repeat;
      margin-top: 35px;
      height: 101px !important;
    }
   }
  }
}

.contest-section {
  padding: 96px 0 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-wrap: wrap !important;
    .contest-schedule{
      margin-top: 32px;
    }
  }
  .contest-task{
    margin-right: 30px;
    max-width: 500px;
    min-width: 340px;
    .contest-task-title{
      margin-bottom: 0;
    }
    .contest-task-description{
      margin: 24px 0;
    }
    .contest-task-sub-title{
      margin-bottom: 24px;
    }
    .contest-task-list{
      list-style-type: disc;
      li{
       margin-bottom: 24px;
      }
    }
  }
  .contest-schedule{
    max-width: 564px;
    min-width: 340px;
    margin-right: 47px;
    .contest-schedule-title{
      margin-bottom: 0;
    }
    .contest-schedule-conditions-block{
      margin-top: 24px;
      .contest-schedule-conditions{
        font-family: Roboto;
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
      }
    }
    .contest-schedule-list{
      margin-top: 24px;
      padding-left: 0;
      li{
        display: flex;
        flex-direction: row;
        margin-bottom: 24px;
        .contest-schedule-list-date-block{
         .contest-schedule-list-date{
           margin-right: 20px;
         }
        }
        .contest-schedule-list-description{
          display: flex;
          margin-top: 3px;
        }
      }
    }

  }
  @media (max-width: 780px) {
    .contest-task-description{
      margin: 16px 0 !important;
    }
    .contest-task-sub-title{
      margin-bottom: 16px !important;
    }
    .contest-task-list{
      li{
        margin-bottom: 16px !important;
      }
    }
    .contest-schedule{
      margin-right: 0;
      ul{
        margin-top: 16px !important;
        li{
          margin-bottom: 16px !important;
          .contest-schedule-list-description{
            margin: 0 !important;
          }
        }
      }
      .contest-schedule-conditions{
       font-size: 14px !important;
       line-height: 24px !important;
      }
    }
  }
}

.contest-reward-section{
  padding: 0 0 96px 0;
  .contest-reward-title{
    margin-bottom: 24px;
  }
  .contest-reward-block{
    display: flex;
    column-gap: 120px;
    
    @media (max-width: 1100px) {
      ul{
        margin-bottom: 0;
      }
    }
    @media (max-width: 780px){
      flex-wrap: nowrap;
    }
    @media (max-width: 680px){
     flex-wrap: wrap;
    }

    .contest-reward-prize{
      display: flex;
      width: 100%;
      max-width: 323px;
      &-pl{
        max-width: 380px;
      }
      .contest-reward-prize-summ{
        display: flex;
      }
      .contest-reward-prize-img{
        margin-right: 48px;
        margin-top: 10px;
        width: 100%;
        max-width: 70px;
        height: 60px;
        background-image: url("@/public/images/reward.svg");
      }
      .contest-reward-prize-name{
        display: flex;
        align-items: center;
      }
      .contest-reward-prize-reward{
        margin-left: 10px;
        margin-right: 5px;
      }
      ul{
        padding-left: 0;
        li{
          margin: 6px 0;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .contest-reward-honor{
      display: flex;
      width: 100%;
      .contest-reward-honor-img{
        margin-right: 48px;
        width: 100%;
        max-width: 64px;
        height: 64px;
        background-image: url("@/public/images/star.svg");
      }
      .contest-reward-honor-name{
        display: flex;
        align-items: center;
      }
      .contest-reward-honor-reward{
        margin-left: 10px;
        margin-right: 5px;
      }
      ul{
       padding-left: 0;
       li{
          margin: 6px 0;
          display: flex;
       }
      }
    }
  }
  @media (max-width: 780px) {
    flex-wrap: nowrap !important;
    padding-top: 64px!important;
    padding-bottom: 64px!important;
    .contest-reward-prize-img, .contest-reward-honor-img{
      background-size: contain;
      background-repeat: no-repeat;
      width: 54px !important;
      height: 54px !important;
    }
  }
}

.contest-sponsors-section{
  padding: 96px 0;
  display: flex;
  flex-direction: row;
  column-gap: 40px;

  @media (max-width: 1100px) {
    flex-wrap: wrap !important;
    .contest-suport{
      margin-top: 32px;
    }
  }
  .contest-patron{
    @media (max-width: 992px) {
      padding-top: 32px;
    }
    @media (max-width: 780px) {
      padding-top: 16px;
    }
    @media (max-width: 612px) {
      padding-top: 64px
    }
  }
  .contest-sponsors, .contest-patron{
    .contest-patron-items-one{
        width: 100%;
        max-width: 300px !important;
      }
    &-items-container{
      margin-top: 48px;
      display: flex;
      flex-direction: row;
      column-gap: 48px;
      @media (max-width: 575px) {
          margin-top: 10px;
      }
    }
    &-items-one{
      width: 100%;
      max-width: 160px;
      @media (max-width: 575px) {
        max-width: none;
      }
      .contest-sponsors-items-name{
        margin-top: 12px;
      }
      .contest-sponsors-items-img{
        width: 100%;
        max-width: 60px;
        height: 70px;
        display: flex;
        align-items: center;
      }
      .contest-patron-items-img{
        width: 127px;
        height: 70px;
        display: flex;
        align-items: center;
      }

      .contest-patron-items-name{
        margin-top: 12px;
      }
    }
    &-items-two{
      width: 100%;
      max-width: 315px;
      .contest-sponsors-items-img{
        width: 100%;
        max-width: 143px;
        height: 70px;
        display: flex;
        align-items: center;
      }
      .contest-sponsors-items-name{
        margin-top: 12px;
      }
    }
  }
  
  .contest-suport{
     &-items-container{
      margin-top: 48px;
      display: flex;
      flex-direction: row;
    }
    &-items-one{
      max-width: 355px;
      .contest-suport-items-img{
        width: 100%;
        max-width: 163px;
        height: 70px;
        display: flex;
        align-items: center;
      }
      .contest-suport-items-name{
        margin-top: 12px;
      }
    }
  }
  @media (max-width: 780px) {
    padding: 64px 0 !important;
    .contest-sponsors-items-container{
      margin-top: 0;
      flex-wrap: wrap;
    }
    .contest-sponsors{
      margin-top: 16px !important;
      margin-right: 0 !important;
      margin-bottom: 64px;
    }
    .contest-sponsors-items{
      margin-right: 0;
      margin-top: 16px;
    }
    .contest-suport{
      margin-top: 16px;
    }
    .contest-suport-items-container{
      margin-top: 16px;
    }
  }
  @media (max-width: 610px) {
      .contest-sponsors-items-one{
      max-width: 316px;
    }
  }
}
.contest-more-section{
  padding: 36px 15px;
  background: #F9FAFB;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .contest-more{
    &-title{
      max-width: 636px;
    }
    &-title-pl{
        max-width: 466px;
        text-align: center;
      }
    &-btn-register{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 110px;
      height: 48px;
      background: #32404E;
      color: #fff !important;
    } 
    &-btn-load{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #32404E;
      width: 100%;
      max-width: 270px;
      height: 48px;
      margin-right: 36px;
      &-img{
        width: 16px;
        height: 16px;
        background-image: url("@/public/images/Arrow_contest.svg");
        margin-left: 10px;
        transition-timing-function: ease-in;
        transition: 0.50s;
      }
      &:hover{
        .contest-more-btn-load-img{
          transition-timing-function: ease-in;
          transition: 0.50s;
          margin-top: 12px;
        }
      }
      &-pl{
         @media (min-width: 780px) {
          max-width: 113px;
         }
      }
    }
    &-btn-container{
      margin-top: 48px;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
  @media (max-width: 780px) {
    justify-content: center;
    
    .contest-more-btn-container{
      margin-top: 24px;
      flex-wrap: wrap;
    }
    .contest-more-title{
      min-width: 280px;
      margin-bottom: 0;
    }
    .contest-more-btn-load{
      margin-right: 8px;
      margin-left: 8px;
      margin-bottom: 24px;
      max-width: 220px;
    }
    .contest-more-btn-register{
      margin-right: 8px;
      margin-left: 8px;
      max-width: 220px;
    }
  }
}
.en-sponsor{
  max-width: 225px !important;
  @media (max-width: 780px) {
    max-width: 316px !important;
    margin-left: 10px;
  }
}
.font-h3{
  text-transform: uppercase;
  font-family: Ermilov;
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  @media (max-width: 780px) {
      font-size: 24px;
      line-height: 36px;
      font-weight: 400;
  }
}
h2{
  text-transform: uppercase;
  font-family: Ermilov;
  font-size: 48px;
  line-height: 54px;
  font-weight: 700;
}
h4{
  @extend .font-roboto-18
}

.font-roboto{
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  @media (max-width: 780px) {
    font-size: 14px;
    line-height: 24px;
  }
}
.font-p16{
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  @media (max-width: 780px) {
    font-size: 14px;
    line-height: 24px;
  }
  &-bold-link{
    @extend .font-p16;
    font-weight: 700;
    text-decoration: underline !important;
  }
}
.font-p12{
  font-family: Roboto;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
}
.font-roboto-18{
  font-family: Roboto;
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  @media (max-width: 780px) {
    font-size: 14px;
    line-height: 24px;
  }
}

.section-padding{
  padding-bottom: 96px;
}
.contest-page {
  @media (max-width: 780px) {
    .page-header {
      flex-direction: column;
      padding-top: 84px;

      .item-l {
        order: 2;
        .page-title {
          padding: 30px 0 15px;
          font-size: 32px;
          line-height: 44px;
        }
      }

      &-img {
        width: 100%;
        max-width: 100%;
        height: 120px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
      }
    }

    section.contest-section {
      padding-top: 30px;
      padding-bottom: 0;

      .contest-section-title {
        padding-bottom: 15px;
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
}
</style>
