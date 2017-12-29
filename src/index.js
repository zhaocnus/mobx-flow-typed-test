// @flow
import React from 'react';
import { observable } from 'mobx';
import type { IObservableArray } from 'mobx';
import type { Element } from 'react';

type Props = {
  text: string
};

const Foo = (props: Props): Element<*> => (
  <div>
    <span>blah</span>
    <span>{props.text}</span>
  </div>
);

const arr: IObservableArray<string> = observable(['a']);

export default Foo;
