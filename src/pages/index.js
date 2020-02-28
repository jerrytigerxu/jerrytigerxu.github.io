import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Profile, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Profile />
    <Projects />
    {/*<Contact />*/}
  </Layout>
);
