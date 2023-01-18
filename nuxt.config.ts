import path from "path";

const IS_PROD = process.env.NODE_ENV === "production";
const IS_DEV = process.env.NODE_ENV === "development";

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Time Lord",
      meta: [{ name: "description", content: "时间领主" }],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "./images/favicon.ico"
        }
      ]
    },
    pageTransition: { name: "page", mode: "out-in" }
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  build: {
    transpile: IS_PROD ? ["naive-ui", "vueuc", "@css-render/vue3-ssr", "@juggle/resize-observer"] : ["@juggle/resize-observer"]
  },
  alias: {
    "@styles": path.resolve(__dirname, "assets/styles")
  },
  css: ["@styles/_base.css"],
  vite: {
    optimizeDeps: {
      include: IS_DEV ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"] : []
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "assets/styles/_colors.scss" as *;'
        }
      }
    },
    server: {
      proxy: {
        // mock接口数据代理
        "/api": {
          target: "https://mockapi.eolink.com/3Jgq59Eba5ea9abf8c4fe032f6de140ff1f6febc8dabb0b",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "components"),
        "@images": path.resolve(__dirname, "assets/images")
      }
    }
  }
});
