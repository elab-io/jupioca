function CustomError({ statusCode }) {
  return (
    <figure>

    </figure>
  );
}

function getInitialProps({ res, err }) {
  res.writeHead(302, {
    Location: '/'
  })
  res.end()
  // let statusCode;
  // // If the res variable is defined it means nextjs
  // // is in server side
  // if (res) {
  //   statusCode = res.statusCode;
  // } else if (err) {
  //   // if there is any error in the app it should
  //   // return the status code from here
  //   statusCode = err.statusCode;
  // } else {
  //   // Something really bad/weird happen and status code
  //   // cannot be determined.
  //   statusCode = null;
  // }
  // return { statusCode };

}

CustomError.getInitialProps = getInitialProps;

export default CustomError;