import React, { useEffect, useState } from "react"

import { navigate } from "gatsby"
import BaseLayout from "../components/Layout/Base"
import api from "../utils/api"
import ItemParts from "../components/Parts/Item";

const IndexPage = () => {
  const [trackers, setTrackers] = useState([])

  useEffect(() => {
    const fetchTrackers = async () => {
      const reponce = await api.get('tracker')
      console.log(reponce)
      setTrackers(reponce.data.trackers)
    }
    fetchTrackers()
  }, []);

  const taskList = async (index) => {
    const reponce = await api.post(`/tracker/${index}/check`)
    console.log(reponce)
    setTrackers(reponce.data.trackers)
  }

  return (
    <BaseLayout>
      <main>
        <div className="bg">
            <div className="grid">
              {trackers.map((tracker, index) => (
                <ItemParts key={index} tracker={tracker} taskList={taskList} />
              ))}
              <div className="task">
                <button className="task-plus" onClick={() => { navigate("/create") }}>
                  <div className="plus-btn">
                    <img src="/image/setting/new-btn.png" alt="" />
                    <p>NEW</p>
                  </div>
                </button>
              </div>
              <div className="task">
                <div className="task-blank"></div>
              </div>
            </div>
        </div>
      </main>
    </BaseLayout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>