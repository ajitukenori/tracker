import React from 'react';

const EditParts = ({ index, handleChange, tracker, deleteItem }) => {

    const changeitem = (key, event) => {
        handleChange(index, key, event.target.value)
    }

    const deleteI = () => {
        deleteItem(tracker.id)
    }

    return (
        <>
            <div className="task">
                <div className="task-edit">
                    <div className="edit-delete">
                        <button className="delete-btn" type='button' onClick={deleteI}>
                            <img src="/image/setting/xmark-solid.svg" alt="" />
                        </button>
                    </div>
                    <div className="img-color">
                        <label className="color-set">
                            <div className="color-in">
                                <input type="radio" id='1' value="1" onChange={(e) => changeitem("color", e)} checked={tracker.color == 1} />
                            </div>
                            <div className="color-img">
                                <img src="/image/color-icon/color-01.svg" alt='' />
                            </div>
                        </label>
                        <label className="color-set">
                            <div className="color-in">
                                <input type="radio" id='2' value="2" onChange={(e) => changeitem("color", e)} checked={tracker.color == 2} />
                            </div>
                            <div className="color-img">
                                <img src="/image/color-icon/color-02.svg" alt='' />
                            </div>
                        </label>
                        <label className="color-set">
                            <div className="color-in">
                                <input type="radio" id='3' value="3" onChange={(e) => changeitem("color", e)} checked={tracker.color == 3} />
                            </div>
                            <div className="color-img">
                                <img src="/image/color-icon/color-03.svg" alt='' />
                            </div>
                        </label>
                        <label className="color-set">
                            <div className="color-in">
                                <input type="radio" id='4' value="4" onChange={(e) => changeitem("color", e)} checked={tracker.color == 4} />
                            </div>
                            <div className="color-img">
                                <img src="/image/color-icon/color-04.svg" alt='' />
                            </div>
                        </label>
                        <label className="color-set">
                            <div className="color-in">
                                <input type="radio" id='5' value='5' onChange={(e) => changeitem("color", e)} checked={tracker.color == 5} />
                            </div>
                            <div className="color-img">
                                <img src="/image/color-icon/color-05.svg" alt='' />
                            </div>
                        </label>
                        <label className="color-set">
                            <div className="color-in">
                                <input type="radio" id='6' value='6' onChange={(e) => changeitem("color", e)} checked={tracker.color == 6} />
                            </div>
                            <div className="color-img">
                                <img src="/image/color-icon/color-06.svg" alt='' />
                            </div>
                        </label>
                    </div>
                    <div className="task-re-name">
                        <div className="name-info">
                            <input type="text" value={tracker.name} onChange={(e) => changeitem("name", e)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default EditParts;