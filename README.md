[![npm][npm]][npm-url]
[![node][node]][node-url]
[![downloads][downloads]][downloads-url]

# mongoose-audit

Mongoose plugin to store audit information like userAgent, ip, country, etc...

This plugin simply adds the following fields: 
- createdBy
- updatedBy 
- deletedBy 
- createdFrom
- updatedFrom
- deletedFrom

Where: 
1. createdBy, updatedBy and deletedBy are a user id, 
2. createdFrom, updatedFrom and deletedFrom have the following structure:
   - userAgent
   - ip
   - country
   - continent
   - region
   - city
   - zip
   - lat
   - lng
   - tz

Note: deletedBy and deletedFrom are only useful if combined with [mongoose-delete plugin](https://www.npmjs.com/package/mongoose-delete).

## Installation

```sh
$ npm install mongoose-audit --save
```

## Overview

### Adding plugin to the schema

```js
BlogPost.plugin(mongooseAudit, { userModel: 'Author' });
```

### Plugin options

* userModel - optional (default is "User"). The mongoose Model managing users. Used to populate the field).

## Usage

On create:
```js
    const post = new BlogPost({});
    post.createdBy = currentUserId;
    post.createdFrom = {{ ip, userAgent, country };
    await post.save();
```

On update:
```js
    post.set();
    post.updatedBy = currentUserId;
    post.updatedFrom = {{ ip, userAgent, country };
    await post.save();
```

On delete (only useful if combined with [mongoose-delete plugin](https://www.npmjs.com/package/mongoose-delete))
```js
    post.deletedBy = currentUserId;
    post.deletedFrom = {{ ip, userAgent, country };
    await post.save();
    await post.delete();
```


[npm]: https://img.shields.io/npm/v/@cme-pro/mongoose-audit.svg
[npm-url]: https://npmjs.com/package/@cme-pro/mongoose-audit
[node]: https://img.shields.io/node/v/@cme-pro/mongoose-audit.svg
[node-url]: https://nodejs.org
[tests]: http://img.shields.io/travis/webpack-contrib/@cme-pro/mongoose-audit.svg
[tests-url]: https://travis-ci.org/webpack-contrib/@cme-pro/mongoose-audit
[downloads]: https://img.shields.io/npm/dt/@cme-pro/mongoose-audit.svg
[downloads-url]: https://npmjs.com/package/@cme-pro/mongoose-audit

