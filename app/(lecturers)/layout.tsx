import React from 'react'

 const layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='flex justify-between'>
        <div>left side</div>
        {children}

        <h1>rightside</h1>
    </div>
  )
}

export default layout
