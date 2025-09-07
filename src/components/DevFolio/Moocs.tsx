import Link from '@docusaurus/Link';
// @ts-ignore - imported JSON config may not have type declarations in this repo
import portfolioData from '@site/config/defolio.json';
import Heading from '@theme/Heading';
import type React from 'react';
import { useMemo, useRef, useState } from 'react';
import styles from './Moocs.module.css';
import type { Mooc } from './types';

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="search-icon"
  >
    <title>Search</title>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const Moocs: React.FC = () => {
  const moocs = portfolioData.moocs as Mooc[];
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const filteredMoocs = useMemo(() => {
    if (!searchQuery) return moocs;
    const q = searchQuery.trim().toLowerCase();

    // Lightweight fuzzy match scoring: prefer substring matches, then token overlap
    function score(text: string, query: string) {
      const t = text.toLowerCase();
      if (t === query) return 100;
      if (t.includes(query)) return 75;
      // token overlap score
      const tokens = t.split(/\s+/);
      const qtokens = query.split(/\s+/);
      let score = 0;
      for (const qt of qtokens) {
        for (const tk of tokens) {
          if (tk.startsWith(qt)) score += 5;
          else if (tk.includes(qt)) score += 3;
        }
      }
      // subsequence bonus
      let i = 0;
      for (const ch of query) {
        i = t.indexOf(ch, i);
        if (i === -1) return score;
        i++;
      }
      return score + 2;
    }

    // compute a combined score using title, provider, and course items
    return moocs
      .map((m) => ({
        m,
        s: score(m.courseTitle, q) + (m.provider ? score(m.provider, q) / 2 : 0)
      }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.m);
  }, [moocs, searchQuery]);

  // highlight helper: takes text and query, returns array of nodes with highlight spans
  function highlightText(text: string, query: string) {
    if (!query) return text;
    const q = query.trim().toLowerCase();
    const t = text;
    const tl = t.toLowerCase();
    const idx = tl.indexOf(q);
    if (idx === -1) {
      // attempt to highlight each token match
      const parts: (string | { highlight: string })[] = [];
      let cursor = 0;
      const qtokens = q.split(/\s+/).filter(Boolean);
      // simple approach: iterate tokens and wrap first occurrence
      for (const qt of qtokens) {
        const i = tl.indexOf(qt, cursor);
        if (i === -1) continue;
        if (i > cursor) parts.push(t.slice(cursor, i));
        parts.push({ highlight: t.slice(i, i + qt.length) });
        cursor = i + qt.length;
      }
      if (cursor < t.length) parts.push(t.slice(cursor));
      if (parts.length === 0) return t;
      return parts.map((p, i) =>
        typeof p === 'string' ? (
          p
        ) : (
          <span key={i} className={styles.highlight}>
            {p.highlight}
          </span>
        )
      );
    }
    // straight substring highlight
    return [
      t.slice(0, idx),
      <span key="hl" className={styles.highlight}>
        {t.slice(idx, idx + q.length)}
      </span>,
      t.slice(idx + q.length)
    ];
  }

  if (!moocs || moocs.length === 0) {
    return <p>No MOOCs to display.</p>;
  }

  const clearSearch = () => {
    setSearchQuery('');
    if (inputRef.current) inputRef.current.focus();
  };

  const completedCount = moocs.reduce((count, mooc) => {
    if (mooc.status !== 'Completed') {
      return count;
    }
    if (mooc.type === 'Course') {
      return count + 1;
    }
    if (mooc.courses && mooc.courses.length > 0) {
      return count + mooc.courses.length;
    }
    return count;
  }, 0);

  const inProgressCount = moocs.reduce((count, mooc) => {
    if (mooc.status !== 'In Progress') {
      return count;
    }
    if (mooc.courses && mooc.courses.length > 0) {
      return count + mooc.courses.length;
    }
    return count + 1;
  }, 0);

  return (
    <div className="container">
      <div className="row margin-bottom--lg">
        <div className="col col--12">
          <label htmlFor="mooc-search" className={styles.visuallyHidden}>
            Search MOOCs by course title
          </label>
          <form
            className={`${styles.searchWrapper} ${styles.searchInner}`}
            role="search"
            aria-label="Search MOOCs"
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div className={styles.searchIcon} aria-hidden="true">
              <SearchIcon />
            </div>
            <input
              id="mooc-search"
              ref={inputRef}
              type="search"
              className={styles.searchInput}
              placeholder="Search courses — try “react”, “aws”, or a provider"
              value={searchQuery}
              aria-label="Search MOOCs by course title"
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ flexGrow: 1 }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: 'var(--ifm-font-color-secondary)',
                paddingRight: '1rem',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ marginRight: '0.75rem' }}>
                {completedCount} Done
              </span>
              <span>{inProgressCount} Active</span>
            </div>
            {searchQuery ? (
              <button
                type="button"
                aria-label="Clear search"
                title="Clear"
                className={styles.clearButton}
                onClick={clearSearch}
              >
                ×
              </button>
            ) : null}
          </form>
        </div>
      </div>

      {filteredMoocs.length > 0 ? (
        filteredMoocs.map((mooc) => {
          const moocKey = `${mooc.courseTitle}-${mooc.provider ?? ''}-${mooc.completionDate ?? ''}`;
          return (
            <div className="card margin-bottom--lg" key={moocKey}>
              <div className="card__header">
                <div className="row" style={{ alignItems: 'center' }}>
                  <div className="col col--10">
                    <Heading as="h3" style={{ marginBottom: 0 }}>
                      {typeof highlightText(mooc.courseTitle, searchQuery) ===
                      'string' ? (
                        highlightText(mooc.courseTitle, searchQuery)
                      ) : (
                        <>{highlightText(mooc.courseTitle, searchQuery)}</>
                      )}
                    </Heading>
                  </div>
                  <div className="col col--2 text--right">
                    <span
                      className={`badge ${
                        mooc.status === 'Completed'
                          ? 'badge--success'
                          : 'badge--warning'
                      }`}
                    >
                      {mooc.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card__body">
                <p className="text--sm" style={{ marginBottom: '1rem' }}>
                  {mooc.provider && (
                    <span>
                      Issued by <strong>{mooc.provider}</strong>
                    </span>
                  )}
                  {mooc.completionDate && (
                    <span className="margin-horiz--sm">
                      • Completed on {mooc.completionDate}
                    </span>
                  )}
                  {mooc.duration && <span>• {mooc.duration} hours</span>}
                </p>

                {mooc.skills && mooc.skills.length > 0 && (
                  <div className="margin-bottom--md">
                    <Heading as="h5">Skills Gained</Heading>
                    <div>
                      {mooc.skills.map((skill) => (
                        <span
                          key={skill}
                          className="badge badge--primary margin-right--sm margin-bottom--sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {mooc.courses && mooc.courses.length > 0 && (
                  <div className="margin-top--md">
                    <Heading as="h5">Courses in this {mooc.type}</Heading>
                    <ul>
                      {mooc.courses.map((course) => (
                        <li
                          key={course.certificateLink ?? course.title}
                          style={{ marginBottom: '1rem' }}
                        >
                          {course.certificateLink ? (
                            <Link href={course.certificateLink}>
                              {typeof highlightText(
                                course.title,
                                searchQuery
                              ) === 'string' ? (
                                highlightText(course.title, searchQuery)
                              ) : (
                                <>{highlightText(course.title, searchQuery)}</>
                              )}
                            </Link>
                          ) : typeof highlightText(
                              course.title,
                              searchQuery
                            ) === 'string' ? (
                            highlightText(course.title, searchQuery)
                          ) : (
                            <>{highlightText(course.title, searchQuery)}</>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {mooc.certificateLink && (
                <div className="card__footer">
                  <Link
                    href={mooc.certificateLink}
                    className="button button--secondary"
                  >
                    View Certificate
                  </Link>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div className="alert alert--info" role="alert">
          No MOOCs match your search.
        </div>
      )}
    </div>
  );
};

export default Moocs;
