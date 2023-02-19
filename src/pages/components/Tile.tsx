import React from 'react'

type tiles = {
  tile: any;
}

const Tile = ({tile}: tiles) => {
  // 1. tile
  // 2. tile#
  // 3. position_#_#
  // 4. row_from_#_to_#
  // 5. col_from_#_to_#
  // 6. isMoving
  // 7. new 
  // 8. Merged
  let classArray = ['tile'];
  classArray.push('tile' + tile.value);
  if (!tile.mergedInto) {
    classArray.push(`position_${tile.row}_${tile.column}`);
  }
  if (tile.mergedInto) {
    classArray.push('merged');
  }
  if (tile.isNew()) {
    classArray.push('new');
  }
  if (tile.hasMoved()) {
    classArray.push(`row_from_${tile.fromRow()}_to_${tile.toRow()}`);
    classArray.push(`column_from_${tile.fromColumn()}_to_${tile.toColumn()}`);
    classArray.push('isMoving');
  }
  
  classArray.push(`tile${tile.value}`);
  
  let classes = classArray.join(' ');

  return (
    <span className={classes}></span>
  )
}

export default Tile
