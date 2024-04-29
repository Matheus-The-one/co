import React, { ReactNode } from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

function layout({childern}:{childern:ReactNode}) {
  return (
    <div className='relative flex h-screen w-full flex-col items center justify-center'>
       <div className="mt-12">{childern}</div>
    </div>
  )
}

export default layout
