import './AboutText.css'

function AboutText (props) {
  return(
    <div className='container'>
      <div className='text-section d-flex'>
        <div className='text-section-text'>
          <h2>Abc Ser</h2>
        </div>
        <div className='text-section-text'>
          <p className='primary-color'>primeira linha</p>
          <p>segunda linha</p>
          <p>terceira linha</p>
        </div>
      </div>
    </div>
  )
}

export default AboutText