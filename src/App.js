import './App.css';
import Random from './components/Random';
import Tags  from './components/Tags';

function App() {
  return (
    <div className='w-full h-screen flex flex-col background relative items-center'>
     <h1 className='bg-white rounded-md w-11/12 text-center mt-[40px] px-10 py-2 text-xl font-bold'>RANDOM GIFS</h1>
     <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <Random/>
      <Tags/>
     </div>
    </div>
  );
}

export default App;
