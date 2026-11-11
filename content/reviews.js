// Real Google reviews (all 5 stars). Quotes are the clients' own words; the English
// text is a translation. The project label comes from messages: reviews.projects.<projectKey>.
// They are shown as visible quotes only - no Review/AggregateRating markup, because
// Google does not allow self-published reviews to be marked up for a business's own site.

export const REVIEWS = [
  {
    id: 'takacs',
    name: 'Takács Arnold',
    rating: 5,
    projectKey: 'car-rental',
    quote: {
      hu: 'Egy autókölcsönző webalkalmazást készítettek nekünk, nagyon meg vagyunk elégedve. Gyors lett a felület, a bérlők is szeretik, a srácok pedig végig korrektek és rugalmasak voltak a fejlesztés alatt. Ajánlom őket!',
      en: 'They built a car rental web application for us and we are very happy with it. The interface is fast, the renters like it, and the guys were fair and flexible throughout development. I recommend them!',
    },
  },
  {
    id: 'balogh',
    name: 'Balogh Áron',
    rating: 5,
    projectKey: 'fleetflow',
    quote: {
      hu: 'A cégünknek csináltak egy belső webes szoftvert és egy mobilos appot a flottakezeléshez. A bevezetés óta hibátlanul megy a rendszer, rengeteg időt spórol nekünk. Profi munkát végeztek.',
      en: 'For our company they built an internal web application and a mobile app for fleet management. Since it went live the system has run flawlessly and saves us a lot of time. Professional work.',
    },
  },
  {
    id: 'kalmar',
    name: 'Kalmár Gergő',
    rating: 5,
    projectKey: 'pille',
    quote: {
      hu: 'Webshopot csináltak nekünk, az volt a fő szempont hogy az admint mi is könnyen tudjuk kezelni a termékfeltöltésnél. Ezt tökéletesen megoldották, az oldal gyors, a vásárlók is szeretik. Köszi a munkát!',
      en: 'They built us an online store, and the main requirement was that we could easily manage the admin when uploading products. They solved that perfectly, the site is fast and customers love it. Thanks for the work!',
    },
  },
  {
    id: 'nemeth',
    name: 'Németh Attila',
    rating: 5,
    projectKey: 'gym',
    quote: {
      hu: 'A teremnek csináltak egy bemutatkozó oldalt, nagyon eltalálták a designt meg mobilon is szupergyors. Gördülékeny volt a közös munka, csak ajánlani tudom a csapatot.',
      en: 'They made a presentation website for the gym. They nailed the design and it is super fast on mobile too. Working together was smooth, I can only recommend the team.',
    },
  },
  {
    id: 'kun',
    name: 'Kun Péter',
    rating: 5,
    projectKey: 'szelvedo',
    quote: {
      hu: 'Szélvédő javítással foglalkozom, az oldalamat és a seo-t csinálták a srácok. A keresőben most már szinte mindenre az első helyen dobja ki a lapot a Google. Ritka az ilyen megbízható csapat, köszönöm.',
      en: 'I work in windshield repair, and the guys built my website and handled the SEO. In search, Google now shows my page first for almost everything. A reliable team like this is rare, thank you.',
    },
  },
];
