import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oe-sidebar',
  templateUrl: './oe-sidebar.component.html',
  styleUrls: ['./oe-sidebar.component.scss']
})
export class OeSidebarComponent implements OnInit {

  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;

  constructor() { }

  ngOnInit(): void {
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
