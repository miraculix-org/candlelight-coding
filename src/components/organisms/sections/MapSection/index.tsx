//import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import ReactMapboxGl, {Feature, Layer} from 'react-mapbox-gl'

const MapSection = () => {
  const ReactMap = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoibW9ydG9uaSIsImEiOiJjaXYzOXE0bXYwMWM2Mm90YmV3aGJoYWtvIn0.oVEPUNVTai26CGUQPUIJLQ',
    interactive: true,
    scrollZoom: true
  })

  return (
    <ReactMap
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: '475px',
        width: '100%'
      }}
      center={[14.062960626902797, 46.54343025905074]}
      zoom={[15]}>
      <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
        <Feature coordinates={[14.062960626902797, 46.54343025905074]} />
      </Layer>
    </ReactMap>
  )
}

export default MapSection
