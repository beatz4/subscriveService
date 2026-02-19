import { onRequest as __api_subscriptions__id__js_onRequest } from "D:\\0001.Project\\0003 Projects By Clade\\0001.SubscribeManager\\subscribeManager\\functions\\api\\subscriptions\\[id].js"
import { onRequest as __api_subscriptions_index_js_onRequest } from "D:\\0001.Project\\0003 Projects By Clade\\0001.SubscribeManager\\subscribeManager\\functions\\api\\subscriptions\\index.js"

export const routes = [
    {
      routePath: "/api/subscriptions/:id",
      mountPath: "/api/subscriptions",
      method: "",
      middlewares: [],
      modules: [__api_subscriptions__id__js_onRequest],
    },
  {
      routePath: "/api/subscriptions",
      mountPath: "/api/subscriptions",
      method: "",
      middlewares: [],
      modules: [__api_subscriptions_index_js_onRequest],
    },
  ]