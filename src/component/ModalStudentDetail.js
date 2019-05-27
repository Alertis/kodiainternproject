import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

class ModalStudentDetail extends Component {

    render() {
        return(
            <Modal size="mini" open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header>{this.props.detail.name}</Modal.Header>
                <Modal.Content>
                <span>ID: </span> {this.props.detail.id} <br />
                <span>Üniversite Adı: </span> {this.props.detail.university && this.props.detail.university.name} <br />
                <span>Başlangıç Tarihi: </span> {this.props.detail.university &&  this.props.detail.university.started_at} <br />
                <span>Kuruluş Tarihi: </span> {this.props.detail.university &&  this.props.detail.university.founded_at}  <br />
                <span>Türü: </span> { this.props.detail.university && this.props.detail.university.type}  <br />
                </Modal.Content>
            </Modal>
      
        );
    }
} 

export default ModalStudentDetail;