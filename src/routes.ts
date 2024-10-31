/**
 *  An Array of Routes Accessable to Public.
 *  Routes doesn't required authentication.
 *  @type {string[]}
 */
export const publicRoutes: string[] = [
    "/",
    "/categories",
    "/products",
]


/**
 *  An Array Of Routes Used For Authentication.
 *  These Routes Will Redirect User To Settings.
 *  @type {string[]}
 */
export const authRoutes: string[] = [
    "/login",
    "/register"
]

/**
 *  The Prefix For API Authentication Routes.
 *  Routes That Start's With This Prefix Are Used For API Authentication Purposes.
 *  @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";


/**
 *  The Default Redirect Path After Logging In
 *  @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/";