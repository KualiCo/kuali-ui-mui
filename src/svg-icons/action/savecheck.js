import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let ActionDone = (props) => (
  <SvgIcon viewBox="-2 4 24 24" {...props}>
    <path d="M15.4,9.3L8,16.9l-3.5-3.3L2.1,16L8,21.7l9.8-10L15.4,9.3z"/>
  </SvgIcon>
);
ActionDone = pure(ActionDone);
ActionDone.displayName = 'ActionDone';
ActionDone.muiName = 'SvgIcon';

export default ActionDone;
