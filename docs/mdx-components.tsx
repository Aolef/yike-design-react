import CodeBlock from '@/components/CodeBlock';
import YiKeDemo from '@/components/YiKeDemo';
import YiKeTOC from '@/components/YiKeTOC';
import type { TOCData } from '@/types';
import { Typography } from '@yike-design/react';
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: props => (
      <a
        className="yike-doc-link"
        {...props}
      />
    ),
    h1: props => (
      // @ts-expect-error
      <Typography.Title
        {...props}
        level={1}
      />
    ),
    h2: props => (
      // @ts-expect-error
      <Typography.Title
        {...props}
        level={2}
      />
    ),
    h3: props => (
      // @ts-expect-error
      <Typography.Title
        {...props}
        level={3}
      />
    ),
    h4: props => (
      // @ts-expect-error
      <Typography.Title
        {...props}
        level={4}
      />
    ),
    h5: props => (
      // @ts-expect-error
      <Typography.Title
        {...props}
        level={5}
      />
    ),
    code: props => {
      // @ts-expect-error type error
      if (props.pure) {
        return (
          <CodeBlock
            lang={props.lang!}
            code={props.children as string}
          />
        );
      }
      return <code {...props} />;
    },
    pre: props => props.children as JSX.Element,
    table: props => (
      <div className="yike-doc-table-wrapper">
        <table {...props} />
      </div>
    ),
    YiKeTOC: props => {
      let toc: TOCData[];
      try {
        toc = JSON.parse(props.toc) as TOCData[];
      } catch (error) {
        toc = [];
      }
      return <YiKeTOC toc={toc} />;
    },
    YiKeDemo: props => (
      <YiKeDemo
        lang={props.lang}
        error={props.error}
        code={props.children}
        liveCode={props.liveCode}
      />
    ),
  };
}
