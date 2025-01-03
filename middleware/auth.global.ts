export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Route middleware:', to.path)
    console.log('Route middleware:', from.path)
    return true
})