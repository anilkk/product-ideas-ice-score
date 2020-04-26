import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Iframe from 'react-iframe';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const IndexPage = () => {
  const classes = useStyles();
  render(
    <Layout>
      <SEO title="Home" />
      <p>
        Copy base to use this template, for more details about ICE score refer{' '}
        <a
          href="https://itamargilad.com/the-tool-that-will-help-you-choose-better-product-ideas/"
          target="blank"
        >
          Itamar Gilad's article
        </a>
        .
      </p>
      <div>
        <Button
          variant="contained"
          color="primary"
          href="https://airtable.com/addBaseFromShare/shrXlEo1C9eC2Wykh?utm_source=airtable_embedded_application"
          target="_blank"
        >
          Copy base
        </Button>
      </div>
      <Iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrXlEo1C9eC2Wykh?backgroundColor=blue"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style="background: transparent; border: 1px solid #ccc;"
      ></Iframe>
    </Layout>
  );
};

export default IndexPage;
