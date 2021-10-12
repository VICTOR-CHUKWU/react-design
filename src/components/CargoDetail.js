import React from 'react';
import ToggleButton from './ToggleButton'

const CargoDetail = ({ isToggle, onToggle }) => {
    return (
        <section className="service">
            <div className="flex-between">
                <h3 className="card-h3">Cargo Details</h3>
                <div className="flex-between">
                    <ToggleButton isToggle={!isToggle} onToggle={onToggle} />
                    <p className="text-center">Dangerous Cargo (ex. Chemicals, Battery)</p>
                </div>
            </div>
            <div className="bg-gray">
                <button className="btn white-btn">Total Dimension</button>
                <button className="btn gray-btn">Package Details</button>
            </div>

            <div className="bg-input">
                <input type="text" name="volume" placeholder="cbm" />
                <input type="text" name="kg" placeholder="kg" />
            </div>

        </section>
    )
}

export default CargoDetail;
