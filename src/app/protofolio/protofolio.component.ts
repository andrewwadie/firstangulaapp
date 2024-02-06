import { Component, OnInit } from '@angular/core';
import { layer } from '@fortawesome/fontawesome-svg-core';
import * as $ from 'jquery';


@Component({
  selector: 'app-protofolio',
  templateUrl: './protofolio.component.html',
  styleUrls: ['./protofolio.component.css'],
})
export class ProtofolioComponent {
  display1() {
    let layer = document.getElementById("layer1")
    layer?.classList.remove("d-none")
  }
  disable1() {
    let layer = document.getElementById('layer1');
    layer?.classList.add("d-none")

  }
  display2() {
    let layer = document.getElementById("layer2")
    layer?.classList.remove("d-none")
  }
  disable2() {
    let layer = document.getElementById('layer2');
    layer?.classList.add("d-none")

  }
  display3() {
    let layer = document.getElementById("layer3")
    layer?.classList.remove("d-none")
  }
  disable3() {
    let layer = document.getElementById('layer3');
    layer?.classList.add("d-none")

  }
  display4() {
    let layer = document.getElementById("layer4")
    layer?.classList.remove("d-none")
  }
  disable4() {
    let layer = document.getElementById('layer4');
    layer?.classList.add("d-none")

  }
  display5() {
    let layer = document.getElementById("layer5")
    layer?.classList.remove("d-none")
  }
  disable5() {
    let layer = document.getElementById('layer5');
    layer?.classList.add("d-none")

  }
  display6() {
    let layer = document.getElementById("layer6")
    layer?.classList.remove("d-none")
  }
  disable6() {
    let layer = document.getElementById('layer6');
    layer?.classList.add("d-none")

  }
  displaylayer() {
    let layer = document.getElementById('layer1');
    console.log(layer)
  }
}
