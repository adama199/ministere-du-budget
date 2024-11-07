type messageType = {
  message: string | any;
};
function ErrorMessage({ message }: messageType) {
  return (
    <>
      {!!message && (
        <div className="alert alert-danger mt-1" role="alert">
          {message}
        </div>
      )}
    </>
  );
}

export default ErrorMessage;
