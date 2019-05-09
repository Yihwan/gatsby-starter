import React from 'react';
import PropTypes from 'prop-types';

import injectGlobalStyles from '../utils/injectGlobalStyles';
import { LayoutContainer } from './style';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;

    return(
      <LayoutContainer>
        {injectGlobalStyles()}
        {children}
      </LayoutContainer>
    );
  }
}

export default Layout;
