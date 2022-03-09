export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Online Mall WEB",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/logo.png" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap",
            },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            {
                href: "https://fonts.googleapis.com/css2?family=Monoton&display=swap",
                rel: "stylesheet",
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
            },
        ],
        script: [{ src: "https://unpkg.com/scrollreveal", body: true }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["swiper/css/swiper.css", "~/assets/css/generic-style.css", '@fortawesome/fontawesome-svg-core/styles.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["@/plugins/api", "@/plugins/mixins/common", '~/plugins/fontawesome.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/toast",
    ],
    bootstrapVue: {
        icons: true,
    },
    toast: {
        position: "top-center",
        duration: 2000
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "https://localhost:5001",
        browserBaseUrl: "https://localhost:5001",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    // Router
    router: {
        scrollBehavior: function(to, from, savedPosition) {
            return { x: 0, y: 0 };
        },
    },
};