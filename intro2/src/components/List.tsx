import React, { ReactNode } from 'react';

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <p key={i}>{render(item)}</p>
      ))}
    </ul>
  );
};

export default List;
