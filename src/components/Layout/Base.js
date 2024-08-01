import React from "react";
import { navigate } from "gatsby";

import '../common.css';
import '../home.css';
import '../edit.css';
import '../create.css';

const BaseLayout = ({ children }) => (
    <>
        <div className="whole">
            <header>
                <div className="info">
                    <nav className="nav">
                        <ul className="hed-info">
                            <li className="nav-info">
                                <button className="nav-btn" onClick={() => { navigate('/') }}>
                                    <img src="/image/common/back-btn.png" alt="" />
                                    <p>BACK</p>
                                </button>
                            </li>
                            <li className="title">
                                <div className="tl-img ">
                                    <img src="/image/common/flower-icon.png" alt="" />
                                </div>
                                <div className="tl-text">
                                    <span>Life Tracker</span>
                                </div>
                                <div className="tl-img">
                                    <img src="/image/common/flower-icon.png" alt="" className="tl-right" />
                                </div>
                            </li>
                            <li className="nav-info">
                                <button className="nav-btn" onClick={() => { navigate('/edit') }}>
                                    <img src="/image/common/edit-btn.png" alt="" />
                                    <p>EDIT</p>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {children}
        </div>
    </>
);

export default BaseLayout;