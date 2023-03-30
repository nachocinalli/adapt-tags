import components from 'core/js/adapt';
import TagsModel from './TagsModel';
import TagsView from './TagsView';

export default components.register('tags', {
  model: TagsModel,
  view: TagsView
});
