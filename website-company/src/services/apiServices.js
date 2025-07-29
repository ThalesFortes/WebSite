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

export const postApiData = async (endpoint , formData) => {
  try {
    const url = new URL(endpoint)
    const response = await fetch(url, {
      method:"POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({...formData, 
                            access_key:"cb06d2e3-7230-4832-831b-c236d19ed7d7"
      })
    })
    return response
  } catch (error) {
    new Error("Erro" + error)
  }

}