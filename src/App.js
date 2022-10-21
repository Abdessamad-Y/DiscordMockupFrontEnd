import SideBar from './SideBar';
import './App.css';
import ChannelBar from './ChannelBar';
import ContentContainer from './ContentContainer';

function App() {
  return (
    <div className="flex">
      
      
      <SideBar/>
        
      <ChannelBar/>
      <ContentContainer/>
    </div>
  );
}

export default App;
