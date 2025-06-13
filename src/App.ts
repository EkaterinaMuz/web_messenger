import  Handlebars from 'handlebars';

import { renderRoute } from './infrastructure/routing';
import { FormItem, InfoCell, ProfileHeader , Button} from './components';
import type { RouteConfigPaths } from './infrastructure/routing/types';

Handlebars.registerPartial('FormItem', FormItem);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('ProfileHeader', ProfileHeader);
Handlebars.registerPartial('InfoCell', InfoCell);

export default class App {
  constructor() {
    this.rootElement = document.getElementById('root');
  }

  public async init() {
    this.renderedPage = await renderRoute(this.currentPage);

    if (!this.renderedPage) {
      return;
    }

    this.render();
  }

  public render() {
    if(!this.rootElement || !this.renderedPage) {
      return null;
    }

    this.rootElement.innerHTML =  this.renderedPage;

    this.attachEventListeners();
  }

  public  attachEventListeners() {
    const links = document.querySelectorAll('[data-page]');

    links.forEach(link =>link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetElement = e.target as HTMLElement

      this.navigate(targetElement.dataset.page as RouteConfigPaths);
    }))
  }

  public navigate(page: RouteConfigPaths) {
    this.currentPage = page;
    this.init();
  }

  private readonly rootElement: HTMLElement | null;
  private currentPage: RouteConfigPaths = 'edit';
  private renderedPage: string | null = null;
  }
