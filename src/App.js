import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

function App() {

  const projectID="b3f5db63-875f-4d31-ae7b-492f444db115";
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
     <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
}

export default App;
