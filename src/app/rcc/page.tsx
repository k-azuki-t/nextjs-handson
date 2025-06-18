'use client';

import { useState } from 'react';

export default function ServerComponent() {
    console.log('Client');
    const [count, setCount] = useState(0);

  return (
    <div>
        クライアント
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}