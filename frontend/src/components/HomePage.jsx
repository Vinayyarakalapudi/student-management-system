import React from 'react';

const HomePage = () => {
  return (
    <main style={{ background: 'gray', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <section className="home-hero" >
        <h1 className="home-title">Welcome to Student Management</h1>
        <p className="home-subtitle">
          Use the navigation above to manage student records efficiently and intuitively.<br />
          <span>Empowering your academic journey, one student at a time.</span>
        </p>
      </section>

      <section
  style={{
    background: 'black',
    color: 'wheat',
    borderRadius: '14px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    padding: '2.5rem 2rem',
    maxWidth: '1000px',
    margin: '2rem auto',
    textAlign: 'center',
  }}
>
  <h2 style={{ fontSize: '1.9rem', marginBottom: '1.2rem', color: '#00bcd4' }}>
    Why a Student Management System?
  </h2>
  <p style={{ fontSize: '1.15rem', color: '#b0b3b8', lineHeight: '1.8' }}>
    A Student Management System simplifies the process of managing academic data and records.
    From admission to graduation, it allows administrators, teachers, and students to interact seamlessly,
    ensuring a transparent and efficient academic environment.
  </p>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '2.5rem',
      flexWrap: 'wrap',
    }}
  >
    <div
      style={{
        width: '240px',
        background: '#35363a',
        padding: '1.4rem',
        borderRadius: '14px',
        border: '1px solid #333',
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
        alt="Record Icon"
        style={{ width: '50px', marginBottom: '0.9rem' }}
      />
      <h4 style={{ fontSize: '1.15rem', color: '#00bcd4' }}>Centralized Records</h4>
      <p style={{ fontSize: '0.95rem', color: '#b0b3b8' }}>
        All student data in one secure and accessible place.
      </p>
    </div>
    <div
      style={{
        width: '240px',
        background: '#35363a',
        padding: '1.4rem',
        borderRadius: '14px',
        border: '1px solid #333',
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2920/2920219.png"
        alt="Attendance Icon"
        style={{ width: '50px', marginBottom: '0.9rem' }}
      />
      <h4 style={{ fontSize: '1.15rem', color: '#00bcd4' }}>Attendance Tracking</h4>
      <p style={{ fontSize: '0.95rem', color: '#b0b3b8' }}>
        Monitor and manage student attendance with ease.
      </p>
    </div>
    <div
      style={{
        width: '240px',
        background: '#35363a',
        padding: '1.4rem',
        borderRadius: '14px',
        border: '1px solid #333',
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135765.png"
        alt="Performance Icon"
        style={{ width: '50px', marginBottom: '0.9rem' }}
      />
      <h4 style={{ fontSize: '1.15rem', color: '#00bcd4' }}>Performance Insights</h4>
      <p style={{ fontSize: '0.95rem', color: '#b0b3b8' }}>
        Gain academic insights through intelligent reporting.
      </p>
    </div>
  </div>
</section>


      <footer
        style={{
          background: '#232326',
          color: '#f7f9fa',
          textAlign: 'center',
          padding: '1.5rem 1rem',
          fontSize: '0.95rem',
          marginTop: '2rem',
        }}
      >
        <div style={{ marginBottom: '0.6rem' }}>© {new Date().getFullYear()} EduPortal 🎓 | Student Management System</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            📧 Email: <a href="mailto:support@eduportal.com" style={{ color: '#f7f9fa', textDecoration: 'underline' }}>support@studentportal.com</a>
          </div>
          <div>
            📞 Phone: <a href="tel:+1234567890" style={{ color: '#f7f9fa', textDecoration: 'underline' }}>+1 234 567 890</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
