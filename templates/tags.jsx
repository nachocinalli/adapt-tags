
import React from 'react';

import { classes, compile, templates } from 'core/js/reactHelpers';

export default function Tags (props) {

  return (
    <div className="component__inner tags__inner">

      <templates.header {...props} />

      <div className="component__widget tags__widget">

        {props._items.map(({ _index, text, _isActive, _classes }, index) =>

          <div className={classes([
            'tags-item',
            `tags-item-${_index}`,
            _isActive && 'is-animating',
            _classes
          ])}
          key={_index}>
            <div className="tags-item-text">
              <span title={text} dangerouslySetInnerHTML={{ __html: compile(text) }}></span>
            </div>

          </div>

        )}

      </div>

    </div>
  );
}
