import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

class ModalStudentDetail extends Component {

    render() {
        return(
            <Modal size="mini" open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header>{this.props.data.status == 'success' ? 'İşlem Başarılı' : 'İşlem Başarısız!'}</Modal.Header>
                <Modal.Content>
                    {this.props.data.message}
                </Modal.Content>
            </Modal>
      
        );
    }
} 

export default ModalStudentDetail;