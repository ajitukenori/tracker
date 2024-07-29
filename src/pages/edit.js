import React, { useEffect, useState } from "react"
import '../components/common.css';



import BaseLayout from '../components/Layout/Base';
import EditParts from "../components/Parts/Edit";
import api from "../utils/api"
import { navigate } from "gatsby";


const EditPage = () => {

    const [trackers, setTrackers] = useState([{ id: "", name: " ", color: " " }])

    useEffect(() => {
        const fetchTrackers = async () => {
            const reponce = await api.get('tracker')
            console.log(reponce)
            setTrackers(reponce.data.trackers)
        }
        fetchTrackers()
    }, []);

    const changeSubmit = async (event) => {
        console.log(trackers)
        event.preventDefault()
        await api.put("/tracker", {
            'trackers': trackers
        })
        navigate('/')
    }

    const handleChange = (index, key, value) => {
        const updateTrackers = [...trackers]
        updateTrackers[index][key] = value
        setTrackers(updateTrackers)
    }

    const deleteItem = (index) => {
        console.log(index)
        const updateTrackers = [...trackers].filter(n => {
            return n.id !== index
        });
        setTrackers(updateTrackers)
    }

    return (
        <BaseLayout>
            <main>
                <form onSubmit={changeSubmit}>
                    <div className="edit-bg">
                        <div className="grid">
                            {trackers.map((tracker, index) => (
                                <EditParts
                                    key={index}
                                    index={index}
                                    tracker={tracker}
                                    handleChange={handleChange}
                                    deleteItem={deleteItem} />
                            ))}
                        </div>
                        <div className="desision">
                            <div className="dss-btn">
                                <button>
                                    <span className="dss-text">修正</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </BaseLayout>
    )
}

export default EditPage