/**
 * VSCode autocomplete hack
 * @typedef { import('@nuxt/types').Context } Context
 * @typedef { import('@nuxt/types').Middleware } Middleware
 */

/**
 * Checks if a user is an admin. Redirects otherwise.
 * @param context { Context } Nuxt Context
 * @type {Middleware}
 */
export default function authAdmin(context) {
  if (!context.$auth.$state.user.roles.admin) {
    context.redirect('/')
  }
}
