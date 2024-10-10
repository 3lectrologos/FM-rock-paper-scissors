import { useMediaQuery } from 'react-responsive'

export function useIsTablet() {
  return useMediaQuery({ query: '(min-width: 700px)' })
}
