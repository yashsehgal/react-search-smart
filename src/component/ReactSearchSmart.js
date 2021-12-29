import React, { useState } from "react";
import ReactModal from "react-modal";

// stylings
import './component-styling/index.css';

export default function ReactSearchSmart(componentProperties) {
    const [searchModalRef, setSearchModal] = useState(false);
    return (
        <React.Fragment>
            <button className="rsscomponent_button"
                style={{
                    padding: '0.6em 1.2em',
                    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
                    fontWeight: '600',
                    fontFamily: 'inherit',
                    border: '2px solid transparent'
                }}
            >Search</button>
            <ReactModal isOpen={searchModalRef}
                onRequestClose={() => setSearchModal(false)}
            >

            </ReactModal>
        </React.Fragment>
    )
}