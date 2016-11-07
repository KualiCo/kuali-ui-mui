import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDone from 'material-ui/svg-icons/action/savecheck';
import NavigationNext from 'material-ui/svg-icons/navigation/chevron-right';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const RaisedButtonExampleIconLabel = () => (
  <div>
    <RaisedButton
      label="Save Button"
      labelPosition="after"
      secondary={false}
      style={styles.button}
      fullWidth={false}
      icon={<ActionDone color={'#9ACA3C'}/>}
    />

    <RaisedButton
      label="Next Button"
      labelColor="#fff"
      labelPosition="before"
      backgroundColor="#27AAE1"
      secondary={false}
      style={styles.button}
      fullWidth={false}
      icon={<NavigationNext />}
    />



  </div>
);

export default RaisedButtonExampleIconLabel;
