export default defineEventHandler(async () => {
  //TODO: Пример для sitemap
  // const config = useRuntimeConfig()
  // const strapi = config.strapi.url
  // const strapiPrefix = config.strapi.prefix
  // const [flats, news, sales] = await Promise.all([
  //   $fetch(`${strapi}${strapiPrefix}/flats?pagination[pageSize]=1000`),
  //   $fetch(`${strapi}${strapiPrefix}/news?pagination[pageSize]=1000`),
  //   $fetch(`${strapi}${strapiPrefix}/sales?pagination[pageSize]=1000`),
  // ])
  // const flatsIDs = flats.data.map((p) => {
  //   return {
  //     loc: `/flats/${p.id}`,
  //     lastmod: p.attributes.updatedAt,
  //     changefreq: 'daily',
  //     priority: 0.8,
  //   }
  // })
  // const newsSlug = news.data.map((p) => {
  //   return {
  //     loc: `/news/${p.attributes.slug}`,
  //     lastmod: p.attributes.updatedAt,
  //     changefreq: 'daily',
  //     priority: 0.8,
  //   }
  // })
  // const salesSlug = sales.data.map((p) => {
  //   return {
  //     loc: `/sales/${p.attributes.slug}`,
  //     lastmod: p.attributes.updatedAt,
  //     changefreq: 'daily',
  //     priority: 0.8,
  //   }
  // })
  // return [...flatsIDs, ...newsSlug, ...salesSlug]
  return []
})
