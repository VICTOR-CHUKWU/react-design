import React from 'react';
import { additionalData } from '../data';
import ToggleButton from './ToggleButton'

const AdditionalService = ({ isToggle, onToggle }) => {
    return (
        <section className="service">
              <h3 className="card-h3">Additional Services</h3>
              <div className="d-grid-2">
                  {
                      additionalData.map((item) => {
                          const { title, descriptiion, index } = item
                          return(
                           <div className="grid-items" key={index}>
                            <ToggleButton isToggle={isToggle} onToggle={onToggle} />
                            <div className="grid-items-right">
                                <h3  className="card-h3">{title}</h3>
                                <p >{descriptiion}</p>
                            </div>
                           </div>
                          )
                      })
                  }
              </div>
        </section>
    )
}

export default AdditionalService
