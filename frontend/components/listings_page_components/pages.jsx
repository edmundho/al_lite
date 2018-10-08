import React from 'react';
import { Link } from 'react-router-dom';

const Pages = ({ count, page, min, max }) => {
  const previousPage = page !== "1" ? <Link
    className="listing-page-num"
    to={`/listings/${min}/${max}/${parseInt(page) - 1}`}>{'<'}</Link> : ' ';

  const nextPage = <Link
    className="listing-page-num"
    to={`/listings/${min}/${max}/${parseInt(page) + 1}`}>{'>'}</Link>;

  const lastPage = count ? Math.floor(count/20) : ' ';
  const finalPage = <Link
    className="listing-page-num"
    to={`/listings/${min}/${max}/${lastPage}`}>{lastPage}</Link>;
    
  const pagesToShow = [page, parseInt(page) + 1, parseInt(page) + 2];
  const pages = pagesToShow.map((p, i) => {
    return (
      <Link 
        key={i}
        className="listing-page-num" 
        to={`/listings/${min}/${max}/${p}`}>{p}</Link>
    );
  });

  return (
    <div>
      {previousPage}
      {pages}
      &nbsp;...&nbsp;
      {finalPage}
      {nextPage}
    </div>
  );
};

export default Pages;