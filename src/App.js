import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Student from './Student'
import data from './data'

const App = () => {
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const arr = data.filter((item) => item.id <= 3)
    setFilteredData(arr)
  }, [])
  const showSkills = () => {
    setFilteredData(data)
  }

  setTimeout(() => setLoading(false), 3000)
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <section className="container">
      <div className="title">
        <h1>learn new skills</h1>
        <h2>learn another skills</h2>
        <div className="underline"></div>
        <button className="btn" onClick={showSkills}>
          view all
        </button>
      </div>
      <Student filteredData={filteredData} />
    </section>
  )
}

export default App
