import {SpinnerContainer, SpinnerOverlay} from './spinner-style'

import React from 'react';

const Spinner = () => {
    console.log('loading')
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    );
};

export default Spinner;