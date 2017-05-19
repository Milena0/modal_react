import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {

    render() {
        // Here we going to return empty modal if our state is false
        if(!this.props.onOpen) {
            return null;
        }
        //backdrop styles
        const overlay = {
            backgroundColor: 'rgba(0,0,0,0.6)',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            padding: 10,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        };
       // modal styles
        const modal = {
            backgroundColor: 'rgb(255,255,255)',
            width: '50%',
            maxHeight: '50%',
            margin: '0 auto',
            padding: 10,
            overflowY: 'auto'
        };

        return (
            <div className="overlay" style={overlay} onClick={this.props.onClose}>
                <div tabIndex="0" className="modal" style={modal}
                     onClick={this.props.onCloseModal}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default Modal;

