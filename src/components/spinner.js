import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = ({ type, color }) => (
    <ReactLoading type={type} color={color} delay={'3000'} height={'64px'} width={'64px'} />
);

export default Spinner;