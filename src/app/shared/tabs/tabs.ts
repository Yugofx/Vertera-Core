import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  defer,
  merge,
  Observable,
  Subject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'wor-tab',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tabs.scss'],
  host: {
    '[class.-selected]': 'selected',
    '(click)': 'select()',
  },
})
export class WorTab<T> implements AfterViewInit, OnDestroy {
  @Input() componentRef: Type<T>;
  @Input() selected: boolean;
  tabChanges = new Subject<any>();
  
  ngAfterViewInit() {
    if (!this.componentRef) {
      throw new Error('Please, provide any component to render');
    }
  }
  
  select() {
    if (!this.selected) {
      this.selected = true;
      this.tabChanges.next(this.componentRef);
    }
  }
  
  unselect() {
    if (this.selected) {
      this.selected = false;
      this.tabChanges.next(null);
    }
  }
  
  ngOnDestroy() {
    this.tabChanges.complete();
  }
}

@Component({
  selector: 'wor-tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],
})
export class WorTabs<T> implements OnInit, AfterContentInit, OnDestroy {
  destroy = new Subject();
  
  @ViewChild('container', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ContentChildren(WorTab) tabList: QueryList<WorTab<T>>;
  @Output() tabChanges = new EventEmitter<T>();
  activeTab: WorTab<T>;
  renderedComponent: ComponentRef<T>;
  readonly onTabChanges: Observable<any> = defer(() => {
    return merge(...this.tabList.map(tab => tab.tabChanges));
  });

  constructor(private componentFactory: ComponentFactoryResolver) {}

  ngOnInit() {
  }
  
  ngAfterContentInit() {
    this.checkDublicates();
    this.initFirst();
    this.onTabChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((componentRef: Type<T>) => {
        if (componentRef) {
          this.switchTab(componentRef);
          this.renderTabComponent();
          this.tabChanges.emit(this.renderedComponent.instance);
        }
      });
  }
  
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
    if (this.renderedComponent) {
      this.renderedComponent.destroy();
    }
  }
  
  switchTab(componentRef: Type<T>) {
    this.activeTab.unselect();
    this.activeTab = this.tabList.find(tab => tab.componentRef === componentRef);
    this.activeTab.select();
  }
  
  renderTabComponent() {
    if (this.activeTab) {
      if (this.renderedComponent) {
        this.renderedComponent.destroy();
      }
      const factory = this.componentFactory.resolveComponentFactory(this.activeTab.componentRef);
      this.vcr.clear();
      this.renderedComponent = this.vcr.createComponent(factory);
    }
  }
  
  private initFirst() {
    if (this.tabList.length) {
      const initiallySelected = this.tabList.find(tab => tab.selected);
      this.activeTab = initiallySelected ? initiallySelected : this.tabList.first;
      this.activeTab.select();
      this.renderTabComponent();
      this.tabChanges.emit(this.renderedComponent.instance);
    }
  }
  
  private checkDublicates() {
    this.tabList.reduce((acc, tab) => {
      if (acc.find(c => tab.componentRef === c)) {
        throw new Error('Two or more tabs contain the same component reference');
      } else {
        return acc.concat(tab.componentRef);
      }
    }, []);
  }
}
