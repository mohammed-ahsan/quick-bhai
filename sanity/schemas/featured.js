export default {
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Featured Category name',
        type: 'string',
        validation:(Rule)=>Rule.required(),
      },
      {
        name:"short_description",
        type:"string",
        title:"Short Description"
      },
      {
        name: 'restaurant',
        title: 'Restaurants',
        type: 'array',
        of: [{type:"reference", to:[{type:"restaurant"}]}]
        
      },
      
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  