import React, {
  Component,
  PropTypes
} from 'react';

import Main from '../components/Main';

class MainContainer extends Component {
  render() {
    return <Main {...this.props}/>;
  }
}

MainContainer.propTypes = {
  messages: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired
};

export default MainContainer;
