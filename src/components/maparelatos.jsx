
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const iconeMarcador = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function MapaRelatos({ relatos }) {
  const relatosComLocalizacao = relatos.filter(
    (relato) =>
      relato.coordenadas &&
      Number.isFinite(relato.coordenadas.latitude) &&
      Number.isFinite(relato.coordenadas.longitude)
  );

  const centroInicial = relatosComLocalizacao.length > 0
    ? [
        relatosComLocalizacao[0].coordenadas.latitude,
        relatosComLocalizacao[0].coordenadas.longitude
      ]
    : [-8.0476, -34.8770];

  return (
    <section className="secao-mapa">
      <h2>Mapa dos problemas relatados</h2>

      <p>
        Visualize no mapa os locais onde os moradores registraram problemas.
      </p>

      {relatosComLocalizacao.length === 0 ? (
        <p className="sem-relatos">
          Ainda não existem relatos com localização geográfica.
        </p>
      ) : (
        <>
          <MapContainer
            center={centroInicial}
            zoom={13}
            scrollWheelZoom={true}
            className="mapa-relatos"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {relatosComLocalizacao.map((relato) => (
              <Marker
                key={relato.id}
                position={[
                  relato.coordenadas.latitude,
                  relato.coordenadas.longitude
                ]}
                icon={iconeMarcador}
              >
                <Popup>
                  <strong>{relato.categoria}</strong>
                  <br />
                  <span>{relato.localizacao}</span>
                  <br />
                  <span>{relato.descricao}</span>
                  <br />
                  <strong>Status: {relato.status}</strong>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <p className="legenda-mapa">
            📍 Total de locais identificados: {relatosComLocalizacao.length}
          </p>
        </>
      )}
    </section>
  );
}

export default MapaRelatos;
