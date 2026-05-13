export default function WhyChooseUs() {
  return (
    <section
      style={{
        backgroundImage: 'linear-gradient(to right, #0D4F9E, #071022)',
        width: '100%',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap');`}</style>
      <div className="page-container">
        <div
          style={{
            backgroundPosition: '0% 0%',
            backgroundRepeat: 'repeat',
            color: 'rgb(210, 215, 220)',
            fontFamily: 'Manrope, sans-serif',
            paddingLeft: '10px',
            paddingRight: '10px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            maxWidth: '100%',
            marginTop: '30px',
            margin: '30px 0px 0px',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <h2
            style={{
              color: 'rgb(255, 255, 255)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '35px',
              fontWeight: '800',
              lineHeight: '35px',
              border: '0px none rgb(255, 255, 255)',
              textAlign: 'center',
              maxWidth: '750px',
              margin: '0',
            }}
          >
            Why Choose Our Greek IPTV Service?
          </h2>
          <p
            style={{
              color: 'rgb(210, 215, 220)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '26.4px',
              border: '0px none rgb(210, 215, 220)',
              textAlign: 'center',
              maxWidth: '750px',
              margin: '0',
            }}
          >
            Everything you need to enjoy Greek television from anywhere in the world.
          </p>
        </div>
      </div>
    </section>
  );
}