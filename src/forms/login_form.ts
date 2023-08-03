interface User {
  username: string;
  password: string;
  email?: string;
  token?: string;
}

export function loginForm(): HTMLFormElement {
  const userForm = document.createElement('form');

  const [usernameLabel, usernameInput] = [
    document.createElement('label'),
    document.createElement('input'),
  ];
  usernameLabel.textContent = 'Username: ';
  usernameInput.type = 'text';
  const [passwordLabel, passwordInput] = [
    document.createElement('label'),
    document.createElement('input'),
  ];
  passwordLabel.textContent = 'Password: ';
  passwordInput.type = 'password';

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Login';

  userForm.append(
    usernameLabel,
    document.createElement('br'),
    usernameInput,
    document.createElement('br'),
    passwordLabel,
    document.createElement('br'),
    passwordInput,
    document.createElement('br'),
    submitButton
  );

  userForm.addEventListener('submit', async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    const user = {
      username: usernameInput.value,
      password: passwordInput.value,
    };
    console.table(user);
    await handleUserData(user);
  });

  return userForm;
}

async function handleUserData({ username, password }: User): Promise<User|void> {
  console.log('in handle data')
  const res = await fetch(
    'https://matrix-fakebook-123.onrender.com/api/sign-in',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  );
  if (res.ok) {
    const data = await res.json();
    console.log(data, 'from api call');
    return data;
  } else window.alert('Invalid login ');
}
