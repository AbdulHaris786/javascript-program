// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import { useState, useEffect } from 'react';
import bgImg from './assets/img.jpg';
import Button from './components/button/button.jsx';

function App() {
  const [members, setMembers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [status,setStatus] = useState(0);
  const [form,setForm]= useState({
    firstName:"",
    email:"",
    age:"",
    number:"",
  })
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const formattedObj = {
          data,
          status: data.length > 0 ? 200 : 404
        }
        setMembers(formattedObj.data);
        setStatus(formattedObj.status);
      })
      .catch(error => {
  console.log(error);
  setStatus(404);
});
  }, []);

  const handleChange=(e)=>{
    console.log(e,"events")
    const {name,value}=e.target;
    setForm((prevForm)=>({
      ...prevForm,
      [name]:value

    }))

  }

  return (
    <>
    <div>
      <input name='firstName' placeholder='First Name' value={form.firstName} onChange={handleChange} />
      <input name='email' placeholder='Email' value={form.email} onChange={handleChange} />
      <input name='age' placeholder='Age' value={form.age} onChange={handleChange} />
      <input type="tel"name="number"placeholder="Phone Number"value={form.number}onChange={handleChange}
/>
    </div>






    <div>
      <h1 style={{ color: 'grey' }}>Hello Members</h1>

      <img src={bgImg} alt="Background" width="200" />

      <br /><br />

      <Button name="click me" click={() => alert('Hello')} />

      <h2>Employee Details</h2>
      <p>
  {status === 200 ? 'Successfully fetched!' :
   status === 404 ? 'Not found!' : 'Loading...'}
</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Photo</th>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
            <th>Company Details</th>
          </tr>
        </thead>

        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>
                <img
                  src={`https://i.pravatar.cc/100?img=${member.id}`}
                  alt={member.name}
                  width="60"
                  height="60"
                  style={{ borderRadius: '50%' }}
                />
              </td>

              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.username}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Google
</a>
</td>

              <td>
                {member.address.street}, {member.address.suite},
                {member.address.city}, {member.address.zipcode}
              </td>

              <td>{member.company.name}</td>
              <td>{member.company.catchPhrase}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <h3>Counter: {counter}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <button onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
    </>
  );
}

export default App;

 