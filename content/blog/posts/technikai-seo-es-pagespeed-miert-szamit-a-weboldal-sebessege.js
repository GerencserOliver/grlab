const post = {
  slug: 'technikai-seo-es-pagespeed-miert-szamit-a-weboldal-sebessege',
  publishedAt: '2026-11-18',
  updatedAt: '2026-11-18',
  featured: false,
  accent: 'brand',
  icon: 'search',

  hu: {
    title: 'Technikai SEO és PageSpeed: Miért számít a weboldal sebessége?',
    description: '100/100-as PageSpeed, Core Web Vitals és technikai SEO KKV-knak. Hogyan hoz több ügyfelet a villámgyors betöltés és a hibátlan kódszerkezet?',
    excerpt: 'Lassú az oldalad, vagy elcsúsznak az elemek betöltéskor? A Google szigorúan bünteti a lassú weboldalakat. Mutatjuk, mit jelent a technikai SEO a gyakorlatban.',
    keywords: ['technikai SEO', 'PageSpeed optimalizálás', 'Core Web Vitals', 'weboldal sebesség', 'Google helyezés javítás', 'SEO Győr', 'Next.js SEO'],
    tags: ['SEO', 'PageSpeed', 'Webfejlesztés'],
    body: `
Lehet a terméked vagy szolgáltatásod a legjobb a piacon, és írhatsz szuper cikkeket is: ha a weboldalad másodpercekig töltődik mobilon, a látogatók többsége még azelőtt bezárja a lapot, hogy egyetlen sort is elolvasna. A Google ráadásul nyíltan beépítette a rangsorolási algoritmusába a betöltési sebességet és a felhasználói élményt mérő mutatókat (Core Web Vitals).

Ebben a cikkben végigvesszük, mi az a technikai SEO, miért kritikus a 100/100-as PageSpeed teljesítmény, és hogyan építünk olyan weboldalakat a GRLab-nél, amelyek a Google és a látogatók kedvencei is.

## Mi az a technikai SEO, és miben más, mint a sima keresőoptimalizálás?

A hagyományos tartalmi SEO arról szól, hogy miről írsz a weboldaladon (kulcsszavak, blogcikkek, címsorok). A **technikai SEO** ezzel szemben az oldal infrastruktúráját és kódját teszi rendbe. Azt biztosítja, hogy a keresőmotorok keresőrobotjai (Googlebot) könnyen fel tudják térképezni, megértsék és be tudják indexelni az oldalaidat.

Ha a technikai alapok hibásak vagy lassúak, a legjobb tartalom sem fog tudni a Google találati listájának élére kerülni.

## 1. Core Web Vitals: A 3 mutató, amit a Google árgus szemekkel figyel

A Google három fő technikai méréssel értékel minden weboldalt:

- **LCP (Largest Contentful Paint - Betöltési sebesség):** Mennyi idő alatt jelenik meg az oldal legnagyobb tartalmi eleme (pl. a fő nyitókép vagy a főcím)? A jó érték **2,5 másodperc alatt** van.
- **INP (Interaction to Next Paint - Interaktivitás):** Milyen gyorsan reagál az oldal, amikor a látogató rákattint egy gombra vagy menüre? A jó érték **200 milliszekundum alatti**.
- **CLS (Cumulative Layout Shift - Vizuális stabilitás):** Ugrálnak-e az elemek az oldalon betöltés közben? Biztosan veled is előfordult már, hogy rá akartál kattintani egy gombra, de egy elcsúszó ikon vagy kép miatt mellékattintottál. A jó CLS érték szinte nullához közeli (**0,1 alatt**).

## 2. Miért lassulnak be a sablonos és készített weboldalak?

Sok vállalkozás csodálkozik, hogy a drága sablonra épült vagy ingyenes oldalkészítővel összerakott weboldala miért kap 30-40 pontot a Google PageSpeed Insights tesztjén. A leggyakoribb okok:
- **Felesleges kódkészlet:** A sablonok százféle funkciót tartalmaznak, amiből te csak hármat használsz, de a böngészőnek az összes felesleges skriptet be kell töltenie.
- **Túlméretezett képek:** 4-5 megabájtos, átméretezetlen fotók feltöltése közvetlenül a telefonról vagy fényképezőgépről.
- **Rossz betűtípus- és ikonkezelés:** Elcsúszó elemeket okozó, lassan betöltődő fontok és ikonkészletek.
- **Elavult tárhely és szerver-infrastruktúra:** Lassú válaszidővel dolgozó szerverek.

## 3. Hogyan érünk el 100/100-as PageSpeed eredményt a GRLab-nél?

Amikor teljesen megújítottuk a saját weboldalunkat [grlab.hu](https://www.grlab.hu), a maximális teljesítmény volt az elsődleges mérnöki célunk. Ehhez a legmodernebb Next.js App Router architektúrát hívtuk segítségül:

- **Modern képformátumok automatikus konverzióval:** A képeket automatikusan WebP/AVIF formátumra alakítjuk és a kijelzőhöz méretezzük, így a látogató csak a minimálisan szükséges bájtokat tölti le.
- **Szerveroldali renderelés (SSR & SSG):** Az oldal kódja előre elkészítve várja a látogatót, így a böngésző azonnal a kész felületet jeleníti meg.
- **Strukturált adatok (Schema.org & JSON-LD):** A kódba beépítjük a megfelelő sematikus jelöléseket, hogy a Google pontosan tudja, ki vagy te, hol vagy megtalálható Győrben, és milyen szolgáltatásokat kínálsz.
- **Tiszta kód, nullához közeli CLS:** Nincsenek elcsúszó elemek, az ikonok és szövegek milliméterre pontosan a helyükre kerülnek az első pillanatban.

## 4. Technikai SEO csekklista KKV-knak: Ezeket ellenőrizd még ma!

1. **Teszteld az oldalad:** Nyisd meg a díjmentes *Google PageSpeed Insights* eszközt, és írd be a weboldalad címét. Nézd meg külön a mobil és az asztali pontszámot!
2. **Mobilbarát működés:** A látogatóid több mint 70%-a telefonról érkezik. Könnyen olvashatóak a szövegek? Megfelelő méretűek a gombok?
3. **HTTPS & Biztonság:** Megvan a zöld lakatos SSL tanúsítvány az oldaladon?
4. **Sitemap és Robots.txt:** Megfelelően be van kötve a *Google Search Console* fiókod, és látja a Google az sitemap.xml fájlodat?

## Összefoglalás

A technikai SEO és a villámgyors betöltés nem hobbi vagy felesleges számháború: közvetlenül befolyásolja, hogy hány látogatóból lesz fizető ügyfél, és hányadik helyen hoz a Google a versenytársaiddal szemben.

Ha szeretnéd megtudni, hol akad el a te weboldalad, vagy 100/100-as teljesítményű, SEO-biztos weboldalt szeretnél, [kérj tőlünk ajánlatot](/contact), vagy nézd meg a [SEO és webfejlesztési szolgáltatásainkat](/seo).
`,
  },

  en: {
    title: 'Technical SEO and PageSpeed: Why Does Website Speed Matter?',
    description: '100/100 PageSpeed, Core Web Vitals, and technical SEO for SMEs. How lightning-fast loading and clean code bring more clients.',
    excerpt: 'Is your website slow or do elements jump around during load? Google strictly penalizes slow sites. Here is what technical SEO means in practice.',
    keywords: ['technical SEO', 'PageSpeed optimization', 'Core Web Vitals', 'website speed', 'Google ranking improvement', 'SEO Győr', 'Next.js SEO'],
    tags: ['SEO', 'PageSpeed', 'Web Development'],
    body: `
Your product or service might be the best on the market, and you might write fantastic articles: if your website takes seconds to load on mobile, most visitors will close the tab before reading a single line. Furthermore, Google explicitly includes loading speed and user experience metrics (Core Web Vitals) in its ranking algorithm.

In this article, we cover what technical SEO is, why a 100/100 PageSpeed performance is critical, and how we build websites at GRLab that are loved by both Google and visitors.

## What is technical SEO, and how does it differ from content SEO?

Traditional content SEO is about what you write on your website (keywords, blog posts, headings). **Technical SEO**, on the other hand, cleans up the site's infrastructure and code. It ensures that search engine crawlers (Googlebot) can easily discover, understand, and index your pages.

If the technical foundation is flawed or slow, even the best content won't reach the top of Google search results.

## 1. Core Web Vitals: 3 metrics Google closely monitors

Google evaluates every website using three main technical measurements:

- **LCP (Largest Contentful Paint - Loading Speed):** How long does it take for the largest content element (e.g., hero image or main heading) to appear? A good score is **under 2.5 seconds**.
- **INP (Interaction to Next Paint - Interactivity):** How quickly does the page respond when a visitor clicks a button or menu? A good score is **under 200 milliseconds**.
- **CLS (Cumulative Layout Shift - Visual Stability):** Do elements jump around while the page loads? You have probably experienced trying to click a button, only for a shifting image to cause a wrong click. A good CLS score is close to zero (**under 0.1**).

## 2. Why do template-based websites slow down?

Many businesses wonder why their expensive template site or free page-builder website scores only 30-40 points on Google PageSpeed Insights. The most common reasons include:
- **Unnecessary code bloat:** Templates include hundreds of features, of which you use only three, but the browser still has to load all unused scripts.
- **Oversized images:** Uploading 4-5 megabyte uncompressed photos directly from smartphones or cameras.
- **Poor font and icon handling:** Slow-loading fonts and icon sets causing layout shifts.
- **Outdated hosting infrastructure:** Slow server response times.

## 3. How we achieve a 100/100 PageSpeed score at GRLab

When we rebuilt our own website [grlab.hu](https://www.grlab.hu), maximum performance was our top engineering goal. To achieve this, we leveraged the cutting-edge Next.js App Router architecture:

- **Modern image formats with automatic conversion:** Images are automatically converted to WebP/AVIF formats and scaled to the viewport, so visitors download only the necessary bytes.
- **Server-Side Rendering (SSR & SSG):** Pre-rendered code waits for the visitor, delivering an instantly visible interface to the browser.
- **Structured Data (Schema.org & JSON-LD):** Semantic annotations embedded in the code tell Google exactly who you are, where you are located in Győr, and what services you offer.
- **Clean code with near-zero CLS:** No layout shifts; icons and text align with millimeter precision from the first frame.

## 4. Technical SEO Checklist for SMEs: Check these today!

1. **Test your site:** Open the free *Google PageSpeed Insights* tool and enter your URL. Review both mobile and desktop scores!
2. **Mobile readiness:** Over 70% of your visitors come from mobile devices. Are fonts easy to read? Are buttons sized correctly?
3. **HTTPS & Security:** Is the green padlock SSL certificate present on your site?
4. **Sitemap and Robots.txt:** Is your *Google Search Console* account properly linked, and can Google read your sitemap.xml file?

## Summary

Technical SEO and lightning-fast page loading are not optional luxuries: they directly influence how many visitors convert into paying customers and where Google ranks you against your competitors.

If you want to diagnose where your website is getting stuck, or if you want a 100/100 performance, SEO-bulletproof site, [request a quote from us](/contact) or explore our [SEO and web development services](/seo).
`,
  },
};

export default post;