/* @flow */
import { connect } from 'react-redux';
// $FlowFixMe: react-navigation module is explicitly ignored (see .flowconfig)
import { NavigationActions } from 'react-navigation';

import QRScan from './presenter';
import { fetchPosterData } from 'app/reducers/posters';
import type { Dispatch, State } from 'app/types';

function mapStateToProps(state: State) {
  return {
    isFetchingPosterData: state.posters.isFetchingPosterData,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onValidPaulingQRCodeRead: paulingUrl => {
      dispatch(NavigationActions.back());
      dispatch(fetchPosterData(paulingUrl));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QRScan);
