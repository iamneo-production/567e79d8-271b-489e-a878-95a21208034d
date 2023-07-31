import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Table, Container, Row, Col, Dropdown } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { Line } from 'react-chartjs-2';
import {Icon} from 'leaflet';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from "../../../Config";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function Dashboard() {
  const { agentId } = useParams();
 
  


  const [total, setTotal] = useState();
  const [current, setCurrent] = useState();
  const [sold, setSold] = useState();
  const [verify, setVerify] = useState();
  const [cancel, setCancel] = useState();
  const [availableRent, setAvailableRent] = useState();
  const [availableSale, setAvailableSale] = useState();
  const [totalRented, setTotalRented] = useState();
  const [propertyData, setPropertyData] = useState([]);
  const [rate, setRate] = useState();
  const [chartData, setChartData] = useState({ labels: [], datasets: [{ data: [] }] });
  const [selectedPropertyId, setSelectedPropertyId] = useState('');
  const [propertyMarkers, setPropertyMarkers] = useState([]);
  const API_URL = `${API_BASE_URL}/api/agents/`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalResponse = await fetch(API_URL+agentId+"/count/property");
        const totalData = await totalResponse.json();
        setTotal(totalData);
  
        const currentResponse = await fetch(API_URL+agentId+"/count/approved");
        const currentData = await currentResponse.json();
        setCurrent(currentData);
  
        const soldResponse = await fetch(API_URL+agentId+"/count/sold");
        const soldData = await soldResponse.json();
        setSold(soldData);
  
        const verifyResponse = await fetch(API_URL+agentId+"/count/pending");
        const verifyData = await verifyResponse.json();
        setVerify(verifyData);
  
        const cancelResponse = await fetch(API_URL+agentId+"/count/cancelled");
        const cancelData = await cancelResponse.json();
        setCancel(cancelData);
  
        const propertiesResponse = await fetch(API_URL+agentId+"/properties");
        const propertiesData = await propertiesResponse.json();
        setPropertyData(propertiesData);
  
        const availableRentResponse = await fetch(API_URL+agentId+"/count/availableRent");
        const availableRentData = await availableRentResponse.json();
        setAvailableRent(availableRentData);
  
        const availableSaleResponse = await fetch(API_URL+agentId+"/count/availableSale");
        const availableSaleData = await availableSaleResponse.json();
        setAvailableSale(availableSaleData);
  
        const totalRentedResponse = await fetch(API_URL+agentId+"/count/totalRented");
        const totalRentedData = await totalRentedResponse.json();
        setTotalRented(totalRentedData);
  
        const rateResponse = await fetch(API_URL+agentId+"/successPercentage");
        const rateData = await rateResponse.json();
        setRate(rateData);

        const propertyResponse = await fetch(API_URL+agentId+"/properties");
        const propertyData = await propertyResponse.json();
        const propertyMarkersData = propertyData.map((property) => ({
          geocode: [property.latitude, property.longitude],
          popUp: property.cityName,
        }));
        setPropertyMarkers(propertyMarkersData);
  
        fetchTotalViews();
        fetchTotal();
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      
    };
  
    fetchData();
  }, [agentId,selectedPropertyId]);



  const fetchTotalViews = async () => {
    try {
      const response = await axios.get(API_URL+agentId+"/views");
      updateChartData(response.data);
    } catch (error) {
      console.error('Error fetching total views:', error);
    }
  };

  const dataAgent = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'white',
      borderColor: '#FFFFFF',
      pointBorderColor: '#FF0000',
      pointBorderWidth: 4,
      tension: 0.5
    }]
  };
  
const options = {
  plugins: {
    legend: false
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      min: 1,
      max: 10,
      ticks: {
        stepSize: 1,
        callback: (value) => value
      },
      grid: {
        borderDash: [10]
      }
    }
  }
};


const updateChartData = (viewsData) => {
  setChartData({
    ...dataAgent,
    datasets: [
      {
        ...dataAgent.datasets[0],
        data: viewsData,
      },
    ],
  });
};





const [propertyTrafficData, setPropertyTrafficData] = useState({
  labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    data: [],
    backgroundColor: 'white',
    borderColor: '#FFFFFF',
    pointBorderColor: '#FF0000',
    pointBorderWidth: 4,
    tension: 0.5
  }]
});

const updatePropertyTrafficData = (viewsData) => {
  setPropertyTrafficData({
    ...propertyTrafficData,
    datasets: [
      {
        ...propertyTrafficData.datasets[0],
        data: viewsData,
      },
    ],
  });
};

const fetchTotal = async () => {
  try {
    if (!selectedPropertyId) {
      console.error('No property selected.'); 
      return;
    }

    const response = await axios.get(API_BASE_URL+"/api/agents/"+selectedPropertyId+"/viewsProperty");
    updatePropertyTrafficData(response.data);
  } catch (error) {
    console.error('Error fetching total views:', error);
  }
};

  const customIcon = new Icon({
    iconUrl:
      "https://fontawesome.com/icons/location-pin?f=classic&s=solid&pc=%23ef0b0b",
    iconSize: [36, 36]
  });

  return (
    <Container>
      <h1 className='mt-5'>Welcome Back Agent {agentId}</h1>
    <Row className='mt-5'>
        <Col>
         <Card className="first-card bg-dark text-white text-center">
         <Card.Header>Total No of Properties</Card.Header>
         <Card.Body>{total}</Card.Body>
         </Card>
        </Col>
        <Col>
         <Card className="second-card bg-dark text-white text-center">
         <Card.Header>Current Properties</Card.Header>
         <Card.Body>{current}</Card.Body>
         </Card>
       </Col>
       <Col>
        <Card className="third-card bg-dark text-white text-center">
        <Card.Header>Sold properties</Card.Header>
        <Card.Body>{sold}</Card.Body>
        </Card>
       </Col>
       <Col>
      <Card className="fourth-card bg-dark text-white text-center" >
        <Card.Header>Due for verification</Card.Header>
        <Card.Body>{verify}</Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="fiveth-card bg-dark text-white text-center" >
        <Card.Header>Cancelled properties</Card.Header>
        <Card.Body>{cancel}</Card.Body>
      </Card>
      </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
        <Card className='tableone-card bg-dark text-white text-center'>
          <Card.Header>PROPERTY VERIFICATION STATUS</Card.Header>
          <Card.Body className='text-center'>
      <Table striped hover bordered variant="dark">
            <thead>
              <tr>
                <th width="150px">Property ID</th>
                <th width="100px">Status</th>
              </tr>
            </thead>
            <tbody>
              {propertyData.map((property) => (
                <tr key={property.id}>
                  <td>{property.id}</td>
                  <td className={property.verificationStatus === 'Approved' ? 'green' : ''}>
                    {property.verificationStatus}
                  </td>
                </tr>
              ))}
            </tbody>    
       </Table>
       </Card.Body>
       </Card> 
       </Col>
       <Col>
       <Row>
       <Col>
      <Card className="sixth-card bg-dark text-white text-center">
        <Card.Header>Available for rent</Card.Header>
        <Card.Body>{availableRent}</Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="seventh-card bg-dark text-white text-center" >
        <Card.Header>Available for Sale</Card.Header>
        <Card.Body>{availableSale}</Card.Body>
      </Card>
      </Col>
       </Row>
       <Row className='mt-5'>
       <Col>
      <Card className="eighth-card bg-dark text-white text-center">
        <Card.Header>Total Properties Rented</Card.Header>
        <Card.Body>{totalRented}</Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="nineth-card bg-dark text-white text-center" >
        <Card.Header>Success Percentage</Card.Header>
        <Card.Body>{rate}</Card.Body>
      </Card>
      </Col>
       </Row>
       </Col>
       </Row>
       <Row className='mt-5'>
       <Col>
       <Card className='graphone-card bg-dark text-white'>
       <Card.Header>AGENT PROFILE TRAFFIC</Card.Header>
        <Line  data={chartData} options={options} style = {{width:'100%'}}></Line>
        </Card>
       </Col>
      <Col className='ms-5'>
        <Card>
       <MapContainer center={[17.385, 78.4867]} zoom={8} style={{width:'100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
         {propertyMarkers.map((marker, index) => (
                <Marker key={index} position={marker.geocode} icon={customIcon}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>
      ))}
    </MapContainer>
    </Card>
    </Col>
      </Row>
       <Row>
       <Col className='mt-5' >
       <Card className='graphtwo-card bg-dark text-white'>
       <Card.Header>PROPERTY TRAFFIC
     <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    {selectedPropertyId ? `Property ${selectedPropertyId}` : 'Select a Property'}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {propertyData.map((property) => (
      <Dropdown.Item key={property.id} onClick={() => setSelectedPropertyId(property.id)}>
        Property {property.id}
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown>
       </Card.Header>
        <Line  data={propertyTrafficData} options={options} style = {{width:'100%'}}></Line>
        </Card>
       </Col> 
       </Row>
    
      </Container>
    
    
  );
}

export default Dashboard;
