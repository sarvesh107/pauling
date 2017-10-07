import React from 'react';
import { shallow } from 'enzyme';
import { FlatList, View } from 'react-native';

import ConnectedPosterCardList from 'app/PosterCardList';
import PosterCardList from 'app/PosterCardList/presenter';
import Fetching from 'app/PosterCardList/Fetching';
import {
  addPoster,
  fetchPosterFailed,
  fetchPosterStarted,
} from 'app/reducers/posters';
import configureStore from 'app/store/configureStore';
import { createFakePoster } from 'tests/helper';

describe(__filename, () => {
  const render = ({
    store = configureStore(),
    navigation = sinon.stub(),
    ...params,
  } = {}) => {
    const allProps = {
      store,
      navigation,
      ...params,
    };

    return shallow(<ConnectedPosterCardList {...allProps} />)
      .find(PosterCardList)
      .shallow();
  };

  it('renders correctly', () => {
    const wrapper = render();
    expect(wrapper.find(View)).toHaveLength(1);
  });

  it('renders a FlatList', () => {
    const wrapper = render();
    expect(wrapper.find(FlatList)).toHaveLength(1);
    expect(wrapper.find(FlatList)).toHaveProp('data', []);
  });

  it('passes posters to the FlatList', () => {
    const store = configureStore();
    const poster = createFakePoster();

    store.dispatch(addPoster(poster));

    const wrapper = render({ store });
    expect(wrapper.find(FlatList)).toHaveProp('data', [poster]);
  });

  it('displays a Fetching component while fetching a poster', () => {
    const store = configureStore();
    store.dispatch(fetchPosterStarted());

    const wrapper = render({ store });
    expect(wrapper.find(Fetching)).toHaveLength(1);
  });

  it('shows a Toast when an error has occured', () => {
    const store = configureStore();
    const toastComponent = {
      show: sinon.stub(),
    };

    store.dispatch(fetchPosterFailed());

    const wrapper = render({ store, toastComponent });
    sinon.assert.callCount(toastComponent.show, 1);
  });
});
