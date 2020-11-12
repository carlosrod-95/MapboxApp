import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';
import { MarkerManager } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mapa: Mapboxgl.Map;
  
  ngOnInit() {

      (Mapboxgl as any).accessToken = environment.mapboxkey;

      this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // starting position
      zoom: 9 // starting zoom
      });

      this.crearMarcador( -74.5, 40 );

  }

  crearMarcador( lng: number, lat: number ) {

    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

      marker.on('drag', () => {
        console.log(marker.getLngLat());
      })

  }
}
