import { defineComponent, createApp, computed } from 'vue'

const App = defineComponent({
    name: 'App',
    setup() {
        const formattedDate = computed(() => new Date().toLocaleDateString(navigator.language, { dateStyle: "long" }));

        return { formattedDate };
    },

    template: '<p> Сегодня {{formattedDate }}</p>'
})

const app = createApp(App).mount('#app');