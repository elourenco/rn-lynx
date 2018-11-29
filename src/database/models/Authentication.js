import Model from '@database/models/Model';

export default class Authentication extends Model {
  static schema = {
    name:'Authentication',
    primaryKey: 'id',
    properties: {
      accessToken: { type: 'string', optional: false },
      avatar: { type: 'string', optional: false },
      name: { type: 'string', optional: false },
      refreshToken: { type: 'string', optional: false },
      id: { type: 'string', optional: false, indexed: true }
    }
  }
}
