const getData = async () => {
  const res = await window.fetch('/api/data', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
  return res.json()
}

export { getData }
