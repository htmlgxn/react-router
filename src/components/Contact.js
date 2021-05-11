import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    return (
        <div>
            <div
                className='ui raised very padded text container segment'
                style={{marginTop: '80px'}}
            >
                <Link to='/alex' className='ui header'>Alex</Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, corporis odit sapiente quibusdam voluptates voluptatibus porro eos, ipsum omnis distinctio tempore? Debitis soluta deleniti minima illum ut consectetur adipisci quam. Mollitia quibusdam doloremque ea reprehenderit. Quas consequuntur voluptate consequatur dolore?</p>
            </div>
            <div
                className='ui raised very padded text container segment'
                style={{marginTop: '80px'}}
            >
                <Link to='/ben' className='ui header'>Ben</Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, corporis odit sapiente quibusdam voluptates voluptatibus porro eos, ipsum omnis distinctio tempore? Debitis soluta deleniti minima illum ut consectetur adipisci quam. Mollitia quibusdam doloremque ea reprehenderit. Quas consequuntur voluptate consequatur dolore?</p>
            </div>
        </div>
    )
}

export default Contact;
