import * as React from 'react';
import { ErrorBoundary } from './components/day 8/ErrorBoundary';
import ErrorBoundary1 from './components/day 8/ErrorBoundary1';

export default function BasicButtons() {
  return (
   <div>
    <ErrorBoundary>
      <Hero heroNmae="Vijay"></Hero>
    </ErrorBoundary>
    <ErrorBoundary1>
      <Hero heroName="Joker"></Hero>
    </ErrorBoundary1>
   </div>
  );
}