import React from 'react'

const ToggleButton = ({isToggle, onToggle}) => {
    return (
       
      
        <label htmlFor="checkbox" className="label">
              <input type="checkbox" name="checkbox" className="check" id="checkbox" checked={isToggle} onChange={(e)=>onToggle()}/>
            <span className="slider"></span>
            
        </label>
    )
}

export default ToggleButton
