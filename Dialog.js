import React, { Component } from 'react';
import Dialog from "react-native-dialog";
import { View ,} from 'react-native';
export default class DialogBox extends React.Component{
    constructor(props)
    {
        super(props);

        this.handleCancel=this.handleCancel.bind(this);
        this.handleConfirm=this.handleConfirm.bind(this);
    }


    handleCancel = () => {
       this.props.handleCancel();
      };
     
      handleConfirm = () => {
          this.props.handleConfirm();
        
      };

    render () {
        return (
          <View>
            <Dialog.Container visible={this.props.visible}>
              <Dialog.Title>{this.props.title!=undefined||this.props.title!=null ? this.props.title : "You are missing the title of this dialog box"}</Dialog.Title>
              <Dialog.Description>
                {this.props.description!=undefined||this.props.description!=null ? this.props.description : "You are missing the description of this dialog box"}
              </Dialog.Description>
              <Dialog.Button label="Confirm" onPress={this.handleConfirm} />
              <Dialog.Button label="Cancel" onPress={this.handleCancel} />
            </Dialog.Container>
          </View>
        )
      }
}
