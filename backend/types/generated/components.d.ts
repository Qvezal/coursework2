import type { Schema, Attribute } from '@strapi/strapi';

export interface UtilsAuth extends Schema.Component {
  collectionName: 'components_utils_auths';
  info: {
    displayName: 'auth';
    icon: 'envelop';
  };
  attributes: {
    login: Attribute.String;
    pass: Attribute.String;
  };
}

export interface UtilsLesson extends Schema.Component {
  collectionName: 'components_utils_lessons';
  info: {
    displayName: 'subject';
    icon: 'apps';
    description: '';
  };
  attributes: {
    subject: Attribute.Relation<
      'utils.lesson',
      'oneToOne',
      'api::subject.subject'
    >;
    count: Attribute.Integer;
  };
}

export interface UtilsUser extends Schema.Component {
  collectionName: 'components_utils_users';
  info: {
    displayName: 'user';
    icon: 'alien';
  };
  attributes: {
    fio: Attribute.String;
    image: Attribute.Media;
    birthday: Attribute.Date;
    mail: Attribute.Email;
    phone: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'utils.auth': UtilsAuth;
      'utils.lesson': UtilsLesson;
      'utils.user': UtilsUser;
    }
  }
}
