
# mongoose-audit

[![Build Status](https://travis-ci.org/cme-pro/mongoose-audit.svg?branch=master)](https://travis-ci.org/cme-pro/mongoose-audit)
[![Code Climate](https://codeclimate.com/github/cme-pro/mongoose-audit/badges/gpa.svg)](https://codeclimate.com/github/cme-pro/mongoose-audit)


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
BlogPost.plugin(mongooseAuditExtra, { userModel: 'Author' });
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
