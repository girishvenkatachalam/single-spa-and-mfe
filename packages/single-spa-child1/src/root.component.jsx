import React from 'react'
const TestComponent = React.lazy(() => import("MFApp/TestComponent"));

export default function Root(props) {
  return (
    <>
      <h1>{props.name} is mounted as a single spa app!</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <TestComponent />
      </React.Suspense>
    </>
  );
}
