export default function Header() {
  return (
    <header style={{marginLeft: '0'}}>
     <div
        style={{
          backgroundImage: "url('/SharingFood.jpg')",
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          height: '200px',
          width: '100vw',
          Display: 'flex',
          marginLeft: '0',
        }}
      ></div>
      <nav style={{width: '100%', display: 'flex', backgroundColor: '#393838ff'}}>
        <a style={{padding: '20px'}} href="/">Home</a>
        <a style={{padding: '20px'}} href="/">Register</a>
        <a style={{padding: '20px'}} href="/">Login</a>
        <a style={{padding: '20px'}} href="/">Help</a>
      </nav>
    </header>
  );
}