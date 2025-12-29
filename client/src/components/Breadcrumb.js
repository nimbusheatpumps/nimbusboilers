import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;

  const getCrumbName = (slug) => {
    if (!slug || slug === '') return 'Home';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  let crumbs = [];
  if (pathname === '/') {
    crumbs = [{ name: 'Home', url: '/' }];
  } else {
    crumbs = [
      { name: 'Home', url: '/' },
      { name: getCrumbName(pathname.slice(1)), url: pathname }
    ];
  }

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${typeof window !== 'undefined' ? window.location.origin : 'https://nimbusboilers.co.uk'}${crumb.url}`
    }))
  };

  return (
    <>
      {/* Visible Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200 px-4 py-3 dark:bg-gray-900 dark:border-gray-700 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2">
          {crumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index < crumbs.length - 1 ? (
                <Link
                  to={crumb.url}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {crumb.name}
                </span>
              )}
              {index < crumbs.length - 1 && (
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
};

export default Breadcrumb;
