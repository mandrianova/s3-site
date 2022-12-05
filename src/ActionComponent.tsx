import React from 'react';

type props = {
  action: string
}

export default function ActionComponent({action}: props) {
  let nativeParams = (new URL(document.location.href)).searchParams;
  return (
    <div className='m-3'>
      <h1>{action}</h1>
      <p>EID: {nativeParams.get("__eid")}</p>
    </div>
  )
}
