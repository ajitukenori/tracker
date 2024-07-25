import React, { useState } from "react"
import '../components/common.css';
import '../components/create.css';

import BaseLayout from "../components/Layout/Base"
import Addparts from "../components/Parts/Add";
import api from "../utils/api"
import { navigate } from "gatsby";


const CreateNewPage = () => {
    const [trackers, setTrackers] = useState([{ name: " ", color: " " }])

    const addTraker = () => {
        setTrackers([...trackers, { name: " ", color: " " }]);
    };

    const submit = async (event) => {
        console.log(trackers)
        event.preventDefault()
        await api.post("/tracker", {
            'trackers': trackers
        })
        navigate('/')
    }

    const handleChange = (index, key, value) => {
        const updateTrackers = [...trackers]
        updateTrackers[index][key] = value
        setTrackers(updateTrackers)
    }



    return (
        <BaseLayout>
            <main>
                <form onSubmit={submit}>
                    <div className="add-info">
                        {trackers.map((tracker, index) => (
                            <Addparts key={index} index={index} handleChange={handleChange} tracker={tracker} />
                        ))}
                        <div className="plus-plus">
                            <div className="p-p-info">
                                <button className="p-btn" onClick={addTraker}>
                                    <div className="p-btn-img">
                                        <img src="/image/setting/new-btn-o.png" alt="" />
                                    </div>
                                    <span>追加登録</span>
                                </button>
                            </div>
                        </div>
                        <div className="task-on">
                            <div className="on-btn">
                                <button>
                                    <span className="on-btn-span">登録</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </BaseLayout>
    )
}

export default CreateNewPage