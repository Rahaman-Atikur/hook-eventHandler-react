import './App.css'
import Reseter from './reseter'
// import Counter from './counter'
// import BatsMan from './batsman'
// import Users from './users'
// import { Suspense } from 'react'
// import Friends from './friends'
// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.json())
// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();

// }

function App() {
  // const friendsPromise = fetchFriends();
  return (
    <>
      <h1>React</h1>
      <Reseter></Reseter>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for Treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Counter></Counter>
      <BatsMan></BatsMan> */}
    </>
  )
}
export default App
