import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Collection1, Collection2 } from '../imports/collections';

Meteor.subscribe('test');

Tracker.autorun(() => {
  const leaf = Collection2.findOne();
  document.getElementById('data').innerText =
    JSON.stringify(Collection1.findOne(), 4, 4) + "\n" +
    JSON.stringify(leaf, 4, 4);
});

document.getElementById('test').onclick = () =>
  Meteor.call('test');
