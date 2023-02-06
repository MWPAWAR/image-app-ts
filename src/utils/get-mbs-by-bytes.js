export const getMbsByBytes = (sizeInBytes) => (sizeInBytes/1024/1024).toFixed(1);

export const getMbsTextByBytes = (sizeInBytes) => `${getMbsByBytes(sizeInBytes)} MB`;
