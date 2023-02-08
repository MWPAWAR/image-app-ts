import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { selectImagesFetchStatus } from '../../store/images/selectors'
import { fetchImages } from '../../store/images/images'
import { ImagesStateStatus } from '../../store/images/types'
import { API_FETCH_STATUS } from '../../constants'

const useFetchImages = () => {
  const dispatch = useAppDispatch()
  const imagesFetchStatus: ImagesStateStatus = useAppSelector(
    selectImagesFetchStatus
  )

  useEffect(() => {
    if (imagesFetchStatus === API_FETCH_STATUS.IDLE) {
      dispatch(fetchImages())
    }
  }, [imagesFetchStatus, dispatch])
}

export default useFetchImages
