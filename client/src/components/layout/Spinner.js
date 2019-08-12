import React, { Fragment } from 'react';
import spinner from '../../img/spinner.gif';

export default () => (
    <Fragment>
        <img
            src={spinner}
            style={{width: '2em', margin: 'auto', display:'block'}}
            alt="Loading..."
        />
    </Fragment>
)