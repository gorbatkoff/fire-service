import React from 'react'

export default function Card({ title, imageUrl, body }) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} />
            </div>

            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>

                <div className="card-body">
                    <p>
                        {body}
                    </p>
                </div>
            </div>

            <div className="btn">
                <button>
                    <a>Узнать Больше</a>
                </button>
            </div>
        </div>
    )
}
