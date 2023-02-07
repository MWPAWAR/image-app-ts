import { ImagesFetchApiResponse } from './types'

export default (): Promise<ImagesFetchApiResponse> =>
  fetch('https://agencyanalytics-api.vercel.app/images.json').then(
    (response): Promise<ImagesFetchApiResponse> => {
      if (!response.ok) throw new Error('Failure')
      return response.json()
    }
  )
