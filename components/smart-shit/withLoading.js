function withLoading(
  WrappedComponent,
  LoadingComponent = () => <div>Loading...</div>
) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <LoadingComponent />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;
