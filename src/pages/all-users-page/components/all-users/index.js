import { lazy } from 'react'

// export * from './all-users'
export const LazyAllUsers = lazy(() => import('./all-users'))
