const PageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <style jsx global>
        {`
          .remove-me {
            color: red;
          }
        `}
      </style>
      {children}
    </>
  );
};

export default PageLayout;
