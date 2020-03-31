import React from 'react';
import { Layout, SEO } from 'components/common';
import { About } from 'components/new_stuff';
import { Header } from 'components/theme';

export default () => (
  <Layout>
    <SEO />
    <Header />
    <About />

  </Layout>
);
