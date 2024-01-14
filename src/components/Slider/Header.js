import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className="Banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="differ">
                        <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705214628/col-md-4_btf33a.png"
                            draggable="false"></img>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705214628/col-md-4h_pdzjzl.png"
                        className="mb-3" draggable="false"></img>
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="mb-3"
                                src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705214627/card-item_tsgux6.png"
                                draggable="false"></img>
                        </div>
                        <div className="col-sm-6">
                            <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1705214627/card-item2_gxsz7n.png"
                                draggable="false"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header