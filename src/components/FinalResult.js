import React, { useState, useEffect } from 'react';

function FinalResult(props) {
  const { match, results, singleChar } = props;
  console.log(match);

  //   useEffect(() => {
  //     let thisChar = results.filter(singleChar =>
  //       singleChar.name.match(results.match.params.results)
  //     );
  //     this.setState({ singleChar: thisChar[0] });
  //   });

  let thisChar = results.filter(singleChar =>
    singleChar.name.match(match.params.results)
  );

  return (
    <div>
      <p>{singleChar.name}</p>
    </div>
  );
}

export default FinalResult;
