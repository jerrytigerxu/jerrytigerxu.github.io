import React from 'react';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { Intro, Profile, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Header />
    {/*<Intro />*/}
    <Profile />
    <Projects />
    {/*<Contact />*/}
  </Layout>
);
