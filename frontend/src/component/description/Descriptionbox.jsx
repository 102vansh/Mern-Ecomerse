import React from 'react'
import './description.css'
const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className='navigator'>
            <div className='box'>
                description
            </div>
            <div className='box fade'>Reviews (122)
            </div>
            
        </div>
        <p>Usage prints a usage message documenting all defined command-line flags to CommandLine's output, which by default is os.Stderr. It is called when an error occurs while parsing flags. The function is a variable that may be changed to point to a custom function. By default it prints a simple header and calls PrintDefaults; for details about the format of the output and how to control it, see the documentation for PrintDefaults. Custom usage functions may choose to exit the program; by default exiting happens anyway as the command line's error handling strategy is set to ExitOnError.</p>
    </div>
  )
}

export default Descriptionbox