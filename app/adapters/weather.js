import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindAll() {
    let path = this.buildURL();
    return `${path}/weather`;
  },
});
