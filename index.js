```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact', { shallow: true }); //This will prevent error, navigating to the contact page if exists
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```

```javascript
//pages/contact.js
export default function Contact(){
    return(
        <div><h1>Contact Page</h1></div>
    );
}
```