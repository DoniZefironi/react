import React from 'react';
import './placecomponent.css';
import photo1 from '../image/placebottom.png';

export default function PlaceComponent({ organization }){
    const photos = [
      {
        id: 1,
        url: photo1,
      },
      {
        id: 2,
        url: photo1,
      },
      {
        id: 3,
        url: photo1,
      }
    ];

    return (
      <div className="place" id="place">
        <div className="placetext">
          <div className="placete">
            <h2 id="mesto">A MEETING PLACE FOR LOCAL RESIDENTS OF RICHMOND.{organization}</h2>
            <p id="ivse">(AND ALL THE OTHERS).</p>
          </div>
          <div className="placeimg">
            {photos.map(photo => (
              <div key={photo.id}>
                <img src={photo.url} alt={`Photo ${photo.id}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="imgplaceimg">
          <div className="imgplace">
          </div>
        </div>
      </div>
    );
  }