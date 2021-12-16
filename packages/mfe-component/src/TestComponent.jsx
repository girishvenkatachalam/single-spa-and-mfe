import React, {useState} from 'react'

export default function TestComponent() {
  const [count,setCount] = useState(0)
  return (
    <section>
      Hi,you are in test component.You have successfully federated
      TestComponentModule
    </section>
  )
}