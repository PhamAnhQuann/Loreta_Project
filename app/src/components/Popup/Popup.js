// Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, children }) => {
    const overlayStyle = {
        height: isOpen ? '100%' : '0',  /* Hiệu ứng chuyển động */
    };

    return (
        <div className="popup-overlay" style={overlayStyle} onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

export default Popup;
