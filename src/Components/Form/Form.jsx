import React from 'react'
import "./form.css"
const Form = () => {
    const allOptions = 
    [ "The Office", "Trailer Park Boys", "Shrek", "Rick And Morty", "Brooklyn 99",
     "Parks and Recreation", "F.R.I.E.N.D.S", "Bojack Horseman" ];

  return (
    <div className="form">
        <h2>Voting Booth</h2>
        <br/>
        <form action="">
            <div className='form-group'>
                <label htmlFor="">Your Name</label>
                <input type="text" name="" id="Name" />
            </div>
            <div className='form-group'>
            <label htmlFor="">Points (1-100)</label>
                <input type="number" name="" id="Number" min="1" max="100" />
            </div>
            <div className='form-group'>
                <label htmlFor="">Option</label>
                <select name="" id="select">
                
                    {allOptions.map(all=>{
                        return ( 
                            <option value={all}>{all}</option>
                        )
                    })}
                </select>
            </div>
                <button>Give points!</button>
        </form>
        
    </div>
  )
}

export default Form