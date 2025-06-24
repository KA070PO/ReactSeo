import SEO from './seo/SEO';



function Home(
) {

  

  const handleReload = () => {
    window.location.reload();
  }
  return (

    
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', height:'98vh', justifyContent:'space-between' }}>
      <SEO title="Home | SEO React App" description="საძიებო სისტემის ოპტიმიზაცია React ბიბლიოთეკაში" />
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1 style={{cursor:'pointer'}} >საძიებო სისტემის ოპტიმიზაცია React ბიბლიოთეკაში სატესტო გარემო</h1>
      <p>კონტენტი ხილულია საძიებო სისტემებისთვის JS-ის რენდერირების შემდეგ</p>
      <p>სატესტო გარემო AJAX API Rendering ტექნოლოგიისთვის</p>
       <div className="MainContainer">
        <div style={{ width: '100%', height: 50, backgroundColor: '#87BD79', display: 'flex', borderRadius:'10px', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          <h2 style={{ marginTop: 10, }}>Search Engine Optimization Analyzer</h2>
        </div>
      </div>
      </div>
     
     <button  onClick={handleReload} style={{backgroundColor:'#87BD79', marginTop:'40px', color:'#fff', width:'150px', height:'40px', border:'none', borderRadius:'5px', cursor:'pointer'}}>გადატვირთვა</button>
      <div style={{ width: '100%', height: 50, backgroundColor: '#87BD79', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginBottom:'-10px' }}>
        <h3 style={{ marginTop: 10 }}> @ Georgia 2025</h3>
      </div>
    
    </div>
    
  );
  
}



export default Home;
