/**
 * VSCode autocomplete hack
 * @typedef { import('@nuxt/types').Context } Context
 * @typedef { import('@nuxt/types').Middleware } Middleware
 */

/**
 * Checks if a user is a manager (or an admin). Redirects otherwise.
 * @param context { Context } Nuxt Context
 * @type {Middleware}
 */
export default function authManager(context) {
  if (
    !context.$auth.$state.user.roles.admin ||
    !context.$auth.$state.user.roles.manager
  ) {
    context.redirect('/')
  }
}
