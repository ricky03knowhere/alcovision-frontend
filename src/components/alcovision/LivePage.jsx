import Card from './Card';

const busCount = 4;

const LivePage = () => {
  return (
    <div class="row mt-2">
      {[...Array(busCount)].map((el, i) => (
        <div class="col-md-6">
          <Card id={i + 1} />
        </div>
      ))}
    </div>
  );
};

export default LivePage;
