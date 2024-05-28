import React from 'react';
import {Spinner, Row, Col} from 'react-bootstrap';

const Loader = () => {
  return (
    <div>
        <Row>
            <Col>
                <Spinner className='mt-5' style={{ display:'block', marginLeft:'auto', marginRight:'auto' }} animation="grow" variant="dark" />
            </Col>
        </Row>
        <Row>
            <Col>
                <div style={{textAlign: 'center'}}>Please wait while we are collecting the Pokémon data</div>
            </Col>
        </Row>
    </div>
  )
}

export default Loader
