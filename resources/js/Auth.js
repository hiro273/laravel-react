import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Auth = () => {
  const [user,setUser] = useState(null);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  useEffect(() => {
    getUser();
  }, [getUser])
  
  const getUser = () => {
    axios.get('/api/user').then(res => {
      console.log('[getUser]ログイン済み');
      console.log(res.data);
      setUser(res.data);
    }).catch(err => {
      console.log('[getUser]ログインしてません');
    })
  }

  const login = async e => {
    e.preventDefault();
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios
      .post('/api/login', {
        email,
        password
      })
      .then(res => {
        console.log(res.data);
        if (res.data.result) {
          console.log('[login]ログイン成功');
          setUser(res.data.user);
        } else {
          console.log(res.data.message)
          console.log('[login]ログイン失敗');
        }
      })
    })
    .catch(err => {
      console.log(err.response)
      console.log('[login]ログイン失敗')
    })
  }

  const logout = () => {
    axios
      .get('/api/logout')
      .then(res => {
        setUser(null)
      })
      .catch(err => {
        console.log(err)
      })
  }

  let form = (
    <form onSubmit={login}>
      <label>email</label>
      <input 
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label>password</label>
      <input 
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )

  let userInfo = null

  if (user) {
    form = <button onClick={logout}>Logout</button>
    userInfo = (
      <div>
        <h2>User</h2>
        <div>name: {user.name}</div>
        <div>email: {user.email}</div>
      </div>
    )
  }
  return (
    <div>
      {form}
      {userInfo}
      <button onClick={getUser}>getUser</button>
    </div>
  )
}

export default Auth
