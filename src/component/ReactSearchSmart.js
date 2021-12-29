import React, { Children, useState } from "react";
import ReactModal from "react-modal";

// stylings
import './component-styling/index.css';

ReactModal.setAppElement('#root');

export default function ReactSearchSmart(componentProperties) {
    const [searchModalRef, setSearchModal] = useState(false);
    const [inputPlaceholder] = useState(
        componentProperties.inputPlaceholder ? componentProperties.inputPlaceholder : 'Search'
    );
    const [dataListRef, setDataList] = useState(
        componentProperties.dataList ? componentProperties.dataList : []
    );
    const [currentSearchInputRef, setCurrentSearchInput] = useState('');
    return (
        <React.Fragment>
            <button className="rsscomponent_button"
                style={{
                    padding: '0.6em 1.2em',
                    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
                    fontWeight: '600',
                    fontFamily: 'inherit',
                    border: '2px solid transparent',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '6px'
                }}
                onClick={() => setSearchModal(true)}
            >{componentProperties.children}</button>
            <ReactModal isOpen={searchModalRef}
                onRequestClose={() => setSearchModal(false)}
                style={{
                    overlay: { 
                        fontFamily: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.125)'
                    },
                    content: { 
                        fontFamily: 'Inter, sans-serif',
                        width: '56%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '400px',
                        border: '1.2px solid #dddddd',
                        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
                        padding: '1em'
                    }
                }}
            >
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto',
                    gap: '0.6em',
                    alignItems: 'flex-start'
                }}>
                    <input type="text" placeholder={inputPlaceholder} className="rssc_componentInput" 
                        onChange={(searchInput) => {
                            let currentSearchInput = searchInput.target.value;
                            setCurrentSearchInput(currentSearchInput);
                        }}
                    />
                    
                    <div className="data-list-wrapper" style={{ marginTop: '1em' }}>
                        <ul className="data-list"
                            style={{
                                listStyle: 'none',
                                margin: '0',
                                padding: '0',
                                width: '98%',
                                display: 'grid',
                                gridTemplateColumns: 'auto',
                                gap: '0.6em',
                                alignItems: 'flex-start'
                            }}
                        >
                            {dataListRef.filter(item => {
                                if (item === '') {
                                    return item;
                                } else if (item.username.toLowerCase().includes(currentSearchInputRef.toLowerCase())) {
                                    return item;
                                }
                            })
                            
                            .map((dataItem, index) => (
                                <li className="data-item" key={index}>
                                    <div style={{ 
                                        backgroundColor: '#f4f4f4', 
                                        color: '#444444',
                                        padding: '0.8em 0.4em',
                                        width: '100%',
                                        borderRadius: '8px'
                                    }}>
                                        {dataItem.username}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="modal-action-buttons-wrapper_bottom"
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        width: '96%',
                        paddingBottom: '1.2em',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <button className="rsscomponent_button_close"
                        style={{
                            padding: '0.6em 1.2em',
                            boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
                            fontWeight: '600',
                            fontFamily: 'Inter, sans-serif',
                            border: '2px solid transparent',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '6px'
                        }}
                        onClick={() => setSearchModal(false)}
                    >
                        Close
                    </button>
                    <div className="powered-by-section" style={{
                        width: 'fit-content',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer'
                    }}
                    onClick={() => window.open('https://www.thedesignsystems.com/')}
                    >
                        <p style={{ color: '#bbbbbb', fontSize: '12px' }}>Powered by</p>
                        <img src="https://www.github.com/DesignSystemsOSS.png" alt="tds-logo" 
                            style={{ width: '36px', borderRadius: '50%' }}
                        />
                    </div>
                </div>
            </ReactModal>
        </React.Fragment>
    )
}