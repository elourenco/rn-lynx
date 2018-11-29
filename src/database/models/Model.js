import db from '../database';

export default class Model {
  static create(data, update = false) {
    try {
      if (data instanceof Array) {
        db.write(() => {
          data.forEach(item => {
            db.create(this.schema.name, item, update);
          });
        });
      } else {
        db.write(() => (
          db.create(this.schema.name, data, update)
        ));
      }
    } catch (err) {
      console.log('[Model] Error ', err);
    }
  }

  static get() {
    return db.objects(this.schema.name);
  }

  static deleteAll() {
    try {
      db.write(() => {
        db.delete(this.get());
      });
    } catch (err) {
      console.log('[Model] Error ', err);
    }
  }

  setProp(prop, value) {
    db.write(() => {
      this[prop] = value;
    });
  }
}
