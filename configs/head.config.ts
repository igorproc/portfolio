import type { NuxtOptions } from '@nuxt/schema'

export default <Partial<NuxtOptions['app']['head']>>{
  title: process.env.NUXT_BASE_TITLE,
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      charset: 'utf-8',
    },
    {
      name: 'description',
      content: String(process.env.NUXT_PUBLIC_APP_DESCRIPTION),
    },
    {
      name: 'author',
      content: String(process.env.NUXT_PUBLIC_APP_AUTHOR),
    },
    {
      name: 'theme-color',
      content: 'white',
    },
    {
      name: 'copyright',
      content: 'Игорь Просвирнин, Igor Prosvirnin, pr0s1k',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Igor Prosvirnin',
    },
    {
      name: 'application-name',
      content: 'pr0s1k',
    },
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
  ],
  link: [],
  style: [],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Просвирнин Игорь (@pr0s1k) - Веб-разработчик",
  "url": "https://igorprosvirnin.ru/"
}
      `,
    },
    {
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Игорь",
  "url": "https://igorprosvirnin.ru",
  "image": "https://igorprosvirnin.ru/images/me.jpg",
  "sameAs": [
    "https://vk.me/pr0s1k",
    "https://t.me/pr0s1k",
    "https://www.instagram.com/pr0s1k/",
    "https://igorprosvirnin.ru"
  ],
  "jobTitle": "Веб - разработчик",
  "worksFor": {
    "@type": "Organization",
    "name": "FIV Dev"
  }
}
      `,
    },
    {
      type: 'text/javascript',
      innerHTML: `
 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
 m[i].l=1*new Date();
 for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
 k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

 ym(96761628, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true
 });`
    },
  ],
  noscript: [],
}
