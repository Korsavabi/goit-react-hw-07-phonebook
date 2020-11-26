import React from 'react';
import {H2} from './StyleSection';

const Section = ({title, children}) => {
    return (
        <div>
            <H2>{title}</H2>
            {children}
        </div>
    );
};

export default Section;