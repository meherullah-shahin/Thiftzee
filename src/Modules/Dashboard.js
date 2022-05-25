import Map from './StoreLocation/Map';

const Dashboard = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1240px',
        overflow: 'hidden',
        margin: 'auto',
        width: '95%'
      }}
    >
      <Map />
    </div>
  );
};

export default Dashboard;
