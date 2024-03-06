import Route from '@ember/routing/route';
import { service } from '@ember/service';
import wait from '../../../utils/wait';

export default class BandsBandSongsRoute extends Route {
  @service catalog;

  queryParams = {
    sortBy: {
      as: 's',
    },
    searchTerm: {
      as: 'q',
    },
  };

  // can override loading behavior
  // @action loading() {
  //   window.alert('AAAAAHHHHHHH');
  // }

  async model() {
    let band = this.modelFor('bands.band');
    // console.log('in songs route');
    // throw new Error('wtf');
    // await wait(1000);
    await this.catalog.fetchRelated(band, 'songs');
    return band;
  }

  resetController(_controller, _isExiting, _transition) {
    super.resetController(_controller, _isExiting, _transition);

    _controller.title = '';
    _controller.showAddSong = true;
  }
}
