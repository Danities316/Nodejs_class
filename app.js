// NPM - Global command, comes with Node
// NPM --version

// local dependency - use it only in this patricular PromiseRejectionEvent
// npm i <packageName>

// global dependency - use it in any particular projects
// npm install -g <packageName>
// sudo npm install -g <packageName>(mac)

// package.json - manifest file(stors importanta infos about the project/file)
//manuel approach(create package.json file in the root, or in the create properties file, etc)
//npm init(step by step, press enter to skip)
//npm init -y(everything default)

const _ = require('lodash');

const items = [1,[2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)