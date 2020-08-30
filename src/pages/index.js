import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, img } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Cristina Crucianu | Product Manager'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || "Cristina Crucianu's website"} />
        <meta property="og:image" content={img} />
      </Helmet>
      <App />
    </>
  );
};
