import React, { useState } from 'react'

const ToggleButton = () => {
    const [isToggle, setIsToggle] = useState(false);
  const onToggle = (e) => {
    console.log(isToggle);
    setIsToggle(!isToggle)
  }
    return (
       
      
        <label className="label">
              <input type="checkbox" name="checkbox" className="check"  checked={isToggle} onChange={onToggle}/>
            <span className="slider"></span>
            
        </label>
    )
}

export default ToggleButton
