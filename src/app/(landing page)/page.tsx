import Header from './components/Header';

export default function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        <Header/>
        <main className="flex flex-col items-center justify-between w-full">
          <h1>TODO: Landing Page</h1>
        </main>
      </div>
    </>
  );
}
