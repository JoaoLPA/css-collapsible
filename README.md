Import the collapsible component

```tsx
import { Collapsible } from '@collapsible/core/src';
```

Implement the component passing as children the component that will be the inner content

```tsx
<Collapsible
  children={
    <div style={{ padding: "10px" }}>
      <h2>Title 1</h2>
      <p>Content 1</p>
    </div>}
/>
```

It's possible to give a custom title

```tsx
<Collapsible
  title="My Collapsible"
  children={
    <div style={{ padding: "10px" }}>
      <h2>Title 1</h2>
      <p>Content 1</p>
    </div>}
/>
```
