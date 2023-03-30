import ItemsComponentModel from 'core/js/models/itemsComponentModel';

export default class TagsModel extends ItemsComponentModel {
  defaults() {
    return ItemsComponentModel.resultExtend('defaults', {
      _animate: false,
      _percentInviewVertical: 70
    });
  }
}
