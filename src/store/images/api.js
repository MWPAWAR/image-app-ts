export default () => fetch('https://agencyanalytics-api.vercel.app/images.json')
  .then((response) => {
    if (!response.ok) throw new Error('Failure')
    return response.json();
  });