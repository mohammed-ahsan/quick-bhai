export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
      validation:(Rule)=>Rule.required(),
    },
    {
      name:"short_description",
      type:"string",
      title:"Short Description"
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
      
    },
    {
      name:"price",
      type:"number",
      title:"Price of the dish in BDT",
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
