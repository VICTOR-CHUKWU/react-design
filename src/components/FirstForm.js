import React from 'react';
import { GoInfo } from 'react-icons/go';
import { HiLocationMarker } from 'react-icons/hi';
import { BsCalendarDateFill } from 'react-icons/bs'

const FirstForm = () => {
    return (
        <section className="service">
            <GoInfo />
            <form className="form-grid">
                <div className="first-grid">
                    <button className="btns">Import</button>
                    <button className="btns">Export</button>
                </div>
                <div className="form-input longer">
                    <HiLocationMarker className="input-icon" />
                    <input type="text" name="text" className="input" placeholder="from City or Port" />
                </div>
                <div className="form-input longer">
                    <HiLocationMarker className="input-icon" />
                    <input type="text" name="text" className="input" placeholder="To City or Port" />
                </div>
                <div className="form-input">
                    <BsCalendarDateFill className="input-icon" />
                    <input type="text" name="text" className="input" placeholder="Ready Date"/>
                </div>
                <div className="form-input">
                    <select name="Incoterms" className="select">
                        <option value="incoterm">Incoterms</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="form-input">
                    <input type="text" name="text" className="input" placeholder="Total Cargo Value" />
                </div>
            </form>
        </section>
    )
}

export default FirstForm
