import React from 'react';

const Addparts = ({ index, handleChange, tracker }) => {
    
    const changeitem = (key, event) => {
        handleChange(index, key, event.target.value)
    }

    return (
        <>
            <div className="plus-info">
                <div className="one-info">
                    <div className="one-who">
                        <div className="number">
                            <div className="num-info">
                                <span>トラッカー {index + 1}</span>
                            </div>
                        </div>
                        <div className="name">
                            <div className="create-name">
                                <div className="icon">
                                    <img src="/image/color-icon/pen-to-square-solid.svg" alt="" />
                                </div>
                                <div className="icon-text">
                                    <span>項目名</span>
                                </div>
                            </div>
                            <div className="name-in">
                                <input type="text" value={tracker.name} onChange={(e) => changeitem("name", e)} />
                            </div>
                        </div>
                        <div className="color">
                            <div className="color-name">
                                <div className="color-icon">
                                    <img src="/image/color-icon/palette-solid.svg" alt="" />
                                </div>
                                <div className="color-text">
                                    <span>カラー</span>
                                </div>
                            </div> 
                            <div className="color-change">
                                <label className="color-set" htmlFor="blue">
                                    <div className="color-in">
                                        <input type="radio" name='color' id="1" value="1" onChange={(e) => changeitem("color", e)} />
                                    </div>
                                    <div className="color-img">
                                        <img src="/image/color-icon/color-01.svg" alt="" />
                                    </div>
                                </label>
                                <label className="color-set">
                                    <div className="color-in">
                                        <input type="radio" name='color' id='2' value="2" onChange={(e) => changeitem("color", e)} />
                                    </div>
                                    <div className="color-img">
                                        <img src="/image/color-icon/color-02.svg" alt="" />
                                    </div>
                                </label>
                                <label className="color-set">
                                    <div className="color-in">
                                        <input type="radio" name='color' id='3' value="3" onChange={(e) => changeitem("color", e)} />
                                    </div>
                                    <div className="color-img">
                                        <img src="/image/color-icon/color-03.svg" alt="" />
                                    </div>
                                </label>
                                <label className="color-set">
                                    <div className="color-in">
                                        <input type="radio" name='color' id='4' value="4" onChange={(e) => changeitem("color", e)} />
                                    </div>
                                    <div className="color-img">
                                        <img src="/image/color-icon/color-04.svg" alt="" />
                                    </div>
                                </label>
                                <label className="color-set">
                                    <div className="color-in">
                                        <input type="radio" name='color' id='5' value="5" onChange={(e) => changeitem("color", e)} />
                                    </div>
                                    <div className="color-img">
                                        <img src="/image/color-icon/color-05.svg" alt="" />
                                    </div>
                                </label>
                                <label className="color-set">
                                    <div className="color-in">
                                        <input type="radio" name='color' id='6' value="6" onChange={(e) => changeitem("color", e)} />
                                    </div>
                                    <div className="color-img">
                                        <img src="/image/color-icon/color-06.svg" alt="" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Addparts;
