import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export const useLocationChange = (action) => {
  const location = useLocation()
  const prevLoaction = usePrevious(location)
  useEffect(() => {
    action(location, prevLoaction)
  }, [location])
}
