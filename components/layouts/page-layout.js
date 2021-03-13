const PageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <style jsx global>
        {`
          .remove-me {
            color: #777;
          }
        `}
      </style>
      {children}
    </>
  );
};

export default PageLayout;
