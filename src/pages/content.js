import React from 'react';
import { Layout, SEO } from 'components/common';
import { Medium } from 'components/new_stuff';
import { Blog } from 'components/new_stuff';
import { Header } from 'components/theme';

export default () => (
  <Layout>
    <Header />
    <Medium />
    <Blog />

  </Layout>
);
