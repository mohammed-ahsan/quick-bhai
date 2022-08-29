const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'uf7g5p8y',
  dataset: 'production',
  useCDn:true,
  
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;