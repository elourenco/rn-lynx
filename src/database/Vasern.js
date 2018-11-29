import VasernDB from 'vasern';
import Authentication from './models/Authentication';

const version = 1;

const schemas = [
  Authentication
];

class Vasern {
  static getInstance;

  constructor(schemas, version) {
    if (this.getInstance) {
      return this.getInstance;
    }
    this.getInstance = new VasernDB({ schemas, version });
  }
}

const vasern = new Vasern(schemas, version).getInstance;
export default vasern;
