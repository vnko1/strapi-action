import type { Schema, Attribute } from '@strapi/strapi';

export interface CourseTarget extends Schema.Component {
  collectionName: 'components_course_targets';
  info: {
    displayName: 'Target';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CoursePremium extends Schema.Component {
  collectionName: 'components_course_premiums';
  info: {
    displayName: 'Premium';
  };
  attributes: {
    mainBanner: Attribute.Media<'images'>;
    bannerDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    bannerSecondaryDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface CourseModule extends Schema.Component {
  collectionName: 'components_course_modules';
  info: {
    displayName: 'Module';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    quantity: Attribute.Decimal & Attribute.Required;
    lessons: Attribute.Component<'course.lesson', true>;
  };
}

export interface CourseLesson extends Schema.Component {
  collectionName: 'components_course_lessons';
  info: {
    displayName: 'Lesson';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    quantity: Attribute.Decimal & Attribute.Required;
  };
}

export interface CourseFaq extends Schema.Component {
  collectionName: 'components_course_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'course.target': CourseTarget;
      'course.premium': CoursePremium;
      'course.module': CourseModule;
      'course.lesson': CourseLesson;
      'course.faq': CourseFaq;
    }
  }
}
