export const getApiData = async (endpoint, params) => {
  try {
      const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`)
      const response = await fetch(url, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error (`Error: ${response.status}`)
      }

      const data = await response.json()
      return data
  } catch (e) {
    throw new Error (`Error: ${e}`)
  }
}