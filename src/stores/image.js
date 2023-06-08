import { defineStore } from 'pinia'

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list: [
            {
                slug:'portfolio',
                title: 'Basic Portfolio',
                img: 'img1.PNG'
            },
            {
                slug:'ourtailor',
                title: 'Our Tailor',
                img: 'img2.PNG'
            },
            {
                slug:'buahin',
                title: 'Buahin',
                img: 'img3.PNG'
            },
        ]
    }),
    actions: {},
    getters: {
        g$list: ({ list }) => list,
        g$detail: ({ list }) => {
            return (slug) =>list.find((image) => image.slug == slug);
        }
    },
});

export default imageStore;