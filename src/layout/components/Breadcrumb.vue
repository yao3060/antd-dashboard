<template>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="`${basePath}/${paths.join('/')}`">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const routes = ref([])
    let baseRoute = {
        path: '',
        breadcrumbName: 'Dashboard',
    }

    watch(() => {
      routes.value = [baseRoute]
      if(route.fullPath != '/') {
        route.matched.map(item => {
          routes.value.push({
            path: item.path,
            breadcrumbName: item.meta.name
          })
        })
      }
    })

    return {
      basePath: '',
      routes,
      route
    }
  },
})
</script>
