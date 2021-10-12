import React from 'react';
import { dataSelect } from '../data'

const ServiceCard = () => {
    return (
        <div className="grid-4">
            {
                dataSelect.map((item) => {
                    const { title, icon, index} = item;
                    return (
                        <div className="gri-item" key={index}>
                          <div className="select-text">{title}</div>
                          <div className="icon-select">{icon}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServiceCard
