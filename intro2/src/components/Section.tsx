import React, { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  children: ReactNode;
};
const Section = ({
  title = 'this is a default title',
  children,
}: SectionProps) => {
  return (
    <>
      return <h1>{title}</h1>
      <h2>{children}</h2>
    </>
  );
};

export default Section;
