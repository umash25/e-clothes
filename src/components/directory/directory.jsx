import React from 'react';

import './directory.scss'
import MenuItem from '../menu-item/menu-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapSTateToProps = createStructuredSelector({
    sections: selectSections
});

export default connect(mapSTateToProps)(Directory);