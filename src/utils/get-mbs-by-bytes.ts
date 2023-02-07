export const getMbsByBytes = (sizeInBytes: number): string =>
  (sizeInBytes / 1024 / 1024).toFixed(1)

export const getMbsTextByBytes = (sizeInBytes: number): string =>
  `${getMbsByBytes(sizeInBytes)} MB`
