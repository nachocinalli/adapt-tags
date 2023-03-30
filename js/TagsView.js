import ComponentView from 'core/js/views/componentView';

class TagsView extends ComponentView {

  className() {
    let classes = super.className();
    if (this.isAnimated()) {
      classes += ' is-animated';
    }
    return classes;
  }

  postRender() {
    this.setReadyStatus();
    this.setupInviewCompletion('.component__widget');
    if (this.isAnimated()) {
      this.$('.component__widget').on('onscreen.animate', this.checkIfOnScreen.bind(this));
    }
  }

  checkIfOnScreen({ currentTarget }, { percentInviewVertical }) {
    if (percentInviewVertical < this.model.get('_percentInviewVertical')) return;

    $(currentTarget).off('onscreen.animate');
    this.animateItems();
  }

  animateItems() {
    this.model.getChildren().forEach((listItem, index) => {
      setTimeout(listItem.toggleActive.bind(listItem, true), 200 * index);
    });
  }

  remove() {
    this.$('.component__widget').off('onscreen.animate');

    super.remove();
  }

  isAnimated() {
    return this.model.get('_animate') && (!$('html').hasClass('a11y-no-animations'));
  }
}

TagsView.template = 'tags.jsx';

export default TagsView;
