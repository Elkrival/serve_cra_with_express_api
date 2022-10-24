import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getData } from './api'

const Data = () => {
  const [someData, setSomeData] = useState([])
  useEffect(() => {
    getData().then((res) => setSomeData(res))
  })
  if (!someData.length) return null

  return (
    <div>
      <h1>Data</h1>
      <Link to="/">Back Home</Link>
      {someData.map((info) => {
        return (
          <div>
            <h6>{info.first_name}</h6>
            <h6>{info.last_name}</h6>
            <h6>{info.ip_address}</h6>
            <h6>{info.email}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default Data
