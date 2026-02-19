import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const url = useBaseUrl('/blog-index');
  return <Redirect to={url} />;
}
