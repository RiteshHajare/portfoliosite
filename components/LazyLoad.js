// components/LazyLoad.js

import React from 'react';
import LazyLoad from 'react-lazyload';

export default function LazyLoadComponent(props) {
  return (
    <LazyLoad once>
      {props.children}
    </LazyLoad>
  );
}
