import React from 'react';
import api from "../../utils/api"

const ItemParts = ({ tracker, taskList }) => {

    const clearTask = async () => {
        console.log("達成!!")
        // await api.post(`/tracker/${tracker.id}/check`)
        // console.log(tracker)
        taskList(tracker.id)
    }
    

    return (
        <>
            <div className="task pc">
                <div className="task-info">
                    <div className={tracker.count < 7 ? 'task-check-min' : 'task-check' } >
                        {[...Array(tracker.count)].map((_, index) => (
                            <div className={tracker.count < 7 ?'clear-start' : 'task-clear-check'}>
                                <img src={`/image/color-icon/${tracker._color.image}`} alt="" className='task-clear-img' />
                            </div>
                        ))}
                        <button className={`${tracker.is_checked ? "check-true" : "task-clear"} ${tracker.count < 7 ?'clear-start' : 'task-clear-check'}`} onClick={clearTask}>
                            <img src="/image/color-icon/color-01.svg" alt="" className='task-clear-img' />
                        </button>
                    </div>
                    <div className="task-name">
                        <div className="task-name-info">
                            <span>{tracker.name}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="task sp"  onClick={clearTask}>
                <div className="task-info">
                    <div className={tracker.count < 7 ? 'task-check-min' : 'task-check' } >
                        {[...Array(tracker.count)].map((_, index) => (
                            <div className={tracker.count < 7 ?'clear-start' : 'task-clear-check'}>
                                <img src={`/image/color-icon/${tracker._color.image}`} alt="" className='task-clear-img' />
                            </div>
                        ))}
                        <button className={`${tracker.is_checked ? "check-true" : "task-clear"} ${tracker.count < 7 ?'clear-start' : 'task-clear-check'}`}>
                            <img src="/image/color-icon/color-01.svg" alt="" className='task-clear-img' />
                        </button>
                    </div>
                    <div className="task-name">
                        <div className="task-name-info">
                            <span>{tracker.name}</span>
                        </div>
                    </div>
                </div>
            </button>
        </>
    )

};

export default ItemParts;