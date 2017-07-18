import { Meteor } from 'meteor/meteor';
import { publishComposite, enableDebugLogging } from 'meteor/reywood:publish-composite';

import { Collection1, Collection2 } from '../imports/collections';

Collection1.remove({});
Collection1.insert({});

Collection2.remove({});
Collection2.insert({});

let c = 0;

Meteor.methods({
  'test': () => {
    c += 1;
    Collection1.update({}, { $set: { counter: c } });
    Collection2.update({}, { $set: { counter: c } });
  },
});

publishComposite('test', () => [{
  find: () => Collection1.find({}),
  children: [{
    find: () => Collection2.find({}),
  }],
}]);
